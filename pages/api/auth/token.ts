import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import totp from "lib/totp";
import { validateEmail } from "lib/validate";
import { encodeRefreshToken } from "lib/jwt";
import { graphQLClient } from "lib/client";
import { ADD_OR_UPDATE_USER } from "api/user";
import { AddOrUpdateUser, AddOrUpdateUserVariables } from "api/types";
import usernameBlocklist from "./username_blocklist.json";

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
  const username = req.body.username;
  if (!username) {
    return res.status(422).send("Missing username");
  }
  if (username.length > 16) {
    return res.status(422).send("Username too long");
  }
  if (usernameBlocklist.includes(username)) {
    return res.status(409).send("Invalid username");
  }
  const otp = req.body.otp;
  if (!otp) {
    return res.status(422).send("Missing otp");
  }
  if (otp.toString().length !== 6) {
    return res.status(422).send("Invalid otp");
  }

  try {
    const valid = await totp.check(otp, email + process.env.AUTH_TOTP_SECRET!);

    if (!valid) {
      return res.status(401).send("Unauthorized");
    }

    const id = email.split("@")[0];

    try {
      const data = await graphQLClient.request<
        AddOrUpdateUser,
        AddOrUpdateUserVariables
      >(ADD_OR_UPDATE_USER, {
        id,
        email,
        username,
      });
      const user = data.insert_user_one!;

      const refreshToken = await encodeRefreshToken(user);
      nookies.set({ res }, REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
        httpOnly: true,
        maxAge: 90 * 24 * 60 * 60,
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
