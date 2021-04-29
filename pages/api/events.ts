import { NextApiRequest, NextApiResponse } from "next";
import { graphQLClient } from "lib/client";
import { MessageNotification, ThreadNotification } from "lib/notification";
import {
  AddNotification,
  AddNotificationVariables,
  GetMessage,
  GetMessageVariables,
  GetPost,
  GetPostVariables,
} from "api/types";
import { ADD_NOTIFICATION } from "api/notification";
import { GET_POST } from "api/post";
import { GET_MESSAGE } from "api/message";

const addNotification = async (payload: string) =>
  graphQLClient.request<AddNotification, AddNotificationVariables>(
    ADD_NOTIFICATION,
    {
      payload,
    }
  );

const getPost = async (id: number) =>
  graphQLClient.request<GetPost, GetPostVariables>(GET_POST, {
    id,
  });

const getMessage = async (id: uuid) =>
  graphQLClient.request<GetMessage, GetMessageVariables>(GET_MESSAGE, {
    id,
  });

export default async function handleEvents(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers["x-webhook-secret"] !== process.env.WEBHOOK_SECRET) {
    return res.status(401).send("Unauthorized");
  }

  const payload = req.body.payload;
  if (!payload) {
    return res.status(422).end();
  }

  try {
    switch (payload.trigger) {
      case "thread_has_new_post":
        const postId = payload.event.data.new.id;
        const postData = await getPost(postId);
        const post = postData.realm_post[0];
        const threadNotification: ThreadNotification = {
          type: "thread_has_new_post",
          version: 1,
          postId,
          content: `${post.user?.username} 回复了你在 ${post.thread?.realm.name} 发布的帖子 ${post.thread?.title}`,
          url: `/bbs/realms/${post.thread?.realm.id}/threads/${post.thread?.id}#post-${postId}`,
        };
        await addNotification(
          JSON.stringify({
            threadNotification,
          })
        );
        break;
      case "new_message":
        const messageId = payload.event.data.new.id;
        const messageData = await getMessage(messageId);
        const message = messageData.message_by_pk;
        const messageNotification: MessageNotification = {
          type: "new_message",
          version: 1,
          messageId,
          content: `来自 ${message?.from_user?.realm?.name} 的 ${message?.from_user?.username} 给你发送了一条消息`,
          url: `/bbs/realms/${message?.from_user?.realm?.id}/messages?user_id=${message?.from_user?.user_id}`,
        };
        await addNotification(
          JSON.stringify({
            messageNotification,
          })
        );
        break;
      default:
        return res.status(400).end();
    }
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  res.status(200).end();
}
