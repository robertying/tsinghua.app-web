import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { verify } from "lib/jwt";
import { graphQLClient } from "lib/client";
import { GET_USER, UPDATE_USERNAME } from "api/user";
import {
  GetUser,
  GetUserVariables,
  UpdateUsername,
  UpdateUsernameVariables,
} from "api/types";
import { REFRESH_TOKEN_COOKIE_NAME } from "./token";
import usernameBlocklist from "./username_blocklist.json";

export default async function handleProfile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = nookies.get({ req });
  const token = cookies[REFRESH_TOKEN_COOKIE_NAME];

  if (req.method === "GET") {
    if (!token) {
      return res.status(200).send(null);
    }

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
  } else if (req.method === "POST") {
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

    if (!token) {
      return res.status(401).send("Unauthorized");
    }

    try {
      const { id } = await verify(token, "refresh");

      if (id === username) {
        return res.status(409).send("Invalid username");
      }

      try {
        const data = await graphQLClient.request<
          UpdateUsername,
          UpdateUsernameVariables
        >(UPDATE_USERNAME, {
          id,
          username,
        });
        const user = data.update_user_by_pk!;

        res.send(user);
      } catch (e) {
        return res.status(409).send("Invalid username");
      }
    } catch (e) {
      return res.status(403).send("Access denied");
    }

    res.status(200).end();
  } else {
    res.status(405).end();
  }
}
