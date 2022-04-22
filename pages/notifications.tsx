import { useEffect, useState } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  Badge,
  Card,
  CardActionArea,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { GET_NOTIFICATIONS, MARK_NOTIFICATION_AS_READ } from "api/notification";
import {
  GetNotifications,
  GetNotificationsVariables,
  GetNotifications_notification,
  MarkNotificationAsRead,
  MarkNotificationAsReadVariables,
} from "api/types";
import { NotificationPayload } from "lib/notification";
import { useAuthRoute, useUser } from "lib/session";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";

const Notification: React.FC<React.PropsWithChildren<GetNotifications_notification>> = (
  notification
) => {
  const payload = JSON.parse(notification.payload) as NotificationPayload;

  return (
    <Badge
      key={notification.id}
      color="primary"
      variant="dot"
      invisible={notification.read}
    >
      <Link href={payload.url} passHref>
        <Card sx={{ width: "100%" }} component="a">
          <CardActionArea sx={{ p: 2 }}>
            <Typography>{payload.content}</Typography>
            <Typography sx={{ mt: 1 }} variant="caption" component="div">
              {dayjs(notification.created_at).fromNow()}
            </Typography>
          </CardActionArea>
        </Card>
      </Link>
    </Badge>
  );
};

const Notifications: React.FC<React.PropsWithChildren<unknown>> = () => {
  const toast = useToast();

  const [user, authLoading] = useUser();

  const [markLoading, setMarkLoading] = useState(false);

  const {
    data: notificationData,
    error: notificationError,
    loading: notificationLoading,
    refetch: refetchNotifications,
  } = useQuery<GetNotifications, GetNotificationsVariables>(GET_NOTIFICATIONS, {
    variables: {
      userId: user?.id!,
    },
    skip: !user,
    pollInterval: 1 * 60 * 1000, // 1min
  });
  const notifications = notificationData?.notification ?? [];

  const [markNotificationAsRead] = useMutation<
    MarkNotificationAsRead,
    MarkNotificationAsReadVariables
  >(MARK_NOTIFICATION_AS_READ);

  const handleNotificationsMarkAsRead = async () => {
    setMarkLoading(true);
    try {
      await Promise.all(
        notifications
          .filter((n) => !n.read)
          .map(async (n) => {
            await markNotificationAsRead({
              variables: {
                id: n.id,
              },
            });
          })
      );
      toast("success", "标记已读成功");
      refetchNotifications();
    } catch {
      toast("error", "标记已读失败");
    } finally {
      setMarkLoading(false);
    }
  };

  useAuthRoute();

  useEffect(() => {
    if (notificationError) {
      toast("error", "通知获取失败");
    }
  }, [notificationError, toast]);

  if (authLoading) {
    return <Splash />;
  }

  return (
    <>
      <NextSeo title="通知" />
      <Container
        sx={{
          py: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        maxWidth="sm"
      >
        <LoadingButton
          loading={markLoading}
          variant="outlined"
          onClick={handleNotificationsMarkAsRead}
        >
          将所有通知标为已读
        </LoadingButton>
        {notificationLoading ? (
          <CircularProgress sx={{ mt: 8, alignSelf: "center" }} size="1.5rem" />
        ) : (
          <Stack sx={{ mt: 2, width: "100%" }} direction="column" spacing={1.5}>
            {notifications.map((n) => (
              <Notification key={n.id} {...n} />
            ))}
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Notifications;
