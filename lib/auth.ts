import type { NextApiResponse } from "next";
import nookies from "nookies";
import type { IncomingMessage } from "node:http";
import type { NextApiRequestCookies } from "next/dist/next-server/server/api-utils";
import { REFRESH_TOKEN_COOKIE_NAME } from "pages/api/auth/token";
import { verify } from "lib/jwt";

export const authenticate = async (
  req: IncomingMessage & { cookies: NextApiRequestCookies },
  res?: NextApiResponse
) => {
  const cookies = nookies.get({ req });
  const token = cookies[REFRESH_TOKEN_COOKIE_NAME];

  if (!token) {
    res?.status(401).send("Unauthorized");
    return false;
  } else {
    try {
      const { id } = await verify(token, "refresh");
      return { id };
    } catch (e) {
      res?.status(401).send("Unauthorized");
      return false;
    }
  }
};
