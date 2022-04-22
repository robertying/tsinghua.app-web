import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import NProgress from "nprogress";
import { useToast } from "components/Snackbar";
import { validateEmail } from "lib/validate";

const Verify: React.FC<React.PropsWithChildren<unknown>> = () => {
  const toast = useToast();

  const router = useRouter();

  const [email, setEmail] = useState(
    (router.query.email as string | undefined) ?? ""
  );
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!email) {
      toast("info", "请输入需要验证的邮箱");
      return;
    }
    if (!validateEmail(email)) {
      toast("warning", "请输入需要验证的清华邮箱");
      return;
    }
    if (!otp) {
      toast("info", "请输入邮件中包含的验证码");
      return;
    }
    if (otp.toString().length !== 6) {
      toast("warning", "请输入邮件中包含的 6 位验证码");
      return;
    }

    NProgress.start();
    setLoading(true);

    try {
      await axios.post("/api/auth/token", {
        email,
        otp,
      });

      router.push(
        router.query.redirect_url
          ? `/auth/login?redirect_url=${router.query.redirect_url}`
          : "/auth/login"
      );
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 401) {
        toast("error", "验证失败：验证码无效");
      } else {
        toast("error", "验证失败：" + axiosError.message);
      }
    } finally {
      setLoading(false);
      NProgress.done();
    }
  };

  useEffect(() => {
    if (router.query.email) {
      setEmail(router.query.email as string);
    }
  }, [router.query.email]);

  return (
    <>
      <NextSeo title="验证" />
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
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h4" component="h1">
            检查你的邮箱
          </Typography>
          <Typography sx={{ mt: 4 }} variant="body1">
            包含 6 位验证码的邮件已发送到你的邮箱，有效期 30
            分钟。邮件到达通常需要 5-10 分钟。
          </Typography>
          <Box
            sx={{
              mt: 4,
            }}
            component="form"
          >
            <TextField
              label="邮箱"
              fullWidth
              type="email"
              autoComplete="email"
              disabled
              value={email}
              onChange={(e) =>
                setEmail(e.target.value.trim().replaceAll(" ", ""))
              }
            />
            <TextField
              sx={{ mt: 2 }}
              label="验证码"
              fullWidth
              type="number"
              autoComplete="one-time-code"
              placeholder="XXXXXX"
              inputProps={{
                pattern: "[0-9]*",
              }}
              value={otp}
              onChange={(e) => setOtp(e.target.value.trim().substr(0, 6))}
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", flexDirection: "row" }}>
            <Link
              href={
                router.query.redirect_url
                  ? `/auth/login?redirect_url=${router.query.redirect_url}`
                  : "/auth/login"
              }
              passHref
            >
              <Button>返回登录</Button>
            </Link>
            <Button
              sx={{ ml: 2 }}
              variant="contained"
              disabled={loading}
              onClick={handleVerify}
            >
              验证
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Verify;
