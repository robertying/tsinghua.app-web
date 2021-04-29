export interface ThreadNotification {
  type: "thread_has_new_post";
  version: 1;
  postId: number;
  content: string;
  url: string;
}

export interface MessageNotification {
  type: "new_message";
  version: 1;
  messageId: uuid;
  content: string;
  url: string;
}

export type NotificationPayload = ThreadNotification | MessageNotification;
