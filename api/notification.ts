import { gql } from "@apollo/client";

export const ADD_NOTIFICATION = gql`
  mutation AddNotification($payload: String!) {
    insert_notification_one(object: { payload: $payload }) {
      id
    }
  }
`;
