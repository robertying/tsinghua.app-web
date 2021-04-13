import { gql } from "@apollo/client";

export const GET_THREAD_BY_ID = gql`
  query GetThreadById($id: Int!) {
    thread_public(where: { id: { _eq: $id } }, limit: 1) {
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
      content
      user {
        username
        status
        avatar_url
      }
      created_at
      updated_at
      posts(order_by: { created_at: asc }) {
        id
        user {
          username
          status
          avatar_url
        }
        content
        created_at
        updated_at
      }
    }
  }
`;

export const ADD_THREAD = gql`
  mutation AddThread(
    $realmId: Int!
    $userId: String!
    $topicId: Int!
    $title: String!
    $content: String!
  ) {
    insert_thread_one(
      object: {
        realm_id: $realmId
        user_id: $userId
        topic_id: $topicId
        title: $title
        content: $content
      }
    ) {
      id
    }
  }
`;

export const UPDATE_THREAD = gql`
  mutation UpdateThread($threadId: Int!, $title: String!, $content: String!) {
    update_thread_by_pk(
      pk_columns: { id: $threadId }
      _set: { title: $title, content: $content }
    ) {
      id
    }
  }
`;
