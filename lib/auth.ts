import type { NextApiResponse } from "next";
import nookies from "nookies";
import type { IncomingMessage } from "http";
import type { NextApiRequestCookies } from "next/dist/server/api-utils";
import {
  REFRESH_TOKEN_COOKIE_NAME,
  SESSION_ID_COOKIE_NAME,
} from "pages/api/auth/token";
import { verify } from "lib/jwt";
import { graphQLClient } from "lib/client";
import {
  GetSessionMutation,
  GetSessionMutationVariables,
} from "api/types/graphql";
import { GET_SESSION } from "api/session";

export const authenticate = async (
  req: IncomingMessage & { cookies: NextApiRequestCookies },
  res?: NextApiResponse
) => {
  const cookies = nookies.get({ req });
  const refreshToken = cookies[REFRESH_TOKEN_COOKIE_NAME];

  if (!refreshToken) {
    res?.status(401).send("Unauthorized");
    return false;
  } else {
    try {
      const { id, sessionId } = await verify(refreshToken, "refresh");

      const sessionData = await graphQLClient.request<
        GetSessionMutation,
        GetSessionMutationVariables
      >(GET_SESSION, { id: sessionId, activeAt: new Date().toISOString() });
      if (
        !sessionData.update_session_by_pk ||
        sessionData.update_session_by_pk.user_id !== id
      ) {
        nookies.destroy({ res }, SESSION_ID_COOKIE_NAME, { path: "/" });
        nookies.destroy({ res }, REFRESH_TOKEN_COOKIE_NAME, { path: "/" });
        res?.status(401).send("Unauthorized");
        return false;
      }

      return { id };
    } catch (e) {
      res?.status(401).send("Unauthorized");
      return false;
    }
  }
};
