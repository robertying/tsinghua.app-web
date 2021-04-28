/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseReviews
// ====================================================

export interface GetCourseReviews_my_course_review_user {
  __typename: "user_public";
  id: uuid | null;
  username: string | null;
  avatar_url: string | null;
}

export interface GetCourseReviews_my_course_review {
  __typename: "course_review";
  id: number;
  /**
   * An object relationship
   */
  user: GetCourseReviews_my_course_review_user | null;
  rating: number;
  content: string;
  created_at: timestamptz;
  updated_at: timestamptz;
}

export interface GetCourseReviews_course_review_user {
  __typename: "user_public";
  id: uuid | null;
  username: string | null;
  avatar_url: string | null;
}

export interface GetCourseReviews_course_review {
  __typename: "course_review";
  id: number;
  /**
   * An object relationship
   */
  user: GetCourseReviews_course_review_user | null;
  rating: number;
  content: string;
  created_at: timestamptz;
  updated_at: timestamptz;
}

export interface GetCourseReviews {
  /**
   * fetch data from the table: "course_review" using primary key columns
   */
  my_course_review: GetCourseReviews_my_course_review | null;
  /**
   * fetch data from the table: "course_review"
   */
  course_review: GetCourseReviews_course_review[];
}

export interface GetCourseReviewsVariables {
  courseId: string;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCourseReview
// ====================================================

export interface AddCourseReview_insert_course_review_one {
  __typename: "course_review";
  id: number;
}

export interface AddCourseReview {
  /**
   * insert a single row into the table: "course_review"
   */
  insert_course_review_one: AddCourseReview_insert_course_review_one | null;
}

export interface AddCourseReviewVariables {
  userId: uuid;
  courseId: string;
  rating: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCourseReview
// ====================================================

export interface UpdateCourseReview_update_course_review_by_pk {
  __typename: "course_review";
  id: number;
}

export interface UpdateCourseReview {
  /**
   * update single row of the table: "course_review"
   */
  update_course_review_by_pk: UpdateCourseReview_update_course_review_by_pk | null;
}

export interface UpdateCourseReviewVariables {
  userId: uuid;
  courseId: string;
  rating: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCourseReview
// ====================================================

export interface DeleteCourseReview_delete_course_review_by_pk {
  __typename: "course_review";
  id: number;
}

export interface DeleteCourseReview {
  /**
   * delete single row from the table: "course_review"
   */
  delete_course_review_by_pk: DeleteCourseReview_delete_course_review_by_pk | null;
}

export interface DeleteCourseReviewVariables {
  userId: uuid;
  courseId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourse
// ====================================================

export interface GetCourse_course_by_pk_teacher {
  __typename: "teacher";
  id: string;
  name: string;
}

export interface GetCourse_course_by_pk_course_reviews_aggregate_aggregate_avg {
  __typename: "course_review_avg_fields";
  rating: number | null;
}

export interface GetCourse_course_by_pk_course_reviews_aggregate_aggregate {
  __typename: "course_review_aggregate_fields";
  count: number;
  avg: GetCourse_course_by_pk_course_reviews_aggregate_aggregate_avg | null;
}

export interface GetCourse_course_by_pk_course_reviews_aggregate {
  __typename: "course_review_aggregate";
  aggregate: GetCourse_course_by_pk_course_reviews_aggregate_aggregate | null;
}

export interface GetCourse_course_by_pk {
  __typename: "course";
  id: string;
  name: string;
  /**
   * An object relationship
   */
  teacher: GetCourse_course_by_pk_teacher;
  time_location: string;
  semester_id: string;
  number: string;
  index: number;
  /**
   * An aggregate relationship
   */
  course_reviews_aggregate: GetCourse_course_by_pk_course_reviews_aggregate;
}

export interface GetCourse {
  /**
   * fetch data from the table: "course" using primary key columns
   */
  course_by_pk: GetCourse_course_by_pk | null;
}

export interface GetCourseVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourses
// ====================================================

export interface GetCourses_course_teacher {
  __typename: "teacher";
  id: string;
  name: string;
}

export interface GetCourses_course {
  __typename: "course";
  id: string;
  name: string;
  /**
   * An object relationship
   */
  teacher: GetCourses_course_teacher;
  semester_id: string;
}

export interface GetCourses {
  /**
   * fetch data from the table: "course"
   */
  course: GetCourses_course[];
}

export interface GetCoursesVariables {
  query: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseCount
// ====================================================

export interface GetCourseCount_course_aggregate_aggregate {
  __typename: "course_aggregate_fields";
  count: number;
}

export interface GetCourseCount_course_aggregate {
  __typename: "course_aggregate";
  aggregate: GetCourseCount_course_aggregate_aggregate | null;
}

export interface GetCourseCount {
  /**
   * fetch aggregated fields from the table: "course"
   */
  course_aggregate: GetCourseCount_course_aggregate;
}

export interface GetCourseCountVariables {
  semesterId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMessageContacts
// ====================================================

export interface GetMessageContacts_message_from_user {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  avatar_url: string | null;
}

export interface GetMessageContacts_message_to_user {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  avatar_url: string | null;
}

export interface GetMessageContacts_message {
  __typename: "message";
  id: uuid;
  /**
   * An object relationship
   */
  from_user: GetMessageContacts_message_from_user | null;
  /**
   * An object relationship
   */
  to_user: GetMessageContacts_message_to_user | null;
}

export interface GetMessageContacts {
  /**
   * fetch data from the table: "message"
   */
  message: GetMessageContacts_message[];
}

export interface GetMessageContactsVariables {
  realmId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMessages
// ====================================================

export interface GetMessages_message {
  __typename: "message";
  id: uuid;
  from_user_id: uuid;
  to_user_id: uuid;
  text: string;
  created_at: timestamptz;
}

export interface GetMessages {
  /**
   * fetch data from the table: "message"
   */
  message: GetMessages_message[];
}

export interface GetMessagesVariables {
  realmId: number;
  userId1: uuid;
  userId2: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddMessage
// ====================================================

export interface AddMessage_insert_message_one {
  __typename: "message";
  id: uuid;
}

export interface AddMessage {
  /**
   * insert a single row into the table: "message"
   */
  insert_message_one: AddMessage_insert_message_one | null;
}

export interface AddMessageVariables {
  realmId: number;
  fromUserId: uuid;
  toUserId: uuid;
  text: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPost
// ====================================================

export interface AddPost_insert_post_one {
  __typename: "post";
  id: number;
}

export interface AddPost {
  /**
   * insert a single row into the table: "post"
   */
  insert_post_one: AddPost_insert_post_one | null;
}

export interface AddPostVariables {
  userId: uuid;
  threadId: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_update_post_by_pk {
  __typename: "post";
  id: number;
}

export interface UpdatePost {
  /**
   * update single row of the table: "post"
   */
  update_post_by_pk: UpdatePost_update_post_by_pk | null;
}

export interface UpdatePostVariables {
  postId: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThreadReactions
// ====================================================

export interface GetThreadReactions_thread_by_pk_my_reactions {
  __typename: "thread_reaction";
  name: reaction_emoji_enum;
}

export interface GetThreadReactions_thread_by_pk_confused_face_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_confused_face_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_confused_face_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_eyes_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_eyes_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_grinning_face_with_smiling_eyes_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_grinning_face_with_smiling_eyes_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_grinning_face_with_smiling_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_party_popper_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_party_popper_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_party_popper_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_red_heart_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_red_heart_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_red_heart_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_rocket_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_rocket_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_rocket_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_thumbs_down_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_thumbs_down_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_thumbs_down_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_thumbs_up_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_thumbs_up_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_thumbs_up_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_my_reactions {
  __typename: "post_reaction";
  name: reaction_emoji_enum;
}

export interface GetThreadReactions_thread_by_pk_posts_confused_face_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_confused_face_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_confused_face_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_eyes_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_eyes_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_grinning_face_with_smiling_eyes_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_grinning_face_with_smiling_eyes_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_grinning_face_with_smiling_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_party_popper_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_party_popper_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_party_popper_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_red_heart_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_red_heart_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_red_heart_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_rocket_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_rocket_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_rocket_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_thumbs_down_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_thumbs_down_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_thumbs_down_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts_thumbs_up_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_by_pk_posts_thumbs_up_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_by_pk_posts_thumbs_up_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_by_pk_posts {
  __typename: "realm_post";
  id: number | null;
  /**
   * An array relationship
   */
  my_reactions: GetThreadReactions_thread_by_pk_posts_my_reactions[];
  /**
   * An aggregate relationship
   */
  confused_face_reactions: GetThreadReactions_thread_by_pk_posts_confused_face_reactions;
  /**
   * An aggregate relationship
   */
  eyes_reactions: GetThreadReactions_thread_by_pk_posts_eyes_reactions;
  /**
   * An aggregate relationship
   */
  grinning_face_with_smiling_eyes_reactions: GetThreadReactions_thread_by_pk_posts_grinning_face_with_smiling_eyes_reactions;
  /**
   * An aggregate relationship
   */
  party_popper_reactions: GetThreadReactions_thread_by_pk_posts_party_popper_reactions;
  /**
   * An aggregate relationship
   */
  red_heart_reactions: GetThreadReactions_thread_by_pk_posts_red_heart_reactions;
  /**
   * An aggregate relationship
   */
  rocket_reactions: GetThreadReactions_thread_by_pk_posts_rocket_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_down_reactions: GetThreadReactions_thread_by_pk_posts_thumbs_down_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_up_reactions: GetThreadReactions_thread_by_pk_posts_thumbs_up_reactions;
}

export interface GetThreadReactions_thread_by_pk {
  __typename: "thread";
  id: number;
  /**
   * An array relationship
   */
  my_reactions: GetThreadReactions_thread_by_pk_my_reactions[];
  /**
   * An aggregate relationship
   */
  confused_face_reactions: GetThreadReactions_thread_by_pk_confused_face_reactions;
  /**
   * An aggregate relationship
   */
  eyes_reactions: GetThreadReactions_thread_by_pk_eyes_reactions;
  /**
   * An aggregate relationship
   */
  grinning_face_with_smiling_eyes_reactions: GetThreadReactions_thread_by_pk_grinning_face_with_smiling_eyes_reactions;
  /**
   * An aggregate relationship
   */
  party_popper_reactions: GetThreadReactions_thread_by_pk_party_popper_reactions;
  /**
   * An aggregate relationship
   */
  red_heart_reactions: GetThreadReactions_thread_by_pk_red_heart_reactions;
  /**
   * An aggregate relationship
   */
  rocket_reactions: GetThreadReactions_thread_by_pk_rocket_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_down_reactions: GetThreadReactions_thread_by_pk_thumbs_down_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_up_reactions: GetThreadReactions_thread_by_pk_thumbs_up_reactions;
  /**
   * An array relationship
   */
  posts: GetThreadReactions_thread_by_pk_posts[];
}

export interface GetThreadReactions {
  /**
   * fetch data from the table: "thread" using primary key columns
   */
  thread_by_pk: GetThreadReactions_thread_by_pk | null;
}

export interface GetThreadReactionsVariables {
  threadId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddThreadReaction
// ====================================================

export interface AddThreadReaction_insert_thread_reaction_one {
  __typename: "thread_reaction";
  user_id: uuid;
  thread_id: number;
  name: reaction_emoji_enum;
}

export interface AddThreadReaction {
  /**
   * insert a single row into the table: "thread_reaction"
   */
  insert_thread_reaction_one: AddThreadReaction_insert_thread_reaction_one | null;
}

export interface AddThreadReactionVariables {
  name: reaction_emoji_enum;
  threadId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteThreadReaction
// ====================================================

export interface DeleteThreadReaction_delete_thread_reaction_by_pk {
  __typename: "thread_reaction";
  user_id: uuid;
  thread_id: number;
  name: reaction_emoji_enum;
}

export interface DeleteThreadReaction {
  /**
   * delete single row from the table: "thread_reaction"
   */
  delete_thread_reaction_by_pk: DeleteThreadReaction_delete_thread_reaction_by_pk | null;
}

export interface DeleteThreadReactionVariables {
  name: reaction_emoji_enum;
  threadId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPostReaction
// ====================================================

export interface AddPostReaction_insert_post_reaction_one {
  __typename: "post_reaction";
  user_id: uuid;
  post_id: number;
  name: reaction_emoji_enum;
}

export interface AddPostReaction {
  /**
   * insert a single row into the table: "post_reaction"
   */
  insert_post_reaction_one: AddPostReaction_insert_post_reaction_one | null;
}

export interface AddPostReactionVariables {
  name: reaction_emoji_enum;
  postId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePostReaction
// ====================================================

export interface DeletePostReaction_delete_post_reaction_by_pk {
  __typename: "post_reaction";
  user_id: uuid;
  post_id: number;
  name: reaction_emoji_enum;
}

export interface DeletePostReaction {
  /**
   * delete single row from the table: "post_reaction"
   */
  delete_post_reaction_by_pk: DeletePostReaction_delete_post_reaction_by_pk | null;
}

export interface DeletePostReactionVariables {
  name: reaction_emoji_enum;
  postId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRealm
// ====================================================

export interface GetRealm_realm_by_pk_topics {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetRealm_realm_by_pk_threads_topic {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetRealm_realm_by_pk_threads_user {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  avatar_url: string | null;
}

export interface GetRealm_realm_by_pk_threads_posts_user {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  avatar_url: string | null;
}

export interface GetRealm_realm_by_pk_threads_posts {
  __typename: "realm_post";
  id: number | null;
  /**
   * An object relationship
   */
  user: GetRealm_realm_by_pk_threads_posts_user | null;
}

export interface GetRealm_realm_by_pk_threads {
  __typename: "thread";
  id: number;
  realm_id: number;
  /**
   * An object relationship
   */
  topic: GetRealm_realm_by_pk_threads_topic | null;
  /**
   * An object relationship
   */
  user: GetRealm_realm_by_pk_threads_user | null;
  title: string;
  updated_at: timestamptz;
  /**
   * An array relationship
   */
  posts: GetRealm_realm_by_pk_threads_posts[];
}

export interface GetRealm_realm_by_pk {
  __typename: "realm";
  id: number;
  name: string;
  description: string;
  private: boolean;
  /**
   * An array relationship
   */
  topics: GetRealm_realm_by_pk_topics[];
  /**
   * An array relationship
   */
  threads: GetRealm_realm_by_pk_threads[];
}

export interface GetRealm {
  /**
   * fetch data from the table: "realm" using primary key columns
   */
  realm_by_pk: GetRealm_realm_by_pk | null;
}

export interface GetRealmVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRealmDetails
// ====================================================

export interface GetRealmDetails_realm_by_pk {
  __typename: "realm";
  id: number;
  name: string;
  description: string;
  private: boolean;
}

export interface GetRealmDetails {
  /**
   * fetch data from the table: "realm" using primary key columns
   */
  realm_by_pk: GetRealmDetails_realm_by_pk | null;
}

export interface GetRealmDetailsVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRealmDetailsInvitationCode
// ====================================================

export interface GetRealmDetailsInvitationCode_realm_by_pk_topics {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetRealmDetailsInvitationCode_realm_by_pk {
  __typename: "realm";
  id: number;
  admin_id: uuid;
  name: string;
  description: string;
  private: boolean;
  invitation_code: string | null;
  /**
   * An array relationship
   */
  topics: GetRealmDetailsInvitationCode_realm_by_pk_topics[];
}

export interface GetRealmDetailsInvitationCode {
  /**
   * fetch data from the table: "realm" using primary key columns
   */
  realm_by_pk: GetRealmDetailsInvitationCode_realm_by_pk | null;
}

export interface GetRealmDetailsInvitationCodeVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRealm
// ====================================================

export interface AddRealm_insert_realm_one {
  __typename: "realm";
  id: number;
}

export interface AddRealm {
  /**
   * insert a single row into the table: "realm"
   */
  insert_realm_one: AddRealm_insert_realm_one | null;
}

export interface AddRealmVariables {
  adminId: uuid;
  name: string;
  description: string;
  private: boolean;
  invitationCode?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRealm
// ====================================================

export interface UpdateRealm_update_realm_by_pk {
  __typename: "realm";
  id: number;
}

export interface UpdateRealm_insert_topic {
  __typename: "topic_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: number;
}

export interface UpdateRealm {
  /**
   * update single row of the table: "realm"
   */
  update_realm_by_pk: UpdateRealm_update_realm_by_pk | null;
  /**
   * insert data into the table: "topic"
   */
  insert_topic: UpdateRealm_insert_topic | null;
}

export interface UpdateRealmVariables {
  id: number;
  description: string;
  private: boolean;
  invitationCode?: string | null;
  topics: topic_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThread
// ====================================================

export interface GetThread_thread_by_pk_realm {
  __typename: "realm";
  id: number;
  name: string;
}

export interface GetThread_thread_by_pk_topic {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetThread_thread_by_pk_user {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  status: string | null;
  avatar_url: string | null;
}

export interface GetThread_thread_by_pk_posts_user {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  status: string | null;
  avatar_url: string | null;
}

export interface GetThread_thread_by_pk_posts {
  __typename: "realm_post";
  id: number | null;
  /**
   * An object relationship
   */
  user: GetThread_thread_by_pk_posts_user | null;
  content: string | null;
  created_at: timestamptz | null;
  updated_at: timestamptz | null;
}

export interface GetThread_thread_by_pk {
  __typename: "thread";
  id: number;
  /**
   * An object relationship
   */
  realm: GetThread_thread_by_pk_realm;
  /**
   * An object relationship
   */
  topic: GetThread_thread_by_pk_topic | null;
  title: string;
  content: string;
  /**
   * An object relationship
   */
  user: GetThread_thread_by_pk_user | null;
  created_at: timestamptz;
  updated_at: timestamptz;
  /**
   * An array relationship
   */
  posts: GetThread_thread_by_pk_posts[];
}

export interface GetThread {
  /**
   * fetch data from the table: "thread" using primary key columns
   */
  thread_by_pk: GetThread_thread_by_pk | null;
}

export interface GetThreadVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddThread
// ====================================================

export interface AddThread_insert_thread_one {
  __typename: "thread";
  id: number;
}

export interface AddThread {
  /**
   * insert a single row into the table: "thread"
   */
  insert_thread_one: AddThread_insert_thread_one | null;
}

export interface AddThreadVariables {
  realmId: number;
  userId: uuid;
  topicId?: number | null;
  title: string;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateThread
// ====================================================

export interface UpdateThread_update_thread_by_pk {
  __typename: "thread";
  id: number;
}

export interface UpdateThread {
  /**
   * update single row of the table: "thread"
   */
  update_thread_by_pk: UpdateThread_update_thread_by_pk | null;
}

export interface UpdateThreadVariables {
  threadId: number;
  title: string;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user_by_pk_realm_ids {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
}

export interface GetUser_user_by_pk_realm_users_realm {
  __typename: "realm";
  id: number;
  name: string;
}

export interface GetUser_user_by_pk_realm_users {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  /**
   * An object relationship
   */
  realm: GetUser_user_by_pk_realm_users_realm | null;
  username: string | null;
  status: string | null;
  avatar_url: string | null;
  created_at: timestamptz | null;
}

export interface GetUser_user_by_pk {
  __typename: "user";
  id: uuid;
  university_id: string;
  email: string;
  role: string;
  created_at: timestamptz;
  /**
   * An array relationship
   */
  realm_ids: GetUser_user_by_pk_realm_ids[];
  /**
   * An array relationship
   */
  realm_users: GetUser_user_by_pk_realm_users[];
}

export interface GetUser {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: GetUser_user_by_pk | null;
}

export interface GetUserVariables {
  realmId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserRealms
// ====================================================

export interface GetUserRealms_user_by_pk_realm_users_realm {
  __typename: "realm";
  id: number;
  name: string;
}

export interface GetUserRealms_user_by_pk_realm_users {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  /**
   * An object relationship
   */
  realm: GetUserRealms_user_by_pk_realm_users_realm | null;
}

export interface GetUserRealms_user_by_pk {
  __typename: "user";
  id: uuid;
  /**
   * An array relationship
   */
  realm_users: GetUserRealms_user_by_pk_realm_users[];
}

export interface GetUserRealms {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: GetUserRealms_user_by_pk | null;
}

export interface GetUserRealmsVariables {
  id: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRealmUserDetails
// ====================================================

export interface GetRealmUserDetails_realm_user_union {
  __typename: "realm_user_union";
  realm_id: number | null;
  user_id: uuid | null;
  username: string | null;
  status: string | null;
  avatar_url: string | null;
}

export interface GetRealmUserDetails {
  /**
   * fetch data from the table: "realm_user_union"
   */
  realm_user_union: GetRealmUserDetails_realm_user_union[];
}

export interface GetRealmUserDetailsVariables {
  realmId: number;
  userId: uuid;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddOrUpdateUser
// ====================================================

export interface AddOrUpdateUser_insert_user_one {
  __typename: "user";
  id: uuid;
  university_id: string;
  email: string;
}

export interface AddOrUpdateUser {
  /**
   * insert a single row into the table: "user"
   */
  insert_user_one: AddOrUpdateUser_insert_user_one | null;
}

export interface AddOrUpdateUserVariables {
  universityId: string;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUsername
// ====================================================

export interface UpdateUsername_update_user_by_pk {
  __typename: "user";
  id: uuid;
  username: string;
}

export interface UpdateUsername {
  /**
   * update single row of the table: "user"
   */
  update_user_by_pk: UpdateUsername_update_user_by_pk | null;
}

export interface UpdateUsernameVariables {
  userId: uuid;
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRealmUsername
// ====================================================

export interface UpdateRealmUsername_insert_realm_user_one {
  __typename: "realm_user";
  user_id: uuid;
  realm_id: number;
  username: string;
}

export interface UpdateRealmUsername {
  /**
   * insert a single row into the table: "realm_user"
   */
  insert_realm_user_one: UpdateRealmUsername_insert_realm_user_one | null;
}

export interface UpdateRealmUsernameVariables {
  userId: uuid;
  realmId: number;
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserAvatar
// ====================================================

export interface UpdateUserAvatar_update_user_by_pk {
  __typename: "user";
  id: uuid;
  avatar_url: string | null;
}

export interface UpdateUserAvatar {
  /**
   * update single row of the table: "user"
   */
  update_user_by_pk: UpdateUserAvatar_update_user_by_pk | null;
}

export interface UpdateUserAvatarVariables {
  userId: uuid;
  avatarUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRealmUserAvatar
// ====================================================

export interface UpdateRealmUserAvatar_insert_realm_user_one {
  __typename: "realm_user";
  user_id: uuid;
  realm_id: number;
  avatar_url: string | null;
}

export interface UpdateRealmUserAvatar {
  /**
   * insert a single row into the table: "realm_user"
   */
  insert_realm_user_one: UpdateRealmUserAvatar_insert_realm_user_one | null;
}

export interface UpdateRealmUserAvatarVariables {
  userId: uuid;
  realmId: number;
  avatarUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserStatus
// ====================================================

export interface UpdateUserStatus_update_user_by_pk {
  __typename: "user";
  id: uuid;
  status: string | null;
}

export interface UpdateUserStatus {
  /**
   * update single row of the table: "user"
   */
  update_user_by_pk: UpdateUserStatus_update_user_by_pk | null;
}

export interface UpdateUserStatusVariables {
  userId: uuid;
  status: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRealmUserStatus
// ====================================================

export interface UpdateRealmUserStatus_update_realm_user_by_pk {
  __typename: "realm_user";
  user_id: uuid;
  realm_id: number;
  status: string | null;
}

export interface UpdateRealmUserStatus {
  /**
   * update single row of the table: "realm_user"
   */
  update_realm_user_by_pk: UpdateRealmUserStatus_update_realm_user_by_pk | null;
}

export interface UpdateRealmUserStatusVariables {
  userId: uuid;
  realmId: number;
  status: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRealmUserByUsername
// ====================================================

export interface GetRealmUserByUsername_realm_user_union {
  __typename: "realm_user_union";
  username: string | null;
}

export interface GetRealmUserByUsername {
  /**
   * fetch data from the table: "realm_user_union"
   */
  realm_user_union: GetRealmUserByUsername_realm_user_union[];
}

export interface GetRealmUserByUsernameVariables {
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "post"
 */
export enum post_constraint {
  post_pkey = "post_pkey",
}

/**
 * unique or primary key constraints on table "post_reaction"
 */
export enum post_reaction_constraint {
  post_reaction_pkey = "post_reaction_pkey",
}

/**
 * update columns of table "post_reaction"
 */
export enum post_reaction_update_column {
  created_at = "created_at",
  name = "name",
  post_id = "post_id",
  user_id = "user_id",
}

/**
 * update columns of table "post"
 */
export enum post_update_column {
  content = "content",
  created_at = "created_at",
  id = "id",
  thread_id = "thread_id",
  updated_at = "updated_at",
  user_id = "user_id",
}

export enum reaction_emoji_enum {
  confused_face = "confused_face",
  eyes = "eyes",
  grinning_face_with_smiling_eyes = "grinning_face_with_smiling_eyes",
  party_popper = "party_popper",
  red_heart = "red_heart",
  rocket = "rocket",
  thumbs_down = "thumbs_down",
  thumbs_up = "thumbs_up",
}

/**
 * unique or primary key constraints on table "realm"
 */
export enum realm_constraint {
  realm_name_key = "realm_name_key",
  realm_pkey = "realm_pkey",
}

/**
 * update columns of table "realm"
 */
export enum realm_update_column {
  admin_id = "admin_id",
  created_at = "created_at",
  description = "description",
  id = "id",
  invitation_code = "invitation_code",
  name = "name",
  private = "private",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "thread"
 */
export enum thread_constraint {
  thread_pkey = "thread_pkey",
}

/**
 * unique or primary key constraints on table "thread_reaction"
 */
export enum thread_reaction_constraint {
  thread_reaction_pkey = "thread_reaction_pkey",
}

/**
 * update columns of table "thread_reaction"
 */
export enum thread_reaction_update_column {
  created_at = "created_at",
  name = "name",
  thread_id = "thread_id",
  user_id = "user_id",
}

/**
 * update columns of table "thread"
 */
export enum thread_update_column {
  content = "content",
  created_at = "created_at",
  id = "id",
  realm_id = "realm_id",
  title = "title",
  topic_id = "topic_id",
  updated_at = "updated_at",
  user_id = "user_id",
}

/**
 * unique or primary key constraints on table "topic"
 */
export enum topic_constraint {
  topic_id_key = "topic_id_key",
  topic_pkey = "topic_pkey",
}

/**
 * update columns of table "topic"
 */
export enum topic_update_column {
  created_at = "created_at",
  id = "id",
  name = "name",
  realm_id = "realm_id",
  updated_at = "updated_at",
}

/**
 * Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _iregex?: string | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _niregex?: string | null;
  _nlike?: string | null;
  _nregex?: string | null;
  _nsimilar?: string | null;
  _regex?: string | null;
  _similar?: string | null;
}

/**
 * Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'.
 */
export interface post_bool_exp {
  _and?: post_bool_exp[] | null;
  _not?: post_bool_exp | null;
  _or?: post_bool_exp[] | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  thread?: thread_bool_exp | null;
  thread_id?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "post"
 */
export interface post_insert_input {
  content?: string | null;
  created_at?: timestamptz | null;
  id?: number | null;
  thread?: thread_obj_rel_insert_input | null;
  thread_id?: number | null;
  updated_at?: timestamptz | null;
  user_id?: uuid | null;
}

/**
 * input type for inserting object relation for remote table "post"
 */
export interface post_obj_rel_insert_input {
  data: post_insert_input;
  on_conflict?: post_on_conflict | null;
}

/**
 * on conflict condition type for table "post"
 */
export interface post_on_conflict {
  constraint: post_constraint;
  update_columns: post_update_column[];
  where?: post_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "post_reaction"
 */
export interface post_reaction_arr_rel_insert_input {
  data: post_reaction_insert_input[];
  on_conflict?: post_reaction_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "post_reaction". All fields are combined with a logical 'AND'.
 */
export interface post_reaction_bool_exp {
  _and?: post_reaction_bool_exp[] | null;
  _not?: post_reaction_bool_exp | null;
  _or?: post_reaction_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  name?: reaction_emoji_enum_comparison_exp | null;
  post?: post_bool_exp | null;
  post_id?: Int_comparison_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "post_reaction"
 */
export interface post_reaction_insert_input {
  created_at?: timestamptz | null;
  name?: reaction_emoji_enum | null;
  post?: post_obj_rel_insert_input | null;
  post_id?: number | null;
  user_id?: uuid | null;
}

/**
 * on conflict condition type for table "post_reaction"
 */
export interface post_reaction_on_conflict {
  constraint: post_reaction_constraint;
  update_columns: post_reaction_update_column[];
  where?: post_reaction_bool_exp | null;
}

/**
 * Boolean expression to compare columns of type "reaction_emoji_enum". All fields are combined with logical 'AND'.
 */
export interface reaction_emoji_enum_comparison_exp {
  _eq?: reaction_emoji_enum | null;
  _in?: reaction_emoji_enum[] | null;
  _is_null?: boolean | null;
  _neq?: reaction_emoji_enum | null;
  _nin?: reaction_emoji_enum[] | null;
}

/**
 * Boolean expression to filter rows from the table "realm". All fields are combined with a logical 'AND'.
 */
export interface realm_bool_exp {
  _and?: realm_bool_exp[] | null;
  _not?: realm_bool_exp | null;
  _or?: realm_bool_exp[] | null;
  admin_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  invitation_code?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  private?: Boolean_comparison_exp | null;
  threads?: thread_bool_exp | null;
  topics?: topic_bool_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "realm"
 */
export interface realm_insert_input {
  admin_id?: uuid | null;
  created_at?: timestamptz | null;
  description?: string | null;
  id?: number | null;
  invitation_code?: string | null;
  name?: string | null;
  private?: boolean | null;
  threads?: thread_arr_rel_insert_input | null;
  topics?: topic_arr_rel_insert_input | null;
  updated_at?: timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "realm"
 */
export interface realm_obj_rel_insert_input {
  data: realm_insert_input;
  on_conflict?: realm_on_conflict | null;
}

/**
 * on conflict condition type for table "realm"
 */
export interface realm_on_conflict {
  constraint: realm_constraint;
  update_columns: realm_update_column[];
  where?: realm_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "realm_post"
 */
export interface realm_post_arr_rel_insert_input {
  data: realm_post_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "realm_post". All fields are combined with a logical 'AND'.
 */
export interface realm_post_bool_exp {
  _and?: realm_post_bool_exp[] | null;
  _not?: realm_post_bool_exp | null;
  _or?: realm_post_bool_exp[] | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  reactions?: post_reaction_bool_exp | null;
  realm_id?: Int_comparison_exp | null;
  thread?: thread_bool_exp | null;
  thread_id?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  user?: realm_user_union_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "realm_post"
 */
export interface realm_post_insert_input {
  content?: string | null;
  created_at?: timestamptz | null;
  id?: number | null;
  reactions?: post_reaction_arr_rel_insert_input | null;
  realm_id?: number | null;
  thread?: thread_obj_rel_insert_input | null;
  thread_id?: number | null;
  updated_at?: timestamptz | null;
  user?: realm_user_union_obj_rel_insert_input | null;
  user_id?: uuid | null;
}

/**
 * Boolean expression to filter rows from the table "realm_user_union". All fields are combined with a logical 'AND'.
 */
export interface realm_user_union_bool_exp {
  _and?: realm_user_union_bool_exp[] | null;
  _not?: realm_user_union_bool_exp | null;
  _or?: realm_user_union_bool_exp[] | null;
  avatar_url?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  realm?: realm_bool_exp | null;
  realm_id?: Int_comparison_exp | null;
  status?: String_comparison_exp | null;
  user_id?: uuid_comparison_exp | null;
  username?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "realm_user_union"
 */
export interface realm_user_union_insert_input {
  avatar_url?: string | null;
  created_at?: timestamptz | null;
  realm?: realm_obj_rel_insert_input | null;
  realm_id?: number | null;
  status?: string | null;
  user_id?: uuid | null;
  username?: string | null;
}

/**
 * input type for inserting object relation for remote table "realm_user_union"
 */
export interface realm_user_union_obj_rel_insert_input {
  data: realm_user_union_insert_input;
}

/**
 * input type for inserting array relation for remote table "thread"
 */
export interface thread_arr_rel_insert_input {
  data: thread_insert_input[];
  on_conflict?: thread_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "thread". All fields are combined with a logical 'AND'.
 */
export interface thread_bool_exp {
  _and?: thread_bool_exp[] | null;
  _not?: thread_bool_exp | null;
  _or?: thread_bool_exp[] | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  posts?: realm_post_bool_exp | null;
  reactions?: thread_reaction_bool_exp | null;
  realm?: realm_bool_exp | null;
  realm_id?: Int_comparison_exp | null;
  title?: String_comparison_exp | null;
  topic?: topic_bool_exp | null;
  topic_id?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  user?: realm_user_union_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "thread"
 */
export interface thread_insert_input {
  content?: string | null;
  created_at?: timestamptz | null;
  id?: number | null;
  posts?: realm_post_arr_rel_insert_input | null;
  reactions?: thread_reaction_arr_rel_insert_input | null;
  realm?: realm_obj_rel_insert_input | null;
  realm_id?: number | null;
  title?: string | null;
  topic?: topic_obj_rel_insert_input | null;
  topic_id?: number | null;
  updated_at?: timestamptz | null;
  user?: realm_user_union_obj_rel_insert_input | null;
  user_id?: uuid | null;
}

/**
 * input type for inserting object relation for remote table "thread"
 */
export interface thread_obj_rel_insert_input {
  data: thread_insert_input;
  on_conflict?: thread_on_conflict | null;
}

/**
 * on conflict condition type for table "thread"
 */
export interface thread_on_conflict {
  constraint: thread_constraint;
  update_columns: thread_update_column[];
  where?: thread_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "thread_reaction"
 */
export interface thread_reaction_arr_rel_insert_input {
  data: thread_reaction_insert_input[];
  on_conflict?: thread_reaction_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "thread_reaction". All fields are combined with a logical 'AND'.
 */
export interface thread_reaction_bool_exp {
  _and?: thread_reaction_bool_exp[] | null;
  _not?: thread_reaction_bool_exp | null;
  _or?: thread_reaction_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  name?: reaction_emoji_enum_comparison_exp | null;
  thread?: thread_bool_exp | null;
  thread_id?: Int_comparison_exp | null;
  user_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "thread_reaction"
 */
export interface thread_reaction_insert_input {
  created_at?: timestamptz | null;
  name?: reaction_emoji_enum | null;
  thread?: thread_obj_rel_insert_input | null;
  thread_id?: number | null;
  user_id?: uuid | null;
}

/**
 * on conflict condition type for table "thread_reaction"
 */
export interface thread_reaction_on_conflict {
  constraint: thread_reaction_constraint;
  update_columns: thread_reaction_update_column[];
  where?: thread_reaction_bool_exp | null;
}

/**
 * Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: timestamptz | null;
  _gt?: timestamptz | null;
  _gte?: timestamptz | null;
  _in?: timestamptz[] | null;
  _is_null?: boolean | null;
  _lt?: timestamptz | null;
  _lte?: timestamptz | null;
  _neq?: timestamptz | null;
  _nin?: timestamptz[] | null;
}

/**
 * input type for inserting array relation for remote table "topic"
 */
export interface topic_arr_rel_insert_input {
  data: topic_insert_input[];
  on_conflict?: topic_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "topic". All fields are combined with a logical 'AND'.
 */
export interface topic_bool_exp {
  _and?: topic_bool_exp[] | null;
  _not?: topic_bool_exp | null;
  _or?: topic_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  realm?: realm_bool_exp | null;
  realm_id?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "topic"
 */
export interface topic_insert_input {
  created_at?: timestamptz | null;
  id?: number | null;
  name?: string | null;
  realm?: realm_obj_rel_insert_input | null;
  realm_id?: number | null;
  updated_at?: timestamptz | null;
}

/**
 * input type for inserting object relation for remote table "topic"
 */
export interface topic_obj_rel_insert_input {
  data: topic_insert_input;
  on_conflict?: topic_on_conflict | null;
}

/**
 * on conflict condition type for table "topic"
 */
export interface topic_on_conflict {
  constraint: topic_constraint;
  update_columns: topic_update_column[];
  where?: topic_bool_exp | null;
}

/**
 * Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: uuid | null;
  _gt?: uuid | null;
  _gte?: uuid | null;
  _in?: uuid[] | null;
  _is_null?: boolean | null;
  _lt?: uuid | null;
  _lte?: uuid | null;
  _neq?: uuid | null;
  _nin?: uuid[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
