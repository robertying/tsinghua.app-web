import Link from "next/link";
import { NextSeo } from "next-seo";
import { Button, Container, Paper, Typography } from "@material-ui/core";

const NotFound: React.FC = () => {
  return (
    <>
      <NextSeo title="404 未找到" noindex />
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
            404 Not Found
          </Typography>
          <Typography sx={{ mt: 4 }} variant="body1">
            请求的页面不存在。
          </Typography>
          <Link href="/">
            <a>
              <Button sx={{ mt: 2 }} variant="contained">
                返回主页
              </Button>
            </a>
          </Link>
        </Paper>
      </Container>
    </>
  );
};

export default NotFound;
