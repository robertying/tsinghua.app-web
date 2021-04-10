import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: String!) {
    user_by_pk(id: $id) {
      id
      username
      email
      role
      avatar_url
      created_at
    }
  }
`;

export const ADD_OR_UPDATE_USER = gql`
  mutation AddOrUpdateUser($id: String!, $email: String!) {
    insert_user_one(
      object: { id: $id, email: $email, username: $id }
      on_conflict: { constraint: users_pkey, update_columns: [email] }
    ) {
      id
      username
      email
      role
      avatar_url
      created_at
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation UpdateUsername($id: String!, $username: String!) {
    update_user_by_pk(pk_columns: { id: $id }, _set: { username: $username }) {
      id
      username
      email
      role
      avatar_url
      created_at
    }
  }
`;

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($id: String!, $avatarUrl: String!) {
    update_user_by_pk(
      pk_columns: { id: $id }
      _set: { avatar_url: $avatarUrl }
    ) {
      id
      username
      email
      role
      avatar_url
      created_at
    }
  }
`;
