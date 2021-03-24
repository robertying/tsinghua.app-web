import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextSeo } from "next-seo";
import {
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import NProgress from "nprogress";
import axios, { AxiosError } from "axios";
import { useToast } from "components/Snackbar";
import { validateEmail } from "lib/validate";
import { useUser } from "lib/session";

declare const grecaptcha: any;

const Login: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const redirectUrl = router.query.redirect_url as string | undefined;

  const [user, authLoading] = useUser();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();

    if (!email) {
      toast("info", "请输入清华邮箱");
      return;
    }
    if (!validateEmail(email)) {
      toast("warning", "请输入有效的清华邮箱");
      return;
    }

    NProgress.start();
    setLoading(true);

    grecaptcha.ready(function () {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
          action: "login",
        })
        .then(async function (token: string) {
          try {
            await axios.post("/api/auth/login", {
              email,
              recaptcha: token,
            });

            router.push(
              `/auth/verify?email=${email}${
                router.query.redirect_url
                  ? `&redirect_url=${router.query.redirect_url}`
                  : ""
              }`
            );
          } catch (err) {
            const axiosError = err as AxiosError;
            if (axiosError.response?.status === 403) {
              toast("error", "登录失败，请稍后重试");
            } else {
              toast("error", "登录失败：" + axiosError.message);
            }
          } finally {
            setLoading(false);
            NProgress.done();
          }
        });
    });
  };

  useEffect(() => {
    if (user) {
      router.push(redirectUrl ?? "/");
    }
  }, [redirectUrl, router, user]);

  return (
    <>
      <Head>
        <script
          src={`https://www.recaptcha.net/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        />
      </Head>
      <NextSeo title="登录" />
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
          component="form"
          noValidate
          sx={{
            p: 4,
            textAlign: "center",
          }}
          onSubmit={handleSubmit}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h4" component="h1">
            星期四 Thursday
          </Typography>
          {authLoading ? (
            <CircularProgress sx={{ mt: 4 }} />
          ) : user ? (
            <>
              <CircularProgress sx={{ mt: 4 }} />
              <Typography sx={{ mt: 4 }} variant="body1">
                登录成功！跳转中……
              </Typography>
            </>
          ) : (
            <>
              <TextField
                sx={{ mt: 4 }}
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                fullWidth
                label="清华邮箱"
                helperText="以 tsinghua.edu.cn 或 tsinghua.org.cn 结尾的邮箱地址"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={email ? !validateEmail(email) : false}
              />
              <Button
                sx={{ mt: 4 }}
                type="submit"
                variant="contained"
                disabled={loading}
              >
                登录
              </Button>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Login;
