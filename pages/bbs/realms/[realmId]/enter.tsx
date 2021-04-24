import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
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
import { addApolloState, initializeApollo } from "lib/client";
import { useUser } from "lib/session";
import { GET_REALM_DETAILS } from "api/realm";
import { GetRealmDetails, GetRealmDetailsVariables } from "api/types";
import NotFound from "pages/404";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";

const RealmEnter: React.FC = () => {
  const toast = useToast();
  const [user] = useUser();
  const router = useRouter();
  const realmId = router.query.realmId as string | undefined;

  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data } = useQuery<GetRealmDetails, GetRealmDetailsVariables>(
    GET_REALM_DETAILS,
    {
      variables: {
        id: parseInt(realmId!, 10),
      },
      skip: !realmId,
    }
  );
  const realm = data?.realm_by_pk!;

  const handleEnterRealm: React.FormEventHandler<HTMLElement> = async (e) => {
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

  if (router.isFallback) {
    return <Splash />;
  }

  if (!realm) {
    return <NotFound />;
  }

  return (
    <>
      <NextSeo
        title={`加入 - ${realm.name}`}
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
          onSubmit={handleEnterRealm}
        >
          <Typography sx={{ fontWeight: 500 }} variant="h4" component="h1">
            {realm.name}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body1" component="h2">
            {realm.description}
          </Typography>
          <FormControlLabel
            sx={{ mt: 2, display: "block" }}
            control={
              <Switch
                color="primary"
                checked={isAdmin}
                onChange={(e, checked) => setIsAdmin(checked)}
              />
            }
            label="我是管理员"
          />
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  if (params?.realmId) {
    await client.query<GetRealmDetails, GetRealmDetailsVariables>({
      query: GET_REALM_DETAILS,
      variables: {
        id: parseInt(params?.realmId as string, 10),
      },
    });
  }

  return addApolloState(client, {
    props: {},
    revalidate: 1,
  });
};
