import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  Button,
  Container,
  FormControlLabel,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import NProgress from "nprogress";
import axios, { AxiosError } from "axios";
import { clearSession, useAuthRoute, useUser } from "lib/session";
import { GET_REALM_DETAILS } from "api/realm";
import { GetRealmDetails, GetRealmDetailsVariables } from "api/types";
import NotFound from "pages/404";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";

const RealmEnter: React.FC = () => {
  const toast = useToast();

  const [user] = useUser();

  const router = useRouter();
  const realmId = (router.query.realmId ?? "1") as string;

  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: realmData, loading: realmLoading } = useQuery<
    GetRealmDetails,
    GetRealmDetailsVariables
  >(GET_REALM_DETAILS, {
    variables: {
      id: parseInt(realmId!, 10),
    },
  });
  const realm = realmData?.realm_public?.[0]!;

  const handleRealmEnter: React.FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();

    if (!isAdmin && realm.private && !code) {
      toast("info", "请填写邀请码");
      return;
    }

    if (!username) {
      toast("info", "请设置用户名");
      return;
    }

    NProgress.start();
    setLoading(true);

    try {
      await axios.post(`/api/auth/profile?realmId=${realm.id}`, {
        username,
        code,
      });

      clearSession();
      router.reload();
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 409) {
        toast("error", "加入失败：用户名已被占用或不允许被使用");
      } else if (axiosError.response?.status === 403) {
        toast("error", "加入失败：邀请码无效");
      } else {
        toast("error", "加入失败：" + axiosError.message);
      }
    } finally {
      setLoading(false);
      NProgress.done();
    }
  };

  useAuthRoute();

  useEffect(() => {
    if (realm && user?.username) {
      router.replace(`/bbs/realms/${realm.id}`);
    }
  }, [realm, router, user]);

  useEffect(() => {
    if (router.query.admin === "true") {
      setIsAdmin(true);
    }
  }, [router]);

  if (realmLoading) {
    return <Splash />;
  }

  if (!realmLoading && !realm) {
    return <NotFound />;
  }

  return (
    <>
      <NextSeo
        title={`加入 - ${realm.name!}`}
        description={realm.description!}
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
        maxWidth="sm"
      >
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
          }}
          component="form"
          noValidate
          onSubmit={handleRealmEnter}
        >
          <Typography sx={{ fontWeight: 500 }} variant="h5" component="h1">
            {realm.name}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body1" component="h2">
            {realm.description}
          </Typography>
          {realm.private && (
            <FormControlLabel
              sx={{ mt: 2, display: "block" }}
              control={
                <Switch
                  color="primary"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
              }
              label="我是管理员"
            />
          )}
          {!isAdmin && realm.private && (
            <>
              <Typography sx={{ mt: 4 }} variant="caption">
                此为私有领域，需要邀请码才能加入
              </Typography>
              <TextField
                sx={{ mt: 2 }}
                name="code"
                fullWidth
                label="邀请码"
                placeholder="XXXX"
                value={code}
                onChange={(e) =>
                  setCode(
                    e.target.value.trim().replaceAll(" ", "").substr(0, 4)
                  )
                }
              />
            </>
          )}
          <TextField
            sx={{ mt: realm.private ? 2 : 4 }}
            name="username"
            fullWidth
            label="用户名"
            placeholder="仅用于此领域"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value.trim().replaceAll(" ", "").substr(0, 16)
              )
            }
          />
          <Button
            sx={{ mt: 4 }}
            type="submit"
            variant="contained"
            disabled={loading}
          >
            加入
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default RealmEnter;
