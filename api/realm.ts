import { gql } from "@apollo/client";

export const GET_REALM_BY_ID = gql`
  query GetRealmById($id: Int!) {
    realm_by_pk(id: $id) {
      id
      name
      description
      private
      topics(order_by: { created_at: asc }) {
        id
        name
      }
      threads_public(order_by: { updated_at: desc }) {
        id
        realm_id
        topic {
          id
          name
        }
        user {
          username
          avatar_url
        }
        title
        updated_at
        posts(
          order_by: [{ username: asc }, { created_at: desc }]
          distinct_on: [username]
          limit: 4
        ) {
          id
          user {
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
      name
      description
      private
      invitation_code
    }
  }
`;
