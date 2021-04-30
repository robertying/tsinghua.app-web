import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($realmId: Int!, $userId: uuid!) {
    user_by_pk(id: $userId) {
      id
      university_id
      email
      role
      created_at
      realm_ids: realm_users {
        realm_id
        user_id
      }
      realm_users(where: { realm_id: { _eq: $realmId } }, limit: 1) {
        realm_id
        user_id
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
  query GetUserRealms($id: uuid!) {
    user_by_pk(id: $id) {
      id
      realm_users {
        realm_id
        user_id
        realm {
          id
          name
        }
      }
    }
  }
`;

export const GET_REALM_USER_DETAILS = gql`
  query GetRealmUserDetails($realmId: Int!, $userId: uuid!) {
    realm_user_union(
      where: { realm_id: { _eq: $realmId }, user_id: { _eq: $userId } }
    ) {
      realm_id
      user_id
      realm {
        id
        name
      }
      username
      status
      avatar_url
    }
  }
`;

export const ADD_OR_UPDATE_USER = gql`
  mutation AddOrUpdateUser($universityId: String!, $email: String!) {
    insert_user_one(
      object: {
        university_id: $universityId
        email: $email
        username: $universityId
      }
      on_conflict: {
        constraint: user_university_id_key
        update_columns: [email]
      }
    ) {
      id
      university_id
      email
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation UpdateUsername($userId: uuid!, $username: String!) {
    update_user_by_pk(
      pk_columns: { id: $userId }
      _set: { username: $username }
    ) {
      id
      username
    }
  }
`;

export const UPDATE_REALM_USERNAME = gql`
  mutation UpdateRealmUsername(
    $userId: uuid!
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
  mutation UpdateUserAvatar($userId: uuid!, $avatarUrl: String!) {
    update_user_by_pk(
      pk_columns: { id: $userId }
      _set: { avatar_url: $avatarUrl }
    ) {
      id
      avatar_url
    }
  }
`;

export const UPDATE_REALM_USER_AVATAR = gql`
  mutation UpdateRealmUserAvatar(
    $userId: uuid!
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
  mutation UpdateUserStatus($userId: uuid!, $status: String!) {
    update_user_by_pk(pk_columns: { id: $userId }, _set: { status: $status }) {
      id
      status
    }
  }
`;

export const UPDATE_REALM_USER_STATUS = gql`
  mutation UpdateRealmUserStatus(
    $userId: uuid!
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
