import { NextApiRequest, NextApiResponse } from "next";
import nookies from "nookies";
import { verify } from "lib/jwt";
import { graphQLClient } from "lib/client";
import { GET_USER, UPDATE_REALM_USERNAME, UPDATE_USERNAME } from "api/user";
import {
  GetUser,
  GetUserVariables,
  UpdateRealmUsername,
  UpdateRealmUsernameVariables,
  UpdateUsername,
  UpdateUsernameVariables,
} from "api/types";
import { REFRESH_TOKEN_COOKIE_NAME } from "./token";
import usernameBlocklist from "./username_blocklist.json";

export interface UserProfile {
  id: string;
  email: string;
  realmId: number;
  realmName: string;
  username: string;
  avatarUrl: string | null;
  status: string | null;
  createdAt: timestamptz;
}

export default async function handleProfile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = nookies.get({ req });
  const token = cookies[REFRESH_TOKEN_COOKIE_NAME];
  const realmIdString = req.query.realmId as string | undefined;
  const realmId = realmIdString ? parseInt(realmIdString, 10) : 1;

  if (req.method === "GET") {
    if (!token) {
      return res.status(200).send(null);
    }

    try {
      const { id: userId } = await verify(token, "refresh");

      const response = await graphQLClient.request<GetUser, GetUserVariables>(
        GET_USER,
        { userId, realmId }
      );
      const user = response.user_by_pk!;

      const realmUser = user.realm_users[0];
      if (!realmUser) {
        return res.status(403).send("Access denied");
      }

      res.send({
        id: user.id,
        email: user.email,
        realmId: realmUser.realm!.id,
        realmName: realmUser.realm!.name,
        username: realmUser.username,
        avatarUrl: realmUser.avatar_url,
        status: realmUser.status,
        createdAt: realmUser.created_at,
      } as UserProfile);
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
      const { id: userId } = await verify(token, "refresh");

      if (userId === username) {
        return res.status(409).send("Invalid username");
      }

      try {
        if (realmId === 1) {
          await graphQLClient.request<UpdateUsername, UpdateUsernameVariables>(
            UPDATE_USERNAME,
            {
              id: userId,
              username,
            }
          );
        } else {
          await graphQLClient.request<
            UpdateRealmUsername,
            UpdateRealmUsernameVariables
          >(UPDATE_REALM_USERNAME, {
            userId,
            realmId,
            username,
          });
        }

        res.status(200).end();
      } catch (e) {
        return res.status(409).send("Invalid username");
      }
    } catch (e) {
      return res.status(403).send("Access denied");
    }
  } else {
    res.status(405).end();
  }
}
