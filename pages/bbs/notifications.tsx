import { useEffect } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  Badge,
  Card,
  CardActionArea,
  Container,
  Stack,
  Typography,
} from "@material-ui/core";
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
import { useUser } from "lib/session";

interface NotificationProps extends GetNotifications_notification {}

const Notification: React.FC<NotificationProps> = (notification) => {
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

const Notifications: React.FC = () => {
  const [user] = useUser();

  const { data: notificationData, refetch: refetchNotifications } = useQuery<
    GetNotifications,
    GetNotificationsVariables
  >(GET_NOTIFICATIONS, {
    variables: {
      userId: user?.id!,
    },
    skip: !user,
  });
  const notifications = notificationData?.notification ?? [];

  const [markNotificationAsRead] = useMutation<
    MarkNotificationAsRead,
    MarkNotificationAsReadVariables
  >(MARK_NOTIFICATION_AS_READ);

  useEffect(() => {
    setTimeout(async () => {
      await Promise.all(
        (notificationData?.notification ?? [])
          .filter((n) => !n.read)
          .map(async (n) => {
            await markNotificationAsRead({
              variables: {
                id: n.id,
              },
            });
          })
      );
      refetchNotifications();
    }, 3000);
  }, [markNotificationAsRead, notificationData, refetchNotifications]);

  return (
    <>
      <NextSeo title={` - 用户信息`} />
      <Container
        sx={{
          py: 8,
        }}
        maxWidth="sm"
      >
        <Stack direction="column" spacing={1.5}>
          {notifications.map((n) => (
            <Notification {...n} />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Notifications;
