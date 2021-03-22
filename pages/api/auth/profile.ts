import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { verify } from "lib/jwt";
import { graphQLClient } from "lib/client";
import { GET_USER } from "api/user";
import { GetUser, GetUserVariables } from "api/types";
import { REFRESH_TOKEN_COOKIE_NAME } from "./token";

export default async function handleProfile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = nookies.get({ req });
  const token = cookies[REFRESH_TOKEN_COOKIE_NAME];

  try {
    const { id } = await verify(token, "refresh");

    const response = await graphQLClient.request<GetUser, GetUserVariables>(
      GET_USER,
      { id }
    );
    const user = response.user_by_pk!;

    res.send(user);
  } catch (e) {
    return res.status(403).send("Access denied");
  }

  res.status(200).end();
}
