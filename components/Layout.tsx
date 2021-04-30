import { useRouter } from "next/router";
import { Badge, Stack, Tooltip } from "@material-ui/core";
import { ArrowBack, Chat, PersonAdd, Notifications } from "@material-ui/icons";
import { useQuery } from "@apollo/client";
import {
  GetNewNotificationCount,
  GetNewNotificationCountVariables,
} from "api/types";
import { GET_NEW_NOTIFICATION_COUNT } from "api/notification";
import { useUser } from "lib/session";
import MyFab from "./Fab";
import MyAvatar from "./Avatar";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const realmId = router.query.realmId ?? 1;
  const isAuth = router.pathname.startsWith("/auth");
  const isProfile = router.pathname.endsWith("/profile");
  const isMessages = router.pathname.endsWith("/messages");
  const isNotifications = router.pathname.endsWith("/notifications");
  const isBbs = router.pathname.startsWith("/bbs");

  const [user, authLoading] = useUser();

  const { data: newNotificationData } = useQuery<
    GetNewNotificationCount,
    GetNewNotificationCountVariables
  >(GET_NEW_NOTIFICATION_COUNT, {
    variables: {
      userId: user?.id!,
    },
    skip: !user,
    pollInterval: 30 * 1000,
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
        {isBbs && !isMessages && !authLoading && user && (
          <Tooltip title="消息">
            <MyFab
              sx={{
                "& > .MuiFab-label": {
                  width: "100%",
                  height: "100%",
                },
              }}
              onClick={() => router.push(`/bbs/realms/${realmId}/messages`)}
            >
              <Chat />
            </MyFab>
          </Tooltip>
        )}
        {!isNotifications && !authLoading && user && (
          <Tooltip title="通知">
            <MyFab
              sx={{
                "& > .MuiFab-label": {
                  width: "100%",
                  height: "100%",
                },
              }}
              onClick={() => router.push(`/notifications`)}
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
        )}
        {!isProfile && !isAuth && !authLoading && !user && (
          <Tooltip title="登录">
            <MyFab
              onClick={() =>
                router.push(`/auth/login?redirect_url=${router.asPath}`)
              }
            >
              <PersonAdd />
            </MyFab>
          </Tooltip>
        )}
        {(isProfile || isAuth || isMessages || isNotifications) && (
          <Tooltip title="返回">
            <MyFab onClick={() => router.back()}>
              <ArrowBack />
            </MyFab>
          </Tooltip>
        )}
      </Stack>
      {children}
    </>
  );
};

export default Layout;
