import { gql } from "@apollo/client";

export const GET_THREAD_REACTIONS = gql`
  query GetThreadReactions($threadId: Int!, $userId: String!) {
    thread_public(where: { id: { _eq: $threadId } }, limit: 1) {
      id
      my_reactions: reactions(where: { user_id: { _eq: $userId } }) {
        name
      }
      confused_face_reactions: reactions_aggregate(
        where: { name: { _eq: confused_face } }
      ) {
        aggregate {
          count
        }
      }
      eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {
        aggregate {
          count
        }
      }
      grinning_face_with_smiling_eyes_reactions: reactions_aggregate(
        where: { name: { _eq: grinning_face_with_smiling_eyes } }
      ) {
        aggregate {
          count
        }
      }
      party_popper_reactions: reactions_aggregate(
        where: { name: { _eq: party_popper } }
      ) {
        aggregate {
          count
        }
      }
      red_heart_reactions: reactions_aggregate(
        where: { name: { _eq: red_heart } }
      ) {
        aggregate {
          count
        }
      }
      rocket_reactions: reactions_aggregate(where: { name: { _eq: rocket } }) {
        aggregate {
          count
        }
      }
      thumbs_down_reactions: reactions_aggregate(
        where: { name: { _eq: thumbs_down } }
      ) {
        aggregate {
          count
        }
      }
      thumbs_up_reactions: reactions_aggregate(
        where: { name: { _eq: thumbs_up } }
      ) {
        aggregate {
          count
        }
      }
      posts(order_by: { created_at: asc }) {
        id
        my_reactions: reactions(where: { user_id: { _eq: $userId } }) {
          name
        }
        confused_face_reactions: reactions_aggregate(
          where: { name: { _eq: confused_face } }
        ) {
          aggregate {
            count
          }
        }
        eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {
          aggregate {
            count
          }
        }
        grinning_face_with_smiling_eyes_reactions: reactions_aggregate(
          where: { name: { _eq: grinning_face_with_smiling_eyes } }
        ) {
          aggregate {
            count
          }
        }
        party_popper_reactions: reactions_aggregate(
          where: { name: { _eq: party_popper } }
        ) {
          aggregate {
            count
          }
        }
        red_heart_reactions: reactions_aggregate(
          where: { name: { _eq: red_heart } }
        ) {
          aggregate {
            count
          }
        }
        rocket_reactions: reactions_aggregate(
          where: { name: { _eq: rocket } }
        ) {
          aggregate {
            count
          }
        }
        thumbs_down_reactions: reactions_aggregate(
          where: { name: { _eq: thumbs_down } }
        ) {
          aggregate {
            count
          }
        }
        thumbs_up_reactions: reactions_aggregate(
          where: { name: { _eq: thumbs_up } }
        ) {
          aggregate {
            count
          }
        }
      }
    }
  }
`;

export const ADD_THREAD_REACTION = gql`
  mutation AddThreadReaction(
    $name: reaction_emoji_enum!
    $threadId: Int!
    $userId: String!
  ) {
    insert_thread_reaction_one(
      object: { name: $name, thread_id: $threadId, user_id: $userId }
      on_conflict: {
        constraint: thread_reaction_pkey
        update_columns: [created_at]
      }
    ) {
      user_id
      thread_id
      name
    }
  }
`;

export const DELETE_THREAD_REACTION = gql`
  mutation DeleteThreadReaction(
    $name: reaction_emoji_enum!
    $threadId: Int!
    $userId: String!
  ) {
    delete_thread_reaction_by_pk(
      name: $name
      thread_id: $threadId
      user_id: $userId
    ) {
      user_id
      thread_id
      name
    }
  }
`;

export const ADD_POST_REACTION = gql`
  mutation AddPostReaction(
    $name: reaction_emoji_enum!
    $postId: Int!
    $userId: String!
  ) {
    insert_post_reaction_one(
      object: { name: $name, post_id: $postId, user_id: $userId }
      on_conflict: {
        constraint: post_reaction_pkey
        update_columns: [created_at]
      }
    ) {
      user_id
      post_id
      name
    }
  }
`;

export const DELETE_POST_REACTION = gql`
  mutation DeletePostReaction(
    $name: reaction_emoji_enum!
    $postId: Int!
    $userId: String!
  ) {
    delete_post_reaction_by_pk(
      name: $name
      post_id: $postId
      user_id: $userId
    ) {
      user_id
      post_id
      name
    }
  }
`;
