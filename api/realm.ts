import { gql } from "@apollo/client";

export const GET_REALM = gql`
  query GetRealm($id: Int!) {
    realm_by_pk(id: $id) {
      id
      name
      description
      private
      topics(order_by: { created_at: asc }) {
        id
        name
      }
      threads(order_by: { updated_at: desc }) {
        id
        realm_id
        topic {
          id
          name
        }
        user {
          realm_id
          user_id
          username
          avatar_url
        }
        title
        updated_at
        posts(
          order_by: [{ id: asc }, { created_at: desc }]
          distinct_on: [id]
          limit: 4
        ) {
          id
          user {
            realm_id
            user_id
            username
            avatar_url
          }
        }
      }
    }
  }
`;

export const GET_REALM_DETAILS = gql`
  query GetRealmDetails($id: Int!) {
    realm_by_pk(id: $id) {
      id
      name
      description
      private
    }
  }
`;

export const GET_REALM_DETAILS_INVITATION_CODE = gql`
  query GetRealmDetailsInvitationCode($id: Int!) {
    realm_by_pk(id: $id) {
      id
      admin_id
      name
      description
      private
      invitation_code
      topics {
        id
        name
      }
    }
  }
`;

export const ADD_REALM = gql`
  mutation AddRealm(
    $adminId: uuid!
    $name: String!
    $description: String!
    $private: Boolean!
    $invitationCode: String
  ) {
    insert_realm_one(
      object: {
        admin_id: $adminId
        name: $name
        description: $description
        private: $private
        invitation_code: $invitationCode
      }
    ) {
      id
    }
  }
`;

export const UPDATE_REALM = gql`
  mutation UpdateRealm(
    $id: Int!
    $description: String!
    $private: Boolean!
    $invitationCode: String
    $topics: [topic_insert_input!]!
  ) {
    update_realm_by_pk(
      pk_columns: { id: $id }
      _set: {
        description: $description
        private: $private
        invitation_code: $invitationCode
      }
    ) {
      id
    }
    insert_topic(
      objects: $topics
      on_conflict: { constraint: topic_pkey, update_columns: [name] }
    ) {
      affected_rows
    }
  }
`;
