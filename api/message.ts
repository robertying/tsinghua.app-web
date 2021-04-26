// import { gql } from "@apollo/client";
export {};
// export const GET_REALM_MESSAGE_CONTACTS = gql`
//   query GetRealmMessageContacts($realmId: Int!, $username: String!) {
//     realm_message_public(
//       where: {
//         realm_id: { _eq: $realmId }
//         _or: [
//           { from_username: { _eq: $username } }
//           { to_username: { _eq: $username } }
//         ]
//       }
//       order_by: { from_username: asc, to_username: asc, created_at: desc }
//       distinct_on: [from_username, to_username]
//     ) {
//       id
//       from_user_public {
//         username
//         avatar_url
//       }
//       to_user_public {
//         username
//         avatar_url
//       }
//     }
//   }
// `;

// export const GET_REALM_MESSAGES = gql`
//   query GetRealmMessages(
//     $realmId: Int!
//     $username1: String!
//     $username2: String!
//   ) {
//     realm_message_public(
//       where: {
//         realm_id: { _eq: $realmId }
//         _or: [
//           {
//             from_username: { _eq: $username1 }
//             to_username: { _eq: $username2 }
//           }
//           {
//             from_username: { _eq: $username2 }
//             to_username: { _eq: $username1 }
//           }
//         ]
//       }
//       order_by: { created_at: desc }
//     ) {
//       id
//       text
//       from_username
//       created_at
//     }
//   }
// `;

// CREATE
// OR REPLACE VIEW "public"."realm_user_union" AS
// SELECT
//   realm_user.user_id,
//   realm_user.realm_id,
//   realm_user.username,
//   realm_user.created_at,
//   realm_user.status,
//   realm_user.avatar_url
// FROM
//   realm_user
// UNION
// SELECT
//   "user".university_id AS user_id,
//   1 AS realm_id,
//   "user".username,
//   "user".created_at,
//   "user".status,
//   "user".avatar_url
// FROM
// "user";

// CREATE
// OR REPLACE VIEW "public"."realm_user_public" AS
// SELECT
//   realm_user_union.realm_id,
//   realm_user_union.username,
//   realm_user_union.created_at,
//   realm_user_union.status,
//   realm_user_union.avatar_url
// FROM
// realm_user_union;

// CREATE
// OR REPLACE VIEW "public"."post_public" AS
// SELECT
//   u.username,
//   p.id,
//   p.thread_id,
//   p.content,
//   p.created_at,
//   p.updated_at,
//   t.realm_id
// FROM
//   (
//     (
//       post p
//       JOIN thread t ON ((p.thread_id = t.id))
//     )
//     JOIN realm_user_union u ON (
//       (
//         (u.user_id = p.user_id)
//         AND (t.realm_id = u.realm_id)
//       )
//     )
//   );

//   CREATE
// OR REPLACE VIEW "public"."realm_public" AS
// SELECT
//   u.username AS admin_username,
//   r.id,
//   r.name,
//   r.description,
//   r.private,
//   r.created_at
// FROM
//   (
//     realm r
//     JOIN realm_user_union u ON (
//       (
//         (u.user_id = r.admin_id)
//         AND (r.id = u.realm_id)
//       )
//     )
//   );

//   CREATE
// OR REPLACE VIEW "public"."realm_message_public" AS
// SELECT
//   m.id,
//   m.realm_id,
//   from_u.username AS from_username,
//   to_u.username AS to_username,
//   m.text,
//   m.created_at
// FROM
//   (
//     (
//       realm_message m
//       JOIN realm_user_union from_u ON (
//         (
//           (from_u.user_id = m.from_user_id)
//           AND (m.realm_id = from_u.realm_id)
//         )
//       )
//     )
//     JOIN realm_user_union to_u ON (
//       (
//         (to_u.user_id = m.to_user_id)
//         AND (m.realm_id = to_u.realm_id)
//       )
//     )
//   );

//   CREATE
// OR REPLACE VIEW "public"."thread_public" AS
// SELECT
//   u.username,
//   t.id,
//   t.topic_id,
//   t.realm_id,
//   t.title,
//   t.content,
//   t.created_at,
//   t.updated_at
// FROM
//   (
//     thread t
//     JOIN realm_user_union u ON (
//       (
//         (u.user_id = t.user_id)
//         AND (t.realm_id = u.realm_id)
//       )
//     )
//   );

// realm message public
// {"_and":[{"realm_id":{"_in":"X-Hasura-User-Realms"}},{"_or":[{"from_user":{"user_id":{"_eq":"X-Hasura-User-Id"}}},{"to_user":{"user_id":{"_eq":"X-Hasura-User-Id"}}}]}]}
