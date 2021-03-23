import useSWR from "swr";
import axios from "axios";
import type { Session } from "pages/api/auth/session";
import { User } from "./jwt";

let expireAt = 0;
let accessToken: string | null = null;

export const getAccessToken = async () => {
  if (new Date().getTime() / 1000 < expireAt && accessToken) {
    return accessToken;
  }

  try {
    const response = await axios.get<Session>("/api/auth/session");

    const session = response.data;
    expireAt = session.expireAt;
    accessToken = session.accessToken;
  } catch {
    expireAt = 0;
    accessToken = null;
  }

  return accessToken;
};

export const useAccessToken = () => {
  const { data, error } = useSWR<Session>("/api/auth/session", {
    refreshInterval: 45 * 60 * 1000,
  });

  const loading = !data && !error;

  return [data?.accessToken, loading] as [string | undefined, boolean];
};

export const useUser = () => {
  const { data, error } = useSWR<User | null>("/api/auth/profile", {
    shouldRetryOnError: false,
  });

  const loading = !data && !error;

  return [data, loading] as [User | null | undefined, boolean];
};
