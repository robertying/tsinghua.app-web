import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import axios from "axios";
import type { Session } from "pages/api/auth/session";
import type { UserProfile } from "pages/api/auth/profile";

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

export const clearSession = () => {
  expireAt = 0;
  accessToken = null;
};

export const useUser = () => {
  const router = useRouter();
  const realmId = router.query.realmId ?? 1;

  const { data, error } = useSWR<UserProfile | null>(
    `/api/auth/profile?realmId=${realmId}`,
    {
      shouldRetryOnError: false,
    }
  );

  const loading = !data && !error;

  const refetch = () => mutate(`/api/auth/profile?realmId=${realmId}`);

  return [data, loading, refetch] as [
    UserProfile | null | undefined,
    boolean,
    typeof refetch
  ];
};

export const useAuthRoute = () => {
  const router = useRouter();

  const [user, authLoading] = useUser();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/auth/login?redirect_url=${router.asPath}`);
    }
  }, [authLoading, router, user]);
};
