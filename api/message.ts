import { gql } from "@apollo/client";

export const GET_MESSAGE_CONTACTS = gql`
  query GetMessageContacts($realmId: Int!, $userId: uuid!) {
    message(
      where: {
        realm_id: { _eq: $realmId }
        _or: [
          { from_user_id: { _eq: $userId } }
          { to_user_id: { _eq: $userId } }
        ]
      }
      order_by: { from_user_id: asc, to_user_id: asc, created_at: desc }
      distinct_on: [from_user_id, to_user_id]
    ) {
      id
      from_user {
        realm_id
        user_id
        username
        avatar_url
      }
      to_user {
        realm_id
        user_id
        username
        avatar_url
      }
    }
  }
`;

export const GET_MESSAGE = gql`
  query GetMessage($id: uuid!) {
    message_by_pk(id: $id) {
      id
      from_user {
        realm {
          id
          name
        }
        realm_id
        user_id
        username
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  query GetMessages($realmId: Int!, $userId1: uuid!, $userId2: uuid!) {
    message(
      where: {
        realm_id: { _eq: $realmId }
        _or: [
          { from_user_id: { _eq: $userId1 }, to_user_id: { _eq: $userId2 } }
          { from_user_id: { _eq: $userId2 }, to_user_id: { _eq: $userId1 } }
        ]
      }
      order_by: { created_at: desc }
    ) {
      id
      from_user_id
      to_user_id
      text
      created_at
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation AddMessage(
    $realmId: Int!
    $fromUserId: uuid!
    $toUserId: uuid!
    $text: String!
  ) {
    insert_message_one(
      object: {
        realm_id: $realmId
        from_user_id: $fromUserId
        to_user_id: $toUserId
        text: $text
      }
    ) {
      id
    }
  }
`;
