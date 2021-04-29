import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GetPost($id: Int!) {
    realm_post(where: { id: { _eq: $id } }, limit: 1) {
      id
      user {
        realm_id
        user_id
        username
      }
      thread {
        id
        realm {
          id
          name
        }
        topic {
          id
          name
        }
        title
      }
    }
  }
`;

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
