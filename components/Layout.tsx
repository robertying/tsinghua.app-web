import { useRouter } from "next/router";
import { Stack, Tooltip, Typography } from "@material-ui/core";
import { ArrowBack, PersonAdd } from "@material-ui/icons";
import { useUser } from "lib/session";
import MyFab from "./Fab";
import MyAvatar from "./Avatar";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const realmId = router.query.realmId ?? 1;
  const isAuth = router.pathname.startsWith("/auth");
  const isProfile = router.pathname.endsWith("/profile");

  const [user, authLoading] = useUser();

  return (
    <>
      <Stack
        id="action-bar"
        sx={{
          position: "fixed",
          zIndex: 99,
          top: "1rem",
          right: "1rem",
        }}
        direction="row-reverse"
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
      >
        {!isProfile && !authLoading && user && (
          <Tooltip title="用户信息">
            <MyFab
              sx={{
                "& > .MuiFab-label": {
                  width: "100%",
                  height: "100%",
                },
              }}
              onClick={() => router.push(`/bbs/realms/${realmId}/profile`)}
            >
              <MyAvatar
                sx={{
                  width: "90%",
                  height: "90%",
                }}
                src={user.avatarUrl ?? undefined}
                alt={user.username}
                size="medium"
              />
            </MyFab>
          </Tooltip>
        )}
        {!isProfile && !isAuth && !authLoading && !user && (
          <Tooltip title="登录">
            <MyFab onClick={() => router.push("/auth/login")}>
              <PersonAdd />
            </MyFab>
          </Tooltip>
        )}
        {(isProfile || isAuth) && (
          <Tooltip title="返回">
            <MyFab onClick={() => router.back()}>
              <ArrowBack />
            </MyFab>
          </Tooltip>
        )}
      </Stack>
      {children}
      <Typography
        sx={{ textAlign: "center", my: 2 }}
        variant="caption"
        component="footer"
      >
        © 2021 Rui Ying
      </Typography>
    </>
  );
};

export default Layout;
