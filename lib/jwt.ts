import jwt from "jsonwebtoken";

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  avatar_url?: string | null;
}

export interface UserJwt extends User {
  iat: number;
  exp: number;
}

export const encodeRefreshToken = (user: User) => {
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

export const encodeAccessToken = (user: User) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": [user.role],
          "x-hasura-default-role": user.role,
          "x-hasura-user-id": user.id,
          "x-hasura-user-username": user.username,
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
  return new Promise<UserJwt>((resolve, reject) => {
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
          return resolve(decoded as UserJwt);
        }
      }
    );
  });
};
