/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query GetCourse($id: String!) {\n    course_by_pk(id: $id) {\n      id\n      name\n      teacher {\n        id\n        name\n      }\n      time_location\n      semester_id\n      number\n      index\n      course_reviews_aggregate {\n        aggregate {\n          count\n          avg {\n            rating\n          }\n        }\n      }\n    }\n  }\n":
    types.GetCourseDocument,
  "\n  query GetCourses($query: String!) {\n    course(\n      where: {\n        _or: [\n          { name: { _ilike: $query } }\n          { teacher: { name: { _ilike: $query } } }\n        ]\n      }\n      order_by: [{ semester_id: desc }, { updated_at: desc }]\n    ) {\n      id\n      name\n      teacher {\n        id\n        name\n      }\n      semester_id\n      course_reviews_aggregate {\n        aggregate {\n          avg {\n            rating\n          }\n        }\n      }\n    }\n  }\n":
    types.GetCoursesDocument,
  "\n  query GetCourseCount($semesterId: String!) {\n    course_aggregate(where: { semester_id: { _eq: $semesterId } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetCourseCountDocument,
  "\n  query GetCourseReviews($courseId: String!, $userId: uuid!) {\n    my_course_review: course_review_by_pk(\n      course_id: $courseId\n      user_id: $userId\n    ) {\n      id\n      user {\n        id\n        username\n        avatar_url\n      }\n      rating\n      content\n      created_at\n      updated_at\n    }\n    course_review(\n      order_by: { updated_at: desc }\n      where: { course_id: { _eq: $courseId }, user_id: { _neq: $userId } }\n    ) {\n      id\n      user {\n        id\n        username\n        avatar_url\n      }\n      rating\n      content\n      created_at\n      updated_at\n    }\n  }\n":
    types.GetCourseReviewsDocument,
  "\n  mutation AddCourseReview(\n    $userId: uuid!\n    $courseId: String!\n    $rating: Float!\n    $content: String!\n  ) {\n    insert_course_review_one(\n      object: {\n        user_id: $userId\n        course_id: $courseId\n        rating: $rating\n        content: $content\n      }\n    ) {\n      id\n    }\n  }\n":
    types.AddCourseReviewDocument,
  "\n  mutation UpdateCourseReview(\n    $userId: uuid!\n    $courseId: String!\n    $rating: Float!\n    $content: String!\n  ) {\n    update_course_review_by_pk(\n      pk_columns: { course_id: $courseId, user_id: $userId }\n      _set: { rating: $rating, content: $content }\n    ) {\n      id\n    }\n  }\n":
    types.UpdateCourseReviewDocument,
  "\n  mutation DeleteCourseReview($userId: uuid!, $courseId: String!) {\n    delete_course_review_by_pk(course_id: $courseId, user_id: $userId) {\n      id\n    }\n  }\n":
    types.DeleteCourseReviewDocument,
  "\n  query GetMessageContacts($realmId: Int!, $userId: uuid!) {\n    message(\n      where: {\n        realm_id: { _eq: $realmId }\n        _or: [\n          { from_user_id: { _eq: $userId } }\n          { to_user_id: { _eq: $userId } }\n        ]\n      }\n      order_by: [\n        { from_user_id: asc }\n        { to_user_id: asc }\n        { created_at: desc }\n      ]\n      distinct_on: [from_user_id, to_user_id]\n    ) {\n      id\n      from_user {\n        realm_id\n        realm {\n          id\n          name\n        }\n        user_id\n        username\n        avatar_url\n      }\n      to_user {\n        realm_id\n        realm {\n          id\n          name\n        }\n        user_id\n        username\n        avatar_url\n      }\n    }\n  }\n":
    types.GetMessageContactsDocument,
  "\n  query GetMessage($id: uuid!) {\n    message_by_pk(id: $id) {\n      id\n      from_user {\n        realm {\n          id\n          name\n        }\n        realm_id\n        user_id\n        username\n      }\n      to_user {\n        user_id\n      }\n    }\n  }\n":
    types.GetMessageDocument,
  "\n  query GetMessages($realmId: Int!, $userId1: uuid!, $userId2: uuid!) {\n    message(\n      where: {\n        realm_id: { _eq: $realmId }\n        _or: [\n          { from_user_id: { _eq: $userId1 }, to_user_id: { _eq: $userId2 } }\n          { from_user_id: { _eq: $userId2 }, to_user_id: { _eq: $userId1 } }\n        ]\n      }\n      order_by: { created_at: desc }\n    ) {\n      id\n      from_user_id\n      to_user_id\n      text\n      created_at\n    }\n  }\n":
    types.GetMessagesDocument,
  "\n  mutation AddMessage(\n    $realmId: Int!\n    $fromUserId: uuid!\n    $toUserId: uuid!\n    $text: String!\n  ) {\n    insert_message_one(\n      object: {\n        realm_id: $realmId\n        from_user_id: $fromUserId\n        to_user_id: $toUserId\n        text: $text\n      }\n    ) {\n      id\n    }\n  }\n":
    types.AddMessageDocument,
  "\n  query GetNotifications($userId: uuid!) {\n    notification(\n      where: { user_id: { _eq: $userId } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      payload\n      read\n      created_at\n    }\n  }\n":
    types.GetNotificationsDocument,
  "\n  query GetNewNotificationCount($userId: uuid!) {\n    notification_aggregate(\n      where: { user_id: { _eq: $userId }, read: { _eq: false } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetNewNotificationCountDocument,
  "\n  mutation AddNotification($userId: uuid!, $payload: String!) {\n    insert_notification_one(object: { user_id: $userId, payload: $payload }) {\n      id\n    }\n  }\n":
    types.AddNotificationDocument,
  "\n  mutation MarkNotificationAsRead($id: uuid!) {\n    update_notification_by_pk(pk_columns: { id: $id }, _set: { read: true }) {\n      id\n    }\n  }\n":
    types.MarkNotificationAsReadDocument,
  "\n  query GetPost($id: Int!) {\n    realm_post(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      user {\n        realm_id\n        user_id\n        username\n      }\n      thread {\n        id\n        realm {\n          id\n          name\n        }\n        user {\n          realm_id\n          user_id\n        }\n        topic {\n          id\n          name\n        }\n        title\n      }\n    }\n  }\n":
    types.GetPostDocument,
  "\n  mutation AddPost($userId: uuid!, $threadId: Int!, $content: String!) {\n    insert_post_one(\n      object: { user_id: $userId, thread_id: $threadId, content: $content }\n    ) {\n      id\n    }\n  }\n":
    types.AddPostDocument,
  "\n  mutation UpdatePost($postId: Int!, $content: String!) {\n    update_post_by_pk(\n      pk_columns: { id: $postId }\n      _set: { content: $content }\n    ) {\n      id\n    }\n  }\n":
    types.UpdatePostDocument,
  "\n  query GetThreadReactions($threadId: Int!, $userId: uuid!) {\n    thread_by_pk(id: $threadId) {\n      id\n      my_reactions: reactions(where: { user_id: { _eq: $userId } }) {\n        thread_id\n        user_id\n        name\n      }\n      confused_face_reactions: reactions_aggregate(\n        where: { name: { _eq: confused_face } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {\n        aggregate {\n          count\n        }\n      }\n      grinning_face_with_smiling_eyes_reactions: reactions_aggregate(\n        where: { name: { _eq: grinning_face_with_smiling_eyes } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      party_popper_reactions: reactions_aggregate(\n        where: { name: { _eq: party_popper } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      red_heart_reactions: reactions_aggregate(\n        where: { name: { _eq: red_heart } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      rocket_reactions: reactions_aggregate(where: { name: { _eq: rocket } }) {\n        aggregate {\n          count\n        }\n      }\n      thumbs_down_reactions: reactions_aggregate(\n        where: { name: { _eq: thumbs_down } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      thumbs_up_reactions: reactions_aggregate(\n        where: { name: { _eq: thumbs_up } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      posts(order_by: { created_at: asc }) {\n        id\n        my_reactions: reactions(where: { user_id: { _eq: $userId } }) {\n          post_id\n          user_id\n          name\n        }\n        confused_face_reactions: reactions_aggregate(\n          where: { name: { _eq: confused_face } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {\n          aggregate {\n            count\n          }\n        }\n        grinning_face_with_smiling_eyes_reactions: reactions_aggregate(\n          where: { name: { _eq: grinning_face_with_smiling_eyes } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        party_popper_reactions: reactions_aggregate(\n          where: { name: { _eq: party_popper } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        red_heart_reactions: reactions_aggregate(\n          where: { name: { _eq: red_heart } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        rocket_reactions: reactions_aggregate(\n          where: { name: { _eq: rocket } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        thumbs_down_reactions: reactions_aggregate(\n          where: { name: { _eq: thumbs_down } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        thumbs_up_reactions: reactions_aggregate(\n          where: { name: { _eq: thumbs_up } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n":
    types.GetThreadReactionsDocument,
  "\n  mutation AddThreadReaction(\n    $name: reaction_emoji_enum!\n    $threadId: Int!\n    $userId: uuid!\n  ) {\n    insert_thread_reaction_one(\n      object: { name: $name, thread_id: $threadId, user_id: $userId }\n      on_conflict: {\n        constraint: thread_reaction_pkey\n        update_columns: [created_at]\n      }\n    ) {\n      user_id\n      thread_id\n      name\n    }\n  }\n":
    types.AddThreadReactionDocument,
  "\n  mutation DeleteThreadReaction(\n    $name: reaction_emoji_enum!\n    $threadId: Int!\n    $userId: uuid!\n  ) {\n    delete_thread_reaction_by_pk(\n      name: $name\n      thread_id: $threadId\n      user_id: $userId\n    ) {\n      user_id\n      thread_id\n      name\n    }\n  }\n":
    types.DeleteThreadReactionDocument,
  "\n  mutation AddPostReaction(\n    $name: reaction_emoji_enum!\n    $postId: Int!\n    $userId: uuid!\n  ) {\n    insert_post_reaction_one(\n      object: { name: $name, post_id: $postId, user_id: $userId }\n      on_conflict: {\n        constraint: post_reaction_pkey\n        update_columns: [created_at]\n      }\n    ) {\n      user_id\n      post_id\n      name\n    }\n  }\n":
    types.AddPostReactionDocument,
  "\n  mutation DeletePostReaction(\n    $name: reaction_emoji_enum!\n    $postId: Int!\n    $userId: uuid!\n  ) {\n    delete_post_reaction_by_pk(\n      name: $name\n      post_id: $postId\n      user_id: $userId\n    ) {\n      user_id\n      post_id\n      name\n    }\n  }\n":
    types.DeletePostReactionDocument,
  "\n  query GetRealm($id: Int!) {\n    realm_public(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      name\n      description\n      private\n      topics(order_by: { created_at: asc }) {\n        id\n        name\n      }\n      threads(\n        order_by: [\n          { posts_aggregate: { max: { updated_at: desc_nulls_last } } }\n          { updated_at: desc }\n          { created_at: desc }\n        ]\n      ) {\n        id\n        realm_id\n        topic {\n          id\n          name\n        }\n        user {\n          realm_id\n          user_id\n          username\n          avatar_url\n        }\n        title\n        posts(\n          order_by: [{ id: asc }, { updated_at: desc }, { created_at: desc }]\n          distinct_on: [id]\n          limit: 4\n        ) {\n          id\n          user {\n            realm_id\n            user_id\n            username\n            avatar_url\n          }\n        }\n        posts_aggregate {\n          aggregate {\n            max {\n              updated_at\n            }\n          }\n        }\n        updated_at\n      }\n    }\n  }\n":
    types.GetRealmDocument,
  "\n  query GetPublicRealms {\n    realm_public(where: { private: { _eq: false }, id: { _neq: 1 } }) {\n      id\n      name\n      description\n      users_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n":
    types.GetPublicRealmsDocument,
  "\n  query GetRealmDetails($id: Int!) {\n    realm_public(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      name\n      description\n      private\n    }\n  }\n":
    types.GetRealmDetailsDocument,
  "\n  query GetRealmDetailsInvitationCode($id: Int!) {\n    realm_by_pk(id: $id) {\n      id\n      admin_id\n      name\n      description\n      private\n      invitation_code\n      topics {\n        id\n        name\n      }\n    }\n  }\n":
    types.GetRealmDetailsInvitationCodeDocument,
  "\n  mutation AddRealm(\n    $adminId: uuid!\n    $name: String!\n    $description: String!\n    $private: Boolean!\n    $invitationCode: String\n  ) {\n    insert_realm_one(\n      object: {\n        admin_id: $adminId\n        name: $name\n        description: $description\n        private: $private\n        invitation_code: $invitationCode\n      }\n    ) {\n      id\n    }\n  }\n":
    types.AddRealmDocument,
  "\n  mutation UpdateRealm(\n    $id: Int!\n    $description: String!\n    $private: Boolean!\n    $invitationCode: String\n    $topics: [topic_insert_input!]!\n  ) {\n    update_realm_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        description: $description\n        private: $private\n        invitation_code: $invitationCode\n      }\n    ) {\n      id\n    }\n    insert_topic(\n      objects: $topics\n      on_conflict: { constraint: topic_pkey, update_columns: [name] }\n    ) {\n      affected_rows\n    }\n  }\n":
    types.UpdateRealmDocument,
  "\n  mutation GetSession($id: uuid!, $activeAt: timestamptz!) {\n    update_session_by_pk(\n      pk_columns: { id: $id }\n      _set: { active_at: $activeAt }\n    ) {\n      id\n      user_id\n    }\n  }\n":
    types.GetSessionDocument,
  "\n  query GetSessions($userId: uuid!) {\n    session(\n      order_by: { active_at: desc }\n      where: { user_id: { _eq: $userId } }\n    ) {\n      id\n      description\n      created_at\n      active_at\n    }\n  }\n":
    types.GetSessionsDocument,
  "\n  mutation AddSession(\n    $id: uuid!\n    $userId: uuid!\n    $description: String!\n    $activeAt: timestamptz\n  ) {\n    insert_session_one(\n      object: {\n        id: $id\n        user_id: $userId\n        description: $description\n        active_at: $activeAt\n      }\n      on_conflict: {\n        constraint: session_pkey\n        update_columns: [description, active_at]\n      }\n    ) {\n      id\n    }\n  }\n":
    types.AddSessionDocument,
  "\n  mutation DeleteSession($id: uuid!) {\n    delete_session_by_pk(id: $id) {\n      id\n    }\n  }\n":
    types.DeleteSessionDocument,
  "\n  query GetThread($id: Int!) {\n    thread_by_pk(id: $id) {\n      id\n      realm {\n        id\n        name\n      }\n      topic {\n        id\n        name\n      }\n      title\n      content\n      user {\n        realm_id\n        user_id\n        username\n        status\n        avatar_url\n      }\n      created_at\n      updated_at\n      posts(order_by: { created_at: asc }) {\n        id\n        user {\n          realm_id\n          user_id\n          username\n          status\n          avatar_url\n        }\n        content\n        created_at\n        updated_at\n      }\n    }\n  }\n":
    types.GetThreadDocument,
  "\n  query GetHottestThreads {\n    thread(\n      where: { realm: { private: { _eq: false } } }\n      order_by: [\n        { posts_aggregate: { count: desc } }\n        { reactions_aggregate: { count: desc } }\n      ]\n      limit: 3\n    ) {\n      id\n      realm {\n        id\n        name\n      }\n      title\n      posts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      created_at\n    }\n  }\n":
    types.GetHottestThreadsDocument,
  "\n  query GetNewestThreads {\n    thread(\n      where: { realm: { private: { _eq: false } } }\n      order_by: { created_at: desc }\n      limit: 3\n    ) {\n      id\n      realm {\n        id\n        name\n      }\n      title\n      posts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      created_at\n    }\n  }\n":
    types.GetNewestThreadsDocument,
  "\n  mutation AddThread(\n    $realmId: Int!\n    $userId: uuid!\n    $topicId: Int\n    $title: String!\n    $content: String!\n  ) {\n    insert_thread_one(\n      object: {\n        realm_id: $realmId\n        user_id: $userId\n        topic_id: $topicId\n        title: $title\n        content: $content\n      }\n    ) {\n      id\n    }\n  }\n":
    types.AddThreadDocument,
  "\n  mutation UpdateThread($threadId: Int!, $title: String!, $content: String!) {\n    update_thread_by_pk(\n      pk_columns: { id: $threadId }\n      _set: { title: $title, content: $content }\n    ) {\n      id\n    }\n  }\n":
    types.UpdateThreadDocument,
  "\n  query GetUser($realmId: Int!, $userId: uuid!) {\n    user_by_pk(id: $userId) {\n      id\n      university_id\n      email\n      role\n      created_at\n      realm_ids: realm_users {\n        realm_id\n        user_id\n      }\n      realm_users(where: { realm_id: { _eq: $realmId } }, limit: 1) {\n        realm_id\n        user_id\n        realm {\n          id\n          name\n        }\n        username\n        status\n        avatar_url\n        created_at\n      }\n    }\n  }\n":
    types.GetUserDocument,
  "\n  query GetUserRealms($id: uuid!) {\n    user_by_pk(id: $id) {\n      id\n      realm_users {\n        realm_id\n        user_id\n        realm {\n          id\n          name\n        }\n      }\n    }\n  }\n":
    types.GetUserRealmsDocument,
  "\n  query GetRealmUserDetails($realmId: Int!, $userId: uuid!) {\n    realm_user_union(\n      where: { realm_id: { _eq: $realmId }, user_id: { _eq: $userId } }\n    ) {\n      realm_id\n      user_id\n      realm {\n        id\n        name\n      }\n      username\n      status\n      avatar_url\n    }\n  }\n":
    types.GetRealmUserDetailsDocument,
  "\n  mutation AddOrUpdateUser($universityId: String!, $email: String!) {\n    insert_user_one(\n      object: {\n        university_id: $universityId\n        email: $email\n        username: $universityId\n      }\n      on_conflict: {\n        constraint: user_university_id_key\n        update_columns: [email]\n      }\n    ) {\n      id\n      university_id\n      email\n    }\n  }\n":
    types.AddOrUpdateUserDocument,
  "\n  mutation UpdateUsername($userId: uuid!, $username: String!) {\n    update_user_by_pk(\n      pk_columns: { id: $userId }\n      _set: { username: $username }\n    ) {\n      id\n      username\n    }\n  }\n":
    types.UpdateUsernameDocument,
  "\n  mutation UpdateRealmUsername(\n    $userId: uuid!\n    $realmId: Int!\n    $username: String!\n  ) {\n    insert_realm_user_one(\n      object: { user_id: $userId, realm_id: $realmId, username: $username }\n      on_conflict: { constraint: realm_user_pkey, update_columns: [username] }\n    ) {\n      user_id\n      realm_id\n      username\n    }\n  }\n":
    types.UpdateRealmUsernameDocument,
  "\n  mutation UpdateUserAvatar($userId: uuid!, $avatarUrl: String!) {\n    update_user_by_pk(\n      pk_columns: { id: $userId }\n      _set: { avatar_url: $avatarUrl }\n    ) {\n      id\n      avatar_url\n    }\n  }\n":
    types.UpdateUserAvatarDocument,
  "\n  mutation UpdateRealmUserAvatar(\n    $userId: uuid!\n    $realmId: Int!\n    $avatarUrl: String!\n  ) {\n    insert_realm_user_one(\n      object: { user_id: $userId, realm_id: $realmId, avatar_url: $avatarUrl }\n      on_conflict: { constraint: realm_user_pkey, update_columns: [avatar_url] }\n    ) {\n      user_id\n      realm_id\n      avatar_url\n    }\n  }\n":
    types.UpdateRealmUserAvatarDocument,
  "\n  mutation UpdateUserStatus($userId: uuid!, $status: String!) {\n    update_user_by_pk(pk_columns: { id: $userId }, _set: { status: $status }) {\n      id\n      status\n    }\n  }\n":
    types.UpdateUserStatusDocument,
  "\n  mutation UpdateRealmUserStatus(\n    $userId: uuid!\n    $realmId: Int!\n    $status: String!\n  ) {\n    update_realm_user_by_pk(\n      pk_columns: { user_id: $userId, realm_id: $realmId }\n      _set: { status: $status }\n    ) {\n      user_id\n      realm_id\n      status\n    }\n  }\n":
    types.UpdateRealmUserStatusDocument,
  "\n  query GetRealmUserByUsername($username: String!) {\n    realm_user_union(where: { username: { _eq: $username } }, limit: 1) {\n      username\n    }\n  }\n":
    types.GetRealmUserByUsernameDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetCourse($id: String!) {\n    course_by_pk(id: $id) {\n      id\n      name\n      teacher {\n        id\n        name\n      }\n      time_location\n      semester_id\n      number\n      index\n      course_reviews_aggregate {\n        aggregate {\n          count\n          avg {\n            rating\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetCourse($id: String!) {\n    course_by_pk(id: $id) {\n      id\n      name\n      teacher {\n        id\n        name\n      }\n      time_location\n      semester_id\n      number\n      index\n      course_reviews_aggregate {\n        aggregate {\n          count\n          avg {\n            rating\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetCourses($query: String!) {\n    course(\n      where: {\n        _or: [\n          { name: { _ilike: $query } }\n          { teacher: { name: { _ilike: $query } } }\n        ]\n      }\n      order_by: [{ semester_id: desc }, { updated_at: desc }]\n    ) {\n      id\n      name\n      teacher {\n        id\n        name\n      }\n      semester_id\n      course_reviews_aggregate {\n        aggregate {\n          avg {\n            rating\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetCourses($query: String!) {\n    course(\n      where: {\n        _or: [\n          { name: { _ilike: $query } }\n          { teacher: { name: { _ilike: $query } } }\n        ]\n      }\n      order_by: [{ semester_id: desc }, { updated_at: desc }]\n    ) {\n      id\n      name\n      teacher {\n        id\n        name\n      }\n      semester_id\n      course_reviews_aggregate {\n        aggregate {\n          avg {\n            rating\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetCourseCount($semesterId: String!) {\n    course_aggregate(where: { semester_id: { _eq: $semesterId } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetCourseCount($semesterId: String!) {\n    course_aggregate(where: { semester_id: { _eq: $semesterId } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetCourseReviews($courseId: String!, $userId: uuid!) {\n    my_course_review: course_review_by_pk(\n      course_id: $courseId\n      user_id: $userId\n    ) {\n      id\n      user {\n        id\n        username\n        avatar_url\n      }\n      rating\n      content\n      created_at\n      updated_at\n    }\n    course_review(\n      order_by: { updated_at: desc }\n      where: { course_id: { _eq: $courseId }, user_id: { _neq: $userId } }\n    ) {\n      id\n      user {\n        id\n        username\n        avatar_url\n      }\n      rating\n      content\n      created_at\n      updated_at\n    }\n  }\n"
): (typeof documents)["\n  query GetCourseReviews($courseId: String!, $userId: uuid!) {\n    my_course_review: course_review_by_pk(\n      course_id: $courseId\n      user_id: $userId\n    ) {\n      id\n      user {\n        id\n        username\n        avatar_url\n      }\n      rating\n      content\n      created_at\n      updated_at\n    }\n    course_review(\n      order_by: { updated_at: desc }\n      where: { course_id: { _eq: $courseId }, user_id: { _neq: $userId } }\n    ) {\n      id\n      user {\n        id\n        username\n        avatar_url\n      }\n      rating\n      content\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddCourseReview(\n    $userId: uuid!\n    $courseId: String!\n    $rating: Float!\n    $content: String!\n  ) {\n    insert_course_review_one(\n      object: {\n        user_id: $userId\n        course_id: $courseId\n        rating: $rating\n        content: $content\n      }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddCourseReview(\n    $userId: uuid!\n    $courseId: String!\n    $rating: Float!\n    $content: String!\n  ) {\n    insert_course_review_one(\n      object: {\n        user_id: $userId\n        course_id: $courseId\n        rating: $rating\n        content: $content\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateCourseReview(\n    $userId: uuid!\n    $courseId: String!\n    $rating: Float!\n    $content: String!\n  ) {\n    update_course_review_by_pk(\n      pk_columns: { course_id: $courseId, user_id: $userId }\n      _set: { rating: $rating, content: $content }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateCourseReview(\n    $userId: uuid!\n    $courseId: String!\n    $rating: Float!\n    $content: String!\n  ) {\n    update_course_review_by_pk(\n      pk_columns: { course_id: $courseId, user_id: $userId }\n      _set: { rating: $rating, content: $content }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteCourseReview($userId: uuid!, $courseId: String!) {\n    delete_course_review_by_pk(course_id: $courseId, user_id: $userId) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteCourseReview($userId: uuid!, $courseId: String!) {\n    delete_course_review_by_pk(course_id: $courseId, user_id: $userId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetMessageContacts($realmId: Int!, $userId: uuid!) {\n    message(\n      where: {\n        realm_id: { _eq: $realmId }\n        _or: [\n          { from_user_id: { _eq: $userId } }\n          { to_user_id: { _eq: $userId } }\n        ]\n      }\n      order_by: [\n        { from_user_id: asc }\n        { to_user_id: asc }\n        { created_at: desc }\n      ]\n      distinct_on: [from_user_id, to_user_id]\n    ) {\n      id\n      from_user {\n        realm_id\n        realm {\n          id\n          name\n        }\n        user_id\n        username\n        avatar_url\n      }\n      to_user {\n        realm_id\n        realm {\n          id\n          name\n        }\n        user_id\n        username\n        avatar_url\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetMessageContacts($realmId: Int!, $userId: uuid!) {\n    message(\n      where: {\n        realm_id: { _eq: $realmId }\n        _or: [\n          { from_user_id: { _eq: $userId } }\n          { to_user_id: { _eq: $userId } }\n        ]\n      }\n      order_by: [\n        { from_user_id: asc }\n        { to_user_id: asc }\n        { created_at: desc }\n      ]\n      distinct_on: [from_user_id, to_user_id]\n    ) {\n      id\n      from_user {\n        realm_id\n        realm {\n          id\n          name\n        }\n        user_id\n        username\n        avatar_url\n      }\n      to_user {\n        realm_id\n        realm {\n          id\n          name\n        }\n        user_id\n        username\n        avatar_url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetMessage($id: uuid!) {\n    message_by_pk(id: $id) {\n      id\n      from_user {\n        realm {\n          id\n          name\n        }\n        realm_id\n        user_id\n        username\n      }\n      to_user {\n        user_id\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetMessage($id: uuid!) {\n    message_by_pk(id: $id) {\n      id\n      from_user {\n        realm {\n          id\n          name\n        }\n        realm_id\n        user_id\n        username\n      }\n      to_user {\n        user_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetMessages($realmId: Int!, $userId1: uuid!, $userId2: uuid!) {\n    message(\n      where: {\n        realm_id: { _eq: $realmId }\n        _or: [\n          { from_user_id: { _eq: $userId1 }, to_user_id: { _eq: $userId2 } }\n          { from_user_id: { _eq: $userId2 }, to_user_id: { _eq: $userId1 } }\n        ]\n      }\n      order_by: { created_at: desc }\n    ) {\n      id\n      from_user_id\n      to_user_id\n      text\n      created_at\n    }\n  }\n"
): (typeof documents)["\n  query GetMessages($realmId: Int!, $userId1: uuid!, $userId2: uuid!) {\n    message(\n      where: {\n        realm_id: { _eq: $realmId }\n        _or: [\n          { from_user_id: { _eq: $userId1 }, to_user_id: { _eq: $userId2 } }\n          { from_user_id: { _eq: $userId2 }, to_user_id: { _eq: $userId1 } }\n        ]\n      }\n      order_by: { created_at: desc }\n    ) {\n      id\n      from_user_id\n      to_user_id\n      text\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddMessage(\n    $realmId: Int!\n    $fromUserId: uuid!\n    $toUserId: uuid!\n    $text: String!\n  ) {\n    insert_message_one(\n      object: {\n        realm_id: $realmId\n        from_user_id: $fromUserId\n        to_user_id: $toUserId\n        text: $text\n      }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddMessage(\n    $realmId: Int!\n    $fromUserId: uuid!\n    $toUserId: uuid!\n    $text: String!\n  ) {\n    insert_message_one(\n      object: {\n        realm_id: $realmId\n        from_user_id: $fromUserId\n        to_user_id: $toUserId\n        text: $text\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetNotifications($userId: uuid!) {\n    notification(\n      where: { user_id: { _eq: $userId } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      payload\n      read\n      created_at\n    }\n  }\n"
): (typeof documents)["\n  query GetNotifications($userId: uuid!) {\n    notification(\n      where: { user_id: { _eq: $userId } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      payload\n      read\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetNewNotificationCount($userId: uuid!) {\n    notification_aggregate(\n      where: { user_id: { _eq: $userId }, read: { _eq: false } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetNewNotificationCount($userId: uuid!) {\n    notification_aggregate(\n      where: { user_id: { _eq: $userId }, read: { _eq: false } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddNotification($userId: uuid!, $payload: String!) {\n    insert_notification_one(object: { user_id: $userId, payload: $payload }) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddNotification($userId: uuid!, $payload: String!) {\n    insert_notification_one(object: { user_id: $userId, payload: $payload }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation MarkNotificationAsRead($id: uuid!) {\n    update_notification_by_pk(pk_columns: { id: $id }, _set: { read: true }) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation MarkNotificationAsRead($id: uuid!) {\n    update_notification_by_pk(pk_columns: { id: $id }, _set: { read: true }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPost($id: Int!) {\n    realm_post(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      user {\n        realm_id\n        user_id\n        username\n      }\n      thread {\n        id\n        realm {\n          id\n          name\n        }\n        user {\n          realm_id\n          user_id\n        }\n        topic {\n          id\n          name\n        }\n        title\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetPost($id: Int!) {\n    realm_post(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      user {\n        realm_id\n        user_id\n        username\n      }\n      thread {\n        id\n        realm {\n          id\n          name\n        }\n        user {\n          realm_id\n          user_id\n        }\n        topic {\n          id\n          name\n        }\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddPost($userId: uuid!, $threadId: Int!, $content: String!) {\n    insert_post_one(\n      object: { user_id: $userId, thread_id: $threadId, content: $content }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddPost($userId: uuid!, $threadId: Int!, $content: String!) {\n    insert_post_one(\n      object: { user_id: $userId, thread_id: $threadId, content: $content }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdatePost($postId: Int!, $content: String!) {\n    update_post_by_pk(\n      pk_columns: { id: $postId }\n      _set: { content: $content }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdatePost($postId: Int!, $content: String!) {\n    update_post_by_pk(\n      pk_columns: { id: $postId }\n      _set: { content: $content }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetThreadReactions($threadId: Int!, $userId: uuid!) {\n    thread_by_pk(id: $threadId) {\n      id\n      my_reactions: reactions(where: { user_id: { _eq: $userId } }) {\n        thread_id\n        user_id\n        name\n      }\n      confused_face_reactions: reactions_aggregate(\n        where: { name: { _eq: confused_face } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {\n        aggregate {\n          count\n        }\n      }\n      grinning_face_with_smiling_eyes_reactions: reactions_aggregate(\n        where: { name: { _eq: grinning_face_with_smiling_eyes } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      party_popper_reactions: reactions_aggregate(\n        where: { name: { _eq: party_popper } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      red_heart_reactions: reactions_aggregate(\n        where: { name: { _eq: red_heart } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      rocket_reactions: reactions_aggregate(where: { name: { _eq: rocket } }) {\n        aggregate {\n          count\n        }\n      }\n      thumbs_down_reactions: reactions_aggregate(\n        where: { name: { _eq: thumbs_down } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      thumbs_up_reactions: reactions_aggregate(\n        where: { name: { _eq: thumbs_up } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      posts(order_by: { created_at: asc }) {\n        id\n        my_reactions: reactions(where: { user_id: { _eq: $userId } }) {\n          post_id\n          user_id\n          name\n        }\n        confused_face_reactions: reactions_aggregate(\n          where: { name: { _eq: confused_face } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {\n          aggregate {\n            count\n          }\n        }\n        grinning_face_with_smiling_eyes_reactions: reactions_aggregate(\n          where: { name: { _eq: grinning_face_with_smiling_eyes } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        party_popper_reactions: reactions_aggregate(\n          where: { name: { _eq: party_popper } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        red_heart_reactions: reactions_aggregate(\n          where: { name: { _eq: red_heart } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        rocket_reactions: reactions_aggregate(\n          where: { name: { _eq: rocket } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        thumbs_down_reactions: reactions_aggregate(\n          where: { name: { _eq: thumbs_down } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        thumbs_up_reactions: reactions_aggregate(\n          where: { name: { _eq: thumbs_up } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetThreadReactions($threadId: Int!, $userId: uuid!) {\n    thread_by_pk(id: $threadId) {\n      id\n      my_reactions: reactions(where: { user_id: { _eq: $userId } }) {\n        thread_id\n        user_id\n        name\n      }\n      confused_face_reactions: reactions_aggregate(\n        where: { name: { _eq: confused_face } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {\n        aggregate {\n          count\n        }\n      }\n      grinning_face_with_smiling_eyes_reactions: reactions_aggregate(\n        where: { name: { _eq: grinning_face_with_smiling_eyes } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      party_popper_reactions: reactions_aggregate(\n        where: { name: { _eq: party_popper } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      red_heart_reactions: reactions_aggregate(\n        where: { name: { _eq: red_heart } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      rocket_reactions: reactions_aggregate(where: { name: { _eq: rocket } }) {\n        aggregate {\n          count\n        }\n      }\n      thumbs_down_reactions: reactions_aggregate(\n        where: { name: { _eq: thumbs_down } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      thumbs_up_reactions: reactions_aggregate(\n        where: { name: { _eq: thumbs_up } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n      posts(order_by: { created_at: asc }) {\n        id\n        my_reactions: reactions(where: { user_id: { _eq: $userId } }) {\n          post_id\n          user_id\n          name\n        }\n        confused_face_reactions: reactions_aggregate(\n          where: { name: { _eq: confused_face } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        eyes_reactions: reactions_aggregate(where: { name: { _eq: eyes } }) {\n          aggregate {\n            count\n          }\n        }\n        grinning_face_with_smiling_eyes_reactions: reactions_aggregate(\n          where: { name: { _eq: grinning_face_with_smiling_eyes } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        party_popper_reactions: reactions_aggregate(\n          where: { name: { _eq: party_popper } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        red_heart_reactions: reactions_aggregate(\n          where: { name: { _eq: red_heart } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        rocket_reactions: reactions_aggregate(\n          where: { name: { _eq: rocket } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        thumbs_down_reactions: reactions_aggregate(\n          where: { name: { _eq: thumbs_down } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n        thumbs_up_reactions: reactions_aggregate(\n          where: { name: { _eq: thumbs_up } }\n        ) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddThreadReaction(\n    $name: reaction_emoji_enum!\n    $threadId: Int!\n    $userId: uuid!\n  ) {\n    insert_thread_reaction_one(\n      object: { name: $name, thread_id: $threadId, user_id: $userId }\n      on_conflict: {\n        constraint: thread_reaction_pkey\n        update_columns: [created_at]\n      }\n    ) {\n      user_id\n      thread_id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation AddThreadReaction(\n    $name: reaction_emoji_enum!\n    $threadId: Int!\n    $userId: uuid!\n  ) {\n    insert_thread_reaction_one(\n      object: { name: $name, thread_id: $threadId, user_id: $userId }\n      on_conflict: {\n        constraint: thread_reaction_pkey\n        update_columns: [created_at]\n      }\n    ) {\n      user_id\n      thread_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteThreadReaction(\n    $name: reaction_emoji_enum!\n    $threadId: Int!\n    $userId: uuid!\n  ) {\n    delete_thread_reaction_by_pk(\n      name: $name\n      thread_id: $threadId\n      user_id: $userId\n    ) {\n      user_id\n      thread_id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteThreadReaction(\n    $name: reaction_emoji_enum!\n    $threadId: Int!\n    $userId: uuid!\n  ) {\n    delete_thread_reaction_by_pk(\n      name: $name\n      thread_id: $threadId\n      user_id: $userId\n    ) {\n      user_id\n      thread_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddPostReaction(\n    $name: reaction_emoji_enum!\n    $postId: Int!\n    $userId: uuid!\n  ) {\n    insert_post_reaction_one(\n      object: { name: $name, post_id: $postId, user_id: $userId }\n      on_conflict: {\n        constraint: post_reaction_pkey\n        update_columns: [created_at]\n      }\n    ) {\n      user_id\n      post_id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation AddPostReaction(\n    $name: reaction_emoji_enum!\n    $postId: Int!\n    $userId: uuid!\n  ) {\n    insert_post_reaction_one(\n      object: { name: $name, post_id: $postId, user_id: $userId }\n      on_conflict: {\n        constraint: post_reaction_pkey\n        update_columns: [created_at]\n      }\n    ) {\n      user_id\n      post_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeletePostReaction(\n    $name: reaction_emoji_enum!\n    $postId: Int!\n    $userId: uuid!\n  ) {\n    delete_post_reaction_by_pk(\n      name: $name\n      post_id: $postId\n      user_id: $userId\n    ) {\n      user_id\n      post_id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation DeletePostReaction(\n    $name: reaction_emoji_enum!\n    $postId: Int!\n    $userId: uuid!\n  ) {\n    delete_post_reaction_by_pk(\n      name: $name\n      post_id: $postId\n      user_id: $userId\n    ) {\n      user_id\n      post_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRealm($id: Int!) {\n    realm_public(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      name\n      description\n      private\n      topics(order_by: { created_at: asc }) {\n        id\n        name\n      }\n      threads(\n        order_by: [\n          { posts_aggregate: { max: { updated_at: desc_nulls_last } } }\n          { updated_at: desc }\n          { created_at: desc }\n        ]\n      ) {\n        id\n        realm_id\n        topic {\n          id\n          name\n        }\n        user {\n          realm_id\n          user_id\n          username\n          avatar_url\n        }\n        title\n        posts(\n          order_by: [{ id: asc }, { updated_at: desc }, { created_at: desc }]\n          distinct_on: [id]\n          limit: 4\n        ) {\n          id\n          user {\n            realm_id\n            user_id\n            username\n            avatar_url\n          }\n        }\n        posts_aggregate {\n          aggregate {\n            max {\n              updated_at\n            }\n          }\n        }\n        updated_at\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetRealm($id: Int!) {\n    realm_public(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      name\n      description\n      private\n      topics(order_by: { created_at: asc }) {\n        id\n        name\n      }\n      threads(\n        order_by: [\n          { posts_aggregate: { max: { updated_at: desc_nulls_last } } }\n          { updated_at: desc }\n          { created_at: desc }\n        ]\n      ) {\n        id\n        realm_id\n        topic {\n          id\n          name\n        }\n        user {\n          realm_id\n          user_id\n          username\n          avatar_url\n        }\n        title\n        posts(\n          order_by: [{ id: asc }, { updated_at: desc }, { created_at: desc }]\n          distinct_on: [id]\n          limit: 4\n        ) {\n          id\n          user {\n            realm_id\n            user_id\n            username\n            avatar_url\n          }\n        }\n        posts_aggregate {\n          aggregate {\n            max {\n              updated_at\n            }\n          }\n        }\n        updated_at\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPublicRealms {\n    realm_public(where: { private: { _eq: false }, id: { _neq: 1 } }) {\n      id\n      name\n      description\n      users_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetPublicRealms {\n    realm_public(where: { private: { _eq: false }, id: { _neq: 1 } }) {\n      id\n      name\n      description\n      users_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRealmDetails($id: Int!) {\n    realm_public(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      name\n      description\n      private\n    }\n  }\n"
): (typeof documents)["\n  query GetRealmDetails($id: Int!) {\n    realm_public(where: { id: { _eq: $id } }, limit: 1) {\n      id\n      name\n      description\n      private\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRealmDetailsInvitationCode($id: Int!) {\n    realm_by_pk(id: $id) {\n      id\n      admin_id\n      name\n      description\n      private\n      invitation_code\n      topics {\n        id\n        name\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetRealmDetailsInvitationCode($id: Int!) {\n    realm_by_pk(id: $id) {\n      id\n      admin_id\n      name\n      description\n      private\n      invitation_code\n      topics {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddRealm(\n    $adminId: uuid!\n    $name: String!\n    $description: String!\n    $private: Boolean!\n    $invitationCode: String\n  ) {\n    insert_realm_one(\n      object: {\n        admin_id: $adminId\n        name: $name\n        description: $description\n        private: $private\n        invitation_code: $invitationCode\n      }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddRealm(\n    $adminId: uuid!\n    $name: String!\n    $description: String!\n    $private: Boolean!\n    $invitationCode: String\n  ) {\n    insert_realm_one(\n      object: {\n        admin_id: $adminId\n        name: $name\n        description: $description\n        private: $private\n        invitation_code: $invitationCode\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateRealm(\n    $id: Int!\n    $description: String!\n    $private: Boolean!\n    $invitationCode: String\n    $topics: [topic_insert_input!]!\n  ) {\n    update_realm_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        description: $description\n        private: $private\n        invitation_code: $invitationCode\n      }\n    ) {\n      id\n    }\n    insert_topic(\n      objects: $topics\n      on_conflict: { constraint: topic_pkey, update_columns: [name] }\n    ) {\n      affected_rows\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateRealm(\n    $id: Int!\n    $description: String!\n    $private: Boolean!\n    $invitationCode: String\n    $topics: [topic_insert_input!]!\n  ) {\n    update_realm_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        description: $description\n        private: $private\n        invitation_code: $invitationCode\n      }\n    ) {\n      id\n    }\n    insert_topic(\n      objects: $topics\n      on_conflict: { constraint: topic_pkey, update_columns: [name] }\n    ) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation GetSession($id: uuid!, $activeAt: timestamptz!) {\n    update_session_by_pk(\n      pk_columns: { id: $id }\n      _set: { active_at: $activeAt }\n    ) {\n      id\n      user_id\n    }\n  }\n"
): (typeof documents)["\n  mutation GetSession($id: uuid!, $activeAt: timestamptz!) {\n    update_session_by_pk(\n      pk_columns: { id: $id }\n      _set: { active_at: $activeAt }\n    ) {\n      id\n      user_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetSessions($userId: uuid!) {\n    session(\n      order_by: { active_at: desc }\n      where: { user_id: { _eq: $userId } }\n    ) {\n      id\n      description\n      created_at\n      active_at\n    }\n  }\n"
): (typeof documents)["\n  query GetSessions($userId: uuid!) {\n    session(\n      order_by: { active_at: desc }\n      where: { user_id: { _eq: $userId } }\n    ) {\n      id\n      description\n      created_at\n      active_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddSession(\n    $id: uuid!\n    $userId: uuid!\n    $description: String!\n    $activeAt: timestamptz\n  ) {\n    insert_session_one(\n      object: {\n        id: $id\n        user_id: $userId\n        description: $description\n        active_at: $activeAt\n      }\n      on_conflict: {\n        constraint: session_pkey\n        update_columns: [description, active_at]\n      }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddSession(\n    $id: uuid!\n    $userId: uuid!\n    $description: String!\n    $activeAt: timestamptz\n  ) {\n    insert_session_one(\n      object: {\n        id: $id\n        user_id: $userId\n        description: $description\n        active_at: $activeAt\n      }\n      on_conflict: {\n        constraint: session_pkey\n        update_columns: [description, active_at]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteSession($id: uuid!) {\n    delete_session_by_pk(id: $id) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteSession($id: uuid!) {\n    delete_session_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetThread($id: Int!) {\n    thread_by_pk(id: $id) {\n      id\n      realm {\n        id\n        name\n      }\n      topic {\n        id\n        name\n      }\n      title\n      content\n      user {\n        realm_id\n        user_id\n        username\n        status\n        avatar_url\n      }\n      created_at\n      updated_at\n      posts(order_by: { created_at: asc }) {\n        id\n        user {\n          realm_id\n          user_id\n          username\n          status\n          avatar_url\n        }\n        content\n        created_at\n        updated_at\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetThread($id: Int!) {\n    thread_by_pk(id: $id) {\n      id\n      realm {\n        id\n        name\n      }\n      topic {\n        id\n        name\n      }\n      title\n      content\n      user {\n        realm_id\n        user_id\n        username\n        status\n        avatar_url\n      }\n      created_at\n      updated_at\n      posts(order_by: { created_at: asc }) {\n        id\n        user {\n          realm_id\n          user_id\n          username\n          status\n          avatar_url\n        }\n        content\n        created_at\n        updated_at\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetHottestThreads {\n    thread(\n      where: { realm: { private: { _eq: false } } }\n      order_by: [\n        { posts_aggregate: { count: desc } }\n        { reactions_aggregate: { count: desc } }\n      ]\n      limit: 3\n    ) {\n      id\n      realm {\n        id\n        name\n      }\n      title\n      posts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      created_at\n    }\n  }\n"
): (typeof documents)["\n  query GetHottestThreads {\n    thread(\n      where: { realm: { private: { _eq: false } } }\n      order_by: [\n        { posts_aggregate: { count: desc } }\n        { reactions_aggregate: { count: desc } }\n      ]\n      limit: 3\n    ) {\n      id\n      realm {\n        id\n        name\n      }\n      title\n      posts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetNewestThreads {\n    thread(\n      where: { realm: { private: { _eq: false } } }\n      order_by: { created_at: desc }\n      limit: 3\n    ) {\n      id\n      realm {\n        id\n        name\n      }\n      title\n      posts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      created_at\n    }\n  }\n"
): (typeof documents)["\n  query GetNewestThreads {\n    thread(\n      where: { realm: { private: { _eq: false } } }\n      order_by: { created_at: desc }\n      limit: 3\n    ) {\n      id\n      realm {\n        id\n        name\n      }\n      title\n      posts_aggregate {\n        aggregate {\n          count\n        }\n      }\n      reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      created_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddThread(\n    $realmId: Int!\n    $userId: uuid!\n    $topicId: Int\n    $title: String!\n    $content: String!\n  ) {\n    insert_thread_one(\n      object: {\n        realm_id: $realmId\n        user_id: $userId\n        topic_id: $topicId\n        title: $title\n        content: $content\n      }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddThread(\n    $realmId: Int!\n    $userId: uuid!\n    $topicId: Int\n    $title: String!\n    $content: String!\n  ) {\n    insert_thread_one(\n      object: {\n        realm_id: $realmId\n        user_id: $userId\n        topic_id: $topicId\n        title: $title\n        content: $content\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateThread($threadId: Int!, $title: String!, $content: String!) {\n    update_thread_by_pk(\n      pk_columns: { id: $threadId }\n      _set: { title: $title, content: $content }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateThread($threadId: Int!, $title: String!, $content: String!) {\n    update_thread_by_pk(\n      pk_columns: { id: $threadId }\n      _set: { title: $title, content: $content }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUser($realmId: Int!, $userId: uuid!) {\n    user_by_pk(id: $userId) {\n      id\n      university_id\n      email\n      role\n      created_at\n      realm_ids: realm_users {\n        realm_id\n        user_id\n      }\n      realm_users(where: { realm_id: { _eq: $realmId } }, limit: 1) {\n        realm_id\n        user_id\n        realm {\n          id\n          name\n        }\n        username\n        status\n        avatar_url\n        created_at\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetUser($realmId: Int!, $userId: uuid!) {\n    user_by_pk(id: $userId) {\n      id\n      university_id\n      email\n      role\n      created_at\n      realm_ids: realm_users {\n        realm_id\n        user_id\n      }\n      realm_users(where: { realm_id: { _eq: $realmId } }, limit: 1) {\n        realm_id\n        user_id\n        realm {\n          id\n          name\n        }\n        username\n        status\n        avatar_url\n        created_at\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserRealms($id: uuid!) {\n    user_by_pk(id: $id) {\n      id\n      realm_users {\n        realm_id\n        user_id\n        realm {\n          id\n          name\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetUserRealms($id: uuid!) {\n    user_by_pk(id: $id) {\n      id\n      realm_users {\n        realm_id\n        user_id\n        realm {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRealmUserDetails($realmId: Int!, $userId: uuid!) {\n    realm_user_union(\n      where: { realm_id: { _eq: $realmId }, user_id: { _eq: $userId } }\n    ) {\n      realm_id\n      user_id\n      realm {\n        id\n        name\n      }\n      username\n      status\n      avatar_url\n    }\n  }\n"
): (typeof documents)["\n  query GetRealmUserDetails($realmId: Int!, $userId: uuid!) {\n    realm_user_union(\n      where: { realm_id: { _eq: $realmId }, user_id: { _eq: $userId } }\n    ) {\n      realm_id\n      user_id\n      realm {\n        id\n        name\n      }\n      username\n      status\n      avatar_url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddOrUpdateUser($universityId: String!, $email: String!) {\n    insert_user_one(\n      object: {\n        university_id: $universityId\n        email: $email\n        username: $universityId\n      }\n      on_conflict: {\n        constraint: user_university_id_key\n        update_columns: [email]\n      }\n    ) {\n      id\n      university_id\n      email\n    }\n  }\n"
): (typeof documents)["\n  mutation AddOrUpdateUser($universityId: String!, $email: String!) {\n    insert_user_one(\n      object: {\n        university_id: $universityId\n        email: $email\n        username: $universityId\n      }\n      on_conflict: {\n        constraint: user_university_id_key\n        update_columns: [email]\n      }\n    ) {\n      id\n      university_id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUsername($userId: uuid!, $username: String!) {\n    update_user_by_pk(\n      pk_columns: { id: $userId }\n      _set: { username: $username }\n    ) {\n      id\n      username\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateUsername($userId: uuid!, $username: String!) {\n    update_user_by_pk(\n      pk_columns: { id: $userId }\n      _set: { username: $username }\n    ) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateRealmUsername(\n    $userId: uuid!\n    $realmId: Int!\n    $username: String!\n  ) {\n    insert_realm_user_one(\n      object: { user_id: $userId, realm_id: $realmId, username: $username }\n      on_conflict: { constraint: realm_user_pkey, update_columns: [username] }\n    ) {\n      user_id\n      realm_id\n      username\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateRealmUsername(\n    $userId: uuid!\n    $realmId: Int!\n    $username: String!\n  ) {\n    insert_realm_user_one(\n      object: { user_id: $userId, realm_id: $realmId, username: $username }\n      on_conflict: { constraint: realm_user_pkey, update_columns: [username] }\n    ) {\n      user_id\n      realm_id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUserAvatar($userId: uuid!, $avatarUrl: String!) {\n    update_user_by_pk(\n      pk_columns: { id: $userId }\n      _set: { avatar_url: $avatarUrl }\n    ) {\n      id\n      avatar_url\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateUserAvatar($userId: uuid!, $avatarUrl: String!) {\n    update_user_by_pk(\n      pk_columns: { id: $userId }\n      _set: { avatar_url: $avatarUrl }\n    ) {\n      id\n      avatar_url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateRealmUserAvatar(\n    $userId: uuid!\n    $realmId: Int!\n    $avatarUrl: String!\n  ) {\n    insert_realm_user_one(\n      object: { user_id: $userId, realm_id: $realmId, avatar_url: $avatarUrl }\n      on_conflict: { constraint: realm_user_pkey, update_columns: [avatar_url] }\n    ) {\n      user_id\n      realm_id\n      avatar_url\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateRealmUserAvatar(\n    $userId: uuid!\n    $realmId: Int!\n    $avatarUrl: String!\n  ) {\n    insert_realm_user_one(\n      object: { user_id: $userId, realm_id: $realmId, avatar_url: $avatarUrl }\n      on_conflict: { constraint: realm_user_pkey, update_columns: [avatar_url] }\n    ) {\n      user_id\n      realm_id\n      avatar_url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUserStatus($userId: uuid!, $status: String!) {\n    update_user_by_pk(pk_columns: { id: $userId }, _set: { status: $status }) {\n      id\n      status\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateUserStatus($userId: uuid!, $status: String!) {\n    update_user_by_pk(pk_columns: { id: $userId }, _set: { status: $status }) {\n      id\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateRealmUserStatus(\n    $userId: uuid!\n    $realmId: Int!\n    $status: String!\n  ) {\n    update_realm_user_by_pk(\n      pk_columns: { user_id: $userId, realm_id: $realmId }\n      _set: { status: $status }\n    ) {\n      user_id\n      realm_id\n      status\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateRealmUserStatus(\n    $userId: uuid!\n    $realmId: Int!\n    $status: String!\n  ) {\n    update_realm_user_by_pk(\n      pk_columns: { user_id: $userId, realm_id: $realmId }\n      _set: { status: $status }\n    ) {\n      user_id\n      realm_id\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRealmUserByUsername($username: String!) {\n    realm_user_union(where: { username: { _eq: $username } }, limit: 1) {\n      username\n    }\n  }\n"
): (typeof documents)["\n  query GetRealmUserByUsername($username: String!) {\n    realm_user_union(where: { username: { _eq: $username } }, limit: 1) {\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
