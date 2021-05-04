import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { v4 as uuid } from "uuid";
import totp from "lib/totp";
import { validateEmail } from "lib/validate";
import { encodeRefreshToken } from "lib/jwt";
import { graphQLClient } from "lib/client";
import { ADD_OR_UPDATE_USER } from "api/user";
import { ADD_SESSION } from "api/session";
import {
  AddOrUpdateUser,
  AddOrUpdateUserVariables,
  AddSession,
  AddSessionVariables,
} from "api/types";

export const SESSION_ID_COOKIE_NAME =
  process.env.NODE_ENV === "production" ? "__Host-session_id" : "session_id";
export const REFRESH_TOKEN_COOKIE_NAME =
  process.env.NODE_ENV === "production"
    ? "__Host-refresh_token"
    : "refresh_token";

export default async function handleToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.body.email;
  if (!email) {
    return res.status(422).send("Missing user email");
  }
  if (!validateEmail(email)) {
    return res.status(422).send("Invalid user email");
  }
  const otp = req.body.otp;
  if (!otp) {
    return res.status(422).send("Missing otp");
  }
  if (otp.toString().length !== 6) {
    return res.status(422).send("Invalid otp");
  }
  const ua = req.body.ua ?? req.headers["user-agent"];
  if (!ua) {
    return res.status(422).send("Missing user agent");
  }

  try {
    const valid = await totp.check(otp, email + process.env.AUTH_TOTP_SECRET!);

    if (!valid) {
      return res.status(401).send("Unauthorized");
    }

    const universityId = email.split("@")[0];

    try {
      const userData = await graphQLClient.request<
        AddOrUpdateUser,
        AddOrUpdateUserVariables
      >(ADD_OR_UPDATE_USER, {
        universityId,
        email,
      });
      const user = userData.insert_user_one!;

      const sessionData = await graphQLClient.request<
        AddSession,
        AddSessionVariables
      >(ADD_SESSION, {
        id: req.cookies[SESSION_ID_COOKIE_NAME] || uuid(),
        userId: user.id,
        description: ua,
        activeAt: new Date().toISOString(),
      });
      const sessionId = sessionData.insert_session_one!.id;

      const refreshToken = await encodeRefreshToken({
        id: user.id,
        universityId: user.university_id,
        email: user.email,
        sessionId,
      });
      nookies.set({ res }, SESSION_ID_COOKIE_NAME, sessionId, {
        httpOnly: true,
        maxAge: 179 * 24 * 60 * 60, // 179d
        path: "/",
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
      });
      nookies.set({ res }, REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
        httpOnly: true,
        maxAge: 179 * 24 * 60 * 60, // 179d
        path: "/",
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).end();
    }
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  res.status(200).end();
}
