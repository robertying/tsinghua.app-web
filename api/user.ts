import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: String!) {
    user_by_pk(id: $id) {
      id
      username
      email
      role
      avatar_url
    }
  }
`;

export const ADD_OR_UPDATE_USER = gql`
  mutation AddOrUpdateUser($id: String!, $email: String!) {
    insert_user_one(
      object: { id: $id, email: $email, username: $id }
      on_conflict: { constraint: users_pkey, update_columns: [email, username] }
    ) {
      id
      username
      email
      role
      avatar_url
    }
  }
`;
