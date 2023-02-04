import { useRouter } from "next/router";
import Link from "next/link";
import { Badge, Stack, Tooltip } from "@mui/material";
import {
  ArrowBack,
  Chat,
  PersonAdd,
  Notifications,
  GroupAdd,
  Home,
} from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import {
  GetNewNotificationCount,
  GetNewNotificationCountVariables,
} from "api/types";
import { GET_NEW_NOTIFICATION_COUNT } from "api/notification";
import { useUser } from "lib/session";
import MyFab from "./Fab";
import MyAvatar from "./Avatar";

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter();
  const realmId = router.query.realmId ?? 1;

  const isAuth = router.pathname.startsWith("/auth");
  const isNotifications = router.pathname.endsWith("/notifications");

  const isBbs = router.pathname.startsWith("/bbs");
  const isBbsHome = router.pathname.endsWith("/bbs");
  const isEnter = router.pathname.endsWith("/enter");
  const isProfile = router.pathname.endsWith("/profile");
  const isMessages = router.pathname.endsWith("/messages");

  const isCourses =
    router.pathname.endsWith("/courses") ||
    router.pathname.startsWith("/courses/search");

  const isLearn = router.pathname.startsWith("/learnX");

  const [user, authLoading] = useUser();

  const { data: newNotificationData } = useQuery<
    GetNewNotificationCount,
    GetNewNotificationCountVariables
  >(GET_NEW_NOTIFICATION_COUNT, {
    variables: {
      userId: user?.id!,
    },
    skip: !user,
    pollInterval: 30 * 1000, // 30s
  });
  const notificationCount =
    newNotificationData?.notification_aggregate.aggregate?.count;

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
        {!isProfile &&
          !authLoading &&
          user &&
          (user.username ? (
            <Link
              href={`/bbs/realms/${realmId}/profile`}
              passHref
              legacyBehavior
            >
              <Tooltip title="用户信息">
                <MyFab
                  sx={{
                    "& > .MuiFab-label": {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                >
                  <MyAvatar
                    src={user.avatarUrl ?? undefined}
                    alt={user.username}
                    size="medium"
                  />
                </MyFab>
              </Tooltip>
            </Link>
          ) : !isEnter ? (
            <Link href={`/bbs/realms/${realmId}/enter`} passHref legacyBehavior>
              <Tooltip title="加入领域">
                <MyFab
                  sx={{
                    "& > .MuiFab-label": {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                  color="primary"
                >
                  <GroupAdd />
                </MyFab>
              </Tooltip>
            </Link>
          ) : null)}
        {isBbs && !isMessages && !authLoading && user && user.username && (
          <Link
            href={`/bbs/realms/${realmId}/messages`}
            passHref
            legacyBehavior
          >
            <Tooltip title="消息">
              <MyFab
                sx={{
                  "& > .MuiFab-label": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Chat />
              </MyFab>
            </Tooltip>
          </Link>
        )}
        {!isNotifications && !authLoading && user && (
          <Link href="/notifications" passHref legacyBehavior>
            <Tooltip title="通知">
              <MyFab
                sx={{
                  "& > .MuiFab-label": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Badge
                  color="primary"
                  badgeContent={notificationCount}
                  invisible={!notificationCount}
                >
                  <Notifications />
                </Badge>
              </MyFab>
            </Tooltip>
          </Link>
        )}
        {!isProfile && !isAuth && !authLoading && !user && (
          <Link
            href={`/auth/login?redirect_url=${router.asPath}`}
            passHref
            legacyBehavior
          >
            <Tooltip title="登录">
              <MyFab>
                <PersonAdd />
              </MyFab>
            </Tooltip>
          </Link>
        )}
        {(isProfile || isAuth || isMessages || isNotifications || isEnter) && (
          <Tooltip title="返回">
            <MyFab onClick={() => router.back()}>
              <ArrowBack />
            </MyFab>
          </Tooltip>
        )}
        {(isBbsHome || isCourses || isLearn) && (
          <Link href="/" passHref legacyBehavior>
            <Tooltip title="主页">
              <MyFab>
                <Home />
              </MyFab>
            </Tooltip>
          </Link>
        )}
      </Stack>
      {children}
    </>
  );
};

export default Layout;
