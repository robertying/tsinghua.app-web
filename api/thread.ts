import { gql } from "@apollo/client";

export const GET_THREAD = gql`
  query GetThread($id: Int!) {
    thread_by_pk(id: $id) {
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
        realm_id
        user_id
        username
        status
        avatar_url
      }
      created_at
      updated_at
      posts(order_by: { created_at: asc }) {
        id
        user {
          realm_id
          user_id
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

export const GET_HOTTEST_THREADS = gql`
  query GetHottestThreads {
    thread(
      where: { realm: { private: { _eq: false } } }
      order_by: [
        { posts_aggregate: { count: desc } }
        { reactions_aggregate: { count: desc } }
      ]
      limit: 3
    ) {
      id
      realm {
        id
        name
      }
      title
      posts_aggregate {
        aggregate {
          count
        }
      }
      reactions_aggregate {
        aggregate {
          count
        }
      }
      created_at
    }
  }
`;

export const GET_NEWEST_THREADS = gql`
  query GetNewestThreads {
    thread(
      where: { realm: { private: { _eq: false } } }
      order_by: { created_at: desc }
      limit: 3
    ) {
      id
      realm {
        id
        name
      }
      title
      posts_aggregate {
        aggregate {
          count
        }
      }
      reactions_aggregate {
        aggregate {
          count
        }
      }
      created_at
    }
  }
`;

export const ADD_THREAD = gql`
  mutation AddThread(
    $realmId: Int!
    $userId: uuid!
    $topicId: Int
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
