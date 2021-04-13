import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { encodeAccessToken, verify } from "lib/jwt";
import { graphQLClient } from "lib/client";
import { GetUser, GetUserVariables } from "api/types";
import { GET_USER } from "api/user";
import { REFRESH_TOKEN_COOKIE_NAME } from "./token";

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

  try {
    const { id } = await verify(refreshToken, "refresh");

    const response = await graphQLClient.request<GetUser, GetUserVariables>(
      GET_USER,
      { id }
    );
    const user = response.user_by_pk!;

    const accessToken = await encodeAccessToken(user);
    res.send({
      accessToken,
      expireAt: Math.floor(new Date().getTime() / 1000) + 1 * 60 * 60,
    } as Session);
  } catch (e) {
    return res.status(401).send("Unauthorized");
  }

  res.status(200).end();
}
