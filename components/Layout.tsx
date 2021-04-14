import { useRouter } from "next/router";
import { Stack, Typography } from "@material-ui/core";
import { ArrowBack, PersonAdd } from "@material-ui/icons";
import { useUser } from "lib/session";
import MyFab from "./Fab";
import MyAvatar from "./Avatar";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const isAuth = router.pathname.startsWith("/auth");
  const isProfile = router.pathname === "/profile";

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
          <MyFab
            sx={{
              "& > .MuiFab-label": {
                width: "100%",
                height: "100%",
              },
            }}
            onClick={() => router.push("/profile")}
          >
            <MyAvatar
              sx={{
                width: "90%",
                height: "90%",
              }}
              src={user.avatar_url ?? undefined}
              alt={user.username}
              size="medium"
            />
          </MyFab>
        )}
        {!isProfile && !isAuth && !authLoading && !user && (
          <MyFab onClick={() => router.push("/auth/login")}>
            <PersonAdd />
          </MyFab>
        )}
        {(isProfile || isAuth) && (
          <MyFab onClick={() => router.back()}>
            <ArrowBack />
          </MyFab>
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
