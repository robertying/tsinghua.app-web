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
      on_conflict: { constraint: users_pkey, update_columns: [email] }
    ) {
      id
      username
      email
      role
      avatar_url
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
    }
  }
`;

export const GET_USER_DETAIL = gql`
  query GetUserDetail($id: String!) {
    user_by_pk(id: $id) {
      id
      username
      email
      role
      avatar_url
      status
      created_at
    }
  }
`;

export const UPDATE_USER_AVATAR = gql`
  mutation UpdateUserAvatar($id: String!, $avatarUrl: String!) {
    update_user_by_pk(
      pk_columns: { id: $id }
      _set: { avatar_url: $avatarUrl }
    ) {
      id
      username
      email
      role
      avatar_url
    }
  }
`;

export const UPDATE_USER_STATUS = gql`
  mutation UpdateUserStatus($id: String!, $status: String!) {
    update_user_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      username
      email
      role
      avatar_url
      status
    }
  }
`;
