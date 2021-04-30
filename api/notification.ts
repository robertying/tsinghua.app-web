import { gql } from "@apollo/client";

export const GET_NOTIFICATIONS = gql`
  query GetNotifications($userId: uuid!) {
    notification(
      where: { user_id: { _eq: $userId } }
      order_by: { created_at: desc }
    ) {
      id
      payload
      read
      created_at
    }
  }
`;

export const GET_NEW_NOTIFICATION_COUNT = gql`
  query GetNewNotificationCount($userId: uuid!) {
    notification_aggregate(
      where: { user_id: { _eq: $userId }, read: { _eq: false } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const ADD_NOTIFICATION = gql`
  mutation AddNotification($userId: uuid!, $payload: String!) {
    insert_notification_one(object: { user_id: $userId, payload: $payload }) {
      id
    }
  }
`;

export const MARK_NOTIFICATION_AS_READ = gql`
  mutation MarkNotificationAsRead($id: uuid!) {
    update_notification_by_pk(pk_columns: { id: $id }, _set: { read: true }) {
      id
    }
  }
`;
