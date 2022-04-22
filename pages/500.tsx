import Link from "next/link";
import { NextSeo } from "next-seo";
import { Button, Container, Paper, Typography } from "@mui/material";

const InternalError: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <>
      <NextSeo title="500 Internal Error" noindex />
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
            500 Internal Error
          </Typography>
          <Typography sx={{ mt: 4 }} variant="body1">
            服务器内部产生了错误。请稍后重试。
          </Typography>
          <Link href="/" passHref>
            <Button sx={{ mt: 2 }} variant="contained">
              返回主页
            </Button>
          </Link>
        </Paper>
      </Container>
    </>
  );
};

export default InternalError;
