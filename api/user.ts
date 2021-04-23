import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($userId: String!, $realmId: Int!) {
    user_by_pk(id: $userId) {
      id
      email
      role
      created_at
      realm_ids: realm_users {
        realm_id
      }
      realm_users(where: { realm_id: { _eq: $realmId } }, limit: 1) {
        realm {
          id
          name
        }
        username
        status
        avatar_url
        created_at
      }
    }
  }
`;

export const GET_USER_REALMS = gql`
  query GetUserRealms($id: String!) {
    user_by_pk(id: $id) {
      id
      realm_users {
        realm {
          id
          name
        }
      }
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
      email
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation UpdateUsername($id: String!, $username: String!) {
    update_user_by_pk(pk_columns: { id: $id }, _set: { username: $username }) {
      id
      username
    }
  }
`;

export const UPDATE_REALM_USERNAME = gql`
  mutation UpdateRealmUsername(
    $userId: String!
    $realmId: Int!
    $username: String!
  ) {
    insert_realm_user_one(
      object: { user_id: $userId, realm_id: $realmId, username: $username }
      on_conflict: { constraint: realm_user_pkey, update_columns: [username] }
    ) {
      user_id
      realm_id
      username
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
      avatar_url
    }
  }
`;

export const UPDATE_REALM_USER_AVATAR = gql`
  mutation UpdateRealmUserAvatar(
    $userId: String!
    $realmId: Int!
    $avatarUrl: String!
  ) {
    insert_realm_user_one(
      object: { user_id: $userId, realm_id: $realmId, avatar_url: $avatarUrl }
      on_conflict: { constraint: realm_user_pkey, update_columns: [avatar_url] }
    ) {
      user_id
      realm_id
      avatar_url
    }
  }
`;

export const UPDATE_USER_STATUS = gql`
  mutation UpdateUserStatus($id: String!, $status: String!) {
    update_user_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`;

export const UPDATE_REALM_USER_STATUS = gql`
  mutation UpdateRealmUserStatus(
    $userId: String!
    $realmId: Int!
    $status: String!
  ) {
    update_realm_user_by_pk(
      pk_columns: { user_id: $userId, realm_id: $realmId }
      _set: { status: $status }
    ) {
      user_id
      realm_id
      status
    }
  }
`;

export const GET_REALM_USER_BY_USERNAME = gql`
  query GetRealmUserByUsername($username: String!) {
    realm_user_union(where: { username: { _eq: $username } }, limit: 1) {
      username
    }
  }
`;
