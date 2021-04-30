import { gql } from "@apollo/client";

export const ADD_NOTIFICATION = gql`
  mutation AddNotification($userId: uuid!, $payload: String!) {
    insert_notification_one(object: { user_id: $userId, payload: $payload }) {
      id
    }
  }
`;
