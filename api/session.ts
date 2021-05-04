import { gql } from "@apollo/client";

export const GET_SESSION = gql`
  mutation GetSession($id: uuid!, $activeAt: timestamptz!) {
    update_session_by_pk(
      pk_columns: { id: $id }
      _set: { active_at: $activeAt }
    ) {
      id
      user_id
    }
  }
`;

export const ADD_SESSION = gql`
  mutation AddSession(
    $id: uuid!
    $userId: uuid!
    $description: String!
    $activeAt: timestamptz
  ) {
    insert_session_one(
      object: {
        id: $id
        user_id: $userId
        description: $description
        active_at: $activeAt
      }
      on_conflict: {
        constraint: session_pkey
        update_columns: [description, active_at]
      }
    ) {
      id
    }
  }
`;
