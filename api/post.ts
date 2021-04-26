import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation AddPost($userId: uuid!, $threadId: Int!, $content: String!) {
    insert_post_one(
      object: { user_id: $userId, thread_id: $threadId, content: $content }
    ) {
      id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($postId: Int!, $content: String!) {
    update_post_by_pk(
      pk_columns: { id: $postId }
      _set: { content: $content }
    ) {
      id
    }
  }
`;
