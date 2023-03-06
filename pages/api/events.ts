import { NextApiRequest, NextApiResponse } from "next";
import { graphQLClient } from "lib/client";
import { MessageNotification, ThreadNotification } from "lib/notification";
import { ADD_NOTIFICATION } from "api/notification";
import { GET_POST } from "api/post";
import { GET_MESSAGE } from "api/message";
import {
  AddNotificationMutation,
  AddNotificationMutationVariables,
  GetMessageQuery,
  GetMessageQueryVariables,
  GetPostQuery,
  GetPostQueryVariables,
} from "api/types/graphql";

const addNotification = async (userId: uuid, payload: string) =>
  graphQLClient.request<
    AddNotificationMutation,
    AddNotificationMutationVariables
  >(ADD_NOTIFICATION, {
    userId,
    payload,
  });

const getPost = async (id: number) =>
  graphQLClient.request<GetPostQuery, GetPostQueryVariables>(GET_POST, {
    id,
  });

const getMessage = async (id: uuid) =>
  graphQLClient.request<GetMessageQuery, GetMessageQueryVariables>(
    GET_MESSAGE,
    {
      id,
    }
  );

export default async function handleEvents(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers["x-webhook-secret"] !== process.env.WEBHOOK_SECRET) {
    return res.status(401).send("Unauthorized");
  }

  const payload = req.body;

  try {
    switch (payload.trigger.name) {
      case "thread_has_new_post":
        const postId = payload.event.data.new.id;
        const postData = await getPost(postId);
        const post = postData.realm_post[0];
        if (post.user?.user_id === post.thread?.user?.user_id) {
          break;
        }
        const threadNotification: ThreadNotification = {
          type: "thread_has_new_post",
          version: 1,
          postId,
          content: `${post.user?.username} 回复了你在 ${post.thread?.realm?.name} 发布的帖子 ${post.thread?.title}`,
          url: `/bbs/realms/${post.thread?.realm?.id}/threads/${post.thread?.id}#post-${postId}`,
        };
        await addNotification(
          post.thread?.user?.user_id!,
          JSON.stringify(threadNotification)
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
          url: `/bbs/realms/${message?.from_user?.realm?.id}/messages?user=${message?.from_user?.user_id}`,
        };
        await addNotification(
          message?.to_user?.user_id!,
          JSON.stringify(messageNotification)
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
