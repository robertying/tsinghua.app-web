import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { encodeAccessToken, verify } from "lib/jwt";
import { graphQLClient } from "lib/client";
import {
  GetSessionMutation,
  GetSessionMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
} from "api/types/graphql";
import { GET_USER } from "api/user";
import { GET_SESSION } from "api/session";
import { REFRESH_TOKEN_COOKIE_NAME, SESSION_ID_COOKIE_NAME } from "./token";

export interface Session {
  accessToken: string;
  expireAt: number;
}

export default async function handleSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = nookies.get({ req });
  const refreshToken =
    req.body.refreshToken ?? cookies[REFRESH_TOKEN_COOKIE_NAME];

  if (!refreshToken) {
    return res.status(422).send("Missing refresh token");
  }

  try {
    const { id, sessionId: sId } = await verify(refreshToken, "refresh");
    const userId = id === "learnx" ? process.env.LEARNX_USER_ID! : id;
    const sessionId =
      userId === process.env.LEARNX_USER_ID!
        ? process.env.LEARNX_SESSION_ID!
        : sId;

    const sessionData = await graphQLClient.request<
      GetSessionMutation,
      GetSessionMutationVariables
    >(GET_SESSION, { id: sessionId, activeAt: new Date().toISOString() });
    if (
      id !== "learnx" &&
      (!sessionData.update_session_by_pk ||
        sessionData.update_session_by_pk.user_id !== userId)
    ) {
      nookies.destroy({ res }, SESSION_ID_COOKIE_NAME, { path: "/" });
      nookies.destroy({ res }, REFRESH_TOKEN_COOKIE_NAME, { path: "/" });
      return res.status(401).send("Unauthorized");
    }

    const userData = await graphQLClient.request<
      GetUserQuery,
      GetUserQueryVariables
    >(GET_USER, { userId, realmId: 1 });
    const user = userData.user_by_pk!;

    const accessToken = await encodeAccessToken({
      id: user.id,
      universityId: user.university_id,
      email: user.email,
      role: user.role,
      realmIds: user.realm_ids.map((u) => u.realm_id!),
    });
    res.send({
      accessToken,
      expireAt: Math.floor(new Date().getTime() / 1000) + 1 * 60 * 60, // 1h
    } as Session);
  } catch (e) {
    return res.status(401).send("Unauthorized");
  }

  res.status(200).end();
}
