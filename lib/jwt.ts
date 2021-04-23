import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

export const encodeRefreshToken = (user: { id: string; email: string }) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.AUTH_REFRESH_TOKEN_SECRET!,
      {
        algorithm: "HS512",
        expiresIn: "90d",
      },
      (err, encoded) => {
        if (err || !encoded) {
          return reject(err);
        } else {
          return resolve(encoded);
        }
      }
    );
  });
};

export const encodeAccessToken = (user: {
  id: string;
  email: string;
  role: string;
  realmIds: number[];
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      {
        id: user.id,
        email: user.email,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": [user.role],
          "x-hasura-default-role": user.role,
          "x-hasura-user-id": user.id,
          "x-hasura-user-realms": `{${[1, ...user.realmIds].join(",")}}`,
        },
      },
      process.env.AUTH_ACCESS_TOKEN_SECRET!,
      {
        algorithm: "HS512",
        expiresIn: "1h",
      },
      (err, encoded) => {
        if (err || !encoded) {
          return reject(err);
        } else {
          return resolve(encoded);
        }
      }
    );
  });
};

export const verify = (token: string | null, type: "refresh" | "access") => {
  return new Promise<JwtPayload>((resolve, reject) => {
    if (!token) {
      return reject();
    }
    jwt.verify(
      token,
      type === "access"
        ? process.env.AUTH_ACCESS_TOKEN_SECRET!
        : process.env.AUTH_REFRESH_TOKEN_SECRET!,
      { algorithms: ["HS512"] },
      (err, decoded) => {
        if (err || !decoded) {
          return reject(err);
        } else {
          return resolve(decoded as JwtPayload);
        }
      }
    );
  });
};
