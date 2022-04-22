import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Button, Container, Paper, Typography } from "@mui/material";

const NotFound: React.FC<React.PropsWithChildren<unknown>> = () => {
  const router = useRouter();

  const courseRelated = router.asPath.startsWith("/courses/");
  const realmId = router.query.realmId as string | undefined;

  return (
    <>
      <NextSeo title="404 Not Found" noindex />
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
          {courseRelated && (
            <Typography sx={{ mt: 2 }} variant="body1">
              此课程还未被 courseX 课程信息共享计划收录；你可以通过 learnX App
              加入共享计划以帮助添加此课程的详细信息。
            </Typography>
          )}
          {realmId ? (
            <Link href={`/bbs/realms/${realmId}`} passHref>
              <Button sx={{ mt: 2 }} variant="contained">
                返回领域主页
              </Button>
            </Link>
          ) : (
            <Link href="/" passHref>
              <Button sx={{ mt: 2 }} variant="contained">
                返回主页
              </Button>
            </Link>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default NotFound;
