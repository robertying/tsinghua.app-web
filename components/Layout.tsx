import Link from "next/link";
import { useRouter } from "next/router";
import { Fab, Typography, Zoom } from "@material-ui/core";
import { ArrowBack, PersonAdd } from "@material-ui/icons";
import { useUser } from "lib/session";
import MyImage from "./Image";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const isProfile = router.pathname === "/profile";

  const [user, authLoading] = useUser();

  return (
    <>
      {children}
      {isProfile ? (
        <Fab
          sx={{
            position: "fixed",
            zIndex: 99,
            top: 16,
            right: 16,
            fontSize: 24,
            boxShadow: 3,
          }}
          size="medium"
          onClick={() => router.back()}
        >
          <ArrowBack />
        </Fab>
      ) : (
        <Link href="/profile" passHref>
          <Zoom in={!authLoading}>
            <Fab
              sx={{
                position: "fixed",
                zIndex: 99,
                top: 16,
                right: 16,
                fontSize: 24,
                boxShadow: 3,
              }}
              size="medium"
            >
              {user ? (
                user.avatar_url ? (
                  <MyImage
                    css={{ borderRadius: 24 }}
                    square
                    alt={user.username}
                    src={user.avatar_url}
                    layout="fixed"
                    width={48}
                    height={48}
                  />
                ) : (
                  user.username[0].toUpperCase()
                )
              ) : (
                <PersonAdd />
              )}
            </Fab>
          </Zoom>
        </Link>
      )}
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
