/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseReviews
// ====================================================

export interface GetCourseReviews_my_course_review_user {
  __typename: "user_public";
  username: string | null;
  avatar_url: string | null;
}

export interface GetCourseReviews_my_course_review {
  __typename: "course_review_public";
  /**
   * An object relationship
   */
  user: GetCourseReviews_my_course_review_user | null;
  course_id: string | null;
  rating: number | null;
  content: string | null;
  created_at: timestamptz | null;
  updated_at: timestamptz | null;
}

export interface GetCourseReviews_course_review_public_user {
  __typename: "user_public";
  username: string | null;
  avatar_url: string | null;
}

export interface GetCourseReviews_course_review_public {
  __typename: "course_review_public";
  /**
   * An object relationship
   */
  user: GetCourseReviews_course_review_public_user | null;
  course_id: string | null;
  rating: number | null;
  content: string | null;
  created_at: timestamptz | null;
  updated_at: timestamptz | null;
}

export interface GetCourseReviews {
  /**
   * fetch data from the table: "course_review_public"
   */
  my_course_review: GetCourseReviews_my_course_review[];
  /**
   * fetch data from the table: "course_review_public"
   */
  course_review_public: GetCourseReviews_course_review_public[];
}

export interface GetCourseReviewsVariables {
  courseId: string;
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCourseReview
// ====================================================

export interface AddCourseReview_insert_course_review_one_user {
  __typename: "user";
  username: string;
}

export interface AddCourseReview_insert_course_review_one {
  __typename: "course_review";
  /**
   * An object relationship
   */
  user: AddCourseReview_insert_course_review_one_user;
  course_id: string;
}

export interface AddCourseReview {
  /**
   * insert a single row into the table: "course_review"
   */
  insert_course_review_one: AddCourseReview_insert_course_review_one | null;
}

export interface AddCourseReviewVariables {
  userId: string;
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

export interface UpdateCourseReview_update_course_review_by_pk_user {
  __typename: "user";
  username: string;
}

export interface UpdateCourseReview_update_course_review_by_pk {
  __typename: "course_review";
  /**
   * An object relationship
   */
  user: UpdateCourseReview_update_course_review_by_pk_user;
  course_id: string;
}

export interface UpdateCourseReview {
  /**
   * update single row of the table: "course_review"
   */
  update_course_review_by_pk: UpdateCourseReview_update_course_review_by_pk | null;
}

export interface UpdateCourseReviewVariables {
  userId: string;
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

export interface DeleteCourseReview_delete_course_review_by_pk_user {
  __typename: "user";
  username: string;
}

export interface DeleteCourseReview_delete_course_review_by_pk {
  __typename: "course_review";
  /**
   * An object relationship
   */
  user: DeleteCourseReview_delete_course_review_by_pk_user;
  course_id: string;
}

export interface DeleteCourseReview {
  /**
   * delete single row from the table: "course_review"
   */
  delete_course_review_by_pk: DeleteCourseReview_delete_course_review_by_pk | null;
}

export interface DeleteCourseReviewVariables {
  userId: string;
  courseId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseById
// ====================================================

export interface GetCourseById_course_by_pk_teacher {
  __typename: "teacher";
  id: string;
  name: string;
}

export interface GetCourseById_course_by_pk_course_reviews_public_aggregate_aggregate_avg {
  __typename: "course_review_public_avg_fields";
  rating: number | null;
}

export interface GetCourseById_course_by_pk_course_reviews_public_aggregate_aggregate {
  __typename: "course_review_public_aggregate_fields";
  count: number;
  avg: GetCourseById_course_by_pk_course_reviews_public_aggregate_aggregate_avg | null;
}

export interface GetCourseById_course_by_pk_course_reviews_public_aggregate {
  __typename: "course_review_public_aggregate";
  aggregate: GetCourseById_course_by_pk_course_reviews_public_aggregate_aggregate | null;
}

export interface GetCourseById_course_by_pk {
  __typename: "course";
  id: string;
  name: string;
  /**
   * An object relationship
   */
  teacher: GetCourseById_course_by_pk_teacher;
  time_location: string;
  semester_id: string;
  number: string;
  index: number;
  /**
   * An aggregate relationship
   */
  course_reviews_public_aggregate: GetCourseById_course_by_pk_course_reviews_public_aggregate;
}

export interface GetCourseById {
  /**
   * fetch data from the table: "course" using primary key columns
   */
  course_by_pk: GetCourseById_course_by_pk | null;
}

export interface GetCourseByIdVariables {
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
// GraphQL query operation: GetCourseCountBySemester
// ====================================================

export interface GetCourseCountBySemester_course_aggregate_aggregate {
  __typename: "course_aggregate_fields";
  count: number;
}

export interface GetCourseCountBySemester_course_aggregate {
  __typename: "course_aggregate";
  aggregate: GetCourseCountBySemester_course_aggregate_aggregate | null;
}

export interface GetCourseCountBySemester {
  /**
   * fetch aggregated fields from the table: "course"
   */
  course_aggregate: GetCourseCountBySemester_course_aggregate;
}

export interface GetCourseCountBySemesterVariables {
  semesterId: string;
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
  userId: string;
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

export interface GetThreadReactions_thread_public_my_reactions {
  __typename: "thread_reaction";
  name: reaction_emoji_enum;
}

export interface GetThreadReactions_thread_public_confused_face_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_confused_face_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_confused_face_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_eyes_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_eyes_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_grinning_face_with_smiling_eyes_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_grinning_face_with_smiling_eyes_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_grinning_face_with_smiling_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_party_popper_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_party_popper_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_party_popper_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_red_heart_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_red_heart_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_red_heart_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_rocket_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_rocket_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_rocket_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_thumbs_down_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_thumbs_down_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_thumbs_down_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_thumbs_up_reactions_aggregate {
  __typename: "thread_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_thumbs_up_reactions {
  __typename: "thread_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_thumbs_up_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_my_reactions {
  __typename: "post_reaction";
  name: reaction_emoji_enum;
}

export interface GetThreadReactions_thread_public_posts_confused_face_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_confused_face_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_confused_face_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_eyes_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_eyes_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_grinning_face_with_smiling_eyes_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_grinning_face_with_smiling_eyes_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_grinning_face_with_smiling_eyes_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_party_popper_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_party_popper_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_party_popper_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_red_heart_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_red_heart_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_red_heart_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_rocket_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_rocket_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_rocket_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_thumbs_down_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_thumbs_down_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_thumbs_down_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts_thumbs_up_reactions_aggregate {
  __typename: "post_reaction_aggregate_fields";
  count: number;
}

export interface GetThreadReactions_thread_public_posts_thumbs_up_reactions {
  __typename: "post_reaction_aggregate";
  aggregate: GetThreadReactions_thread_public_posts_thumbs_up_reactions_aggregate | null;
}

export interface GetThreadReactions_thread_public_posts {
  __typename: "post_public";
  id: number | null;
  /**
   * An array relationship
   */
  my_reactions: GetThreadReactions_thread_public_posts_my_reactions[];
  /**
   * An aggregate relationship
   */
  confused_face_reactions: GetThreadReactions_thread_public_posts_confused_face_reactions;
  /**
   * An aggregate relationship
   */
  eyes_reactions: GetThreadReactions_thread_public_posts_eyes_reactions;
  /**
   * An aggregate relationship
   */
  grinning_face_with_smiling_eyes_reactions: GetThreadReactions_thread_public_posts_grinning_face_with_smiling_eyes_reactions;
  /**
   * An aggregate relationship
   */
  party_popper_reactions: GetThreadReactions_thread_public_posts_party_popper_reactions;
  /**
   * An aggregate relationship
   */
  red_heart_reactions: GetThreadReactions_thread_public_posts_red_heart_reactions;
  /**
   * An aggregate relationship
   */
  rocket_reactions: GetThreadReactions_thread_public_posts_rocket_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_down_reactions: GetThreadReactions_thread_public_posts_thumbs_down_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_up_reactions: GetThreadReactions_thread_public_posts_thumbs_up_reactions;
}

export interface GetThreadReactions_thread_public {
  __typename: "thread_public";
  id: number | null;
  /**
   * An array relationship
   */
  my_reactions: GetThreadReactions_thread_public_my_reactions[];
  /**
   * An aggregate relationship
   */
  confused_face_reactions: GetThreadReactions_thread_public_confused_face_reactions;
  /**
   * An aggregate relationship
   */
  eyes_reactions: GetThreadReactions_thread_public_eyes_reactions;
  /**
   * An aggregate relationship
   */
  grinning_face_with_smiling_eyes_reactions: GetThreadReactions_thread_public_grinning_face_with_smiling_eyes_reactions;
  /**
   * An aggregate relationship
   */
  party_popper_reactions: GetThreadReactions_thread_public_party_popper_reactions;
  /**
   * An aggregate relationship
   */
  red_heart_reactions: GetThreadReactions_thread_public_red_heart_reactions;
  /**
   * An aggregate relationship
   */
  rocket_reactions: GetThreadReactions_thread_public_rocket_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_down_reactions: GetThreadReactions_thread_public_thumbs_down_reactions;
  /**
   * An aggregate relationship
   */
  thumbs_up_reactions: GetThreadReactions_thread_public_thumbs_up_reactions;
  /**
   * An array relationship
   */
  posts: GetThreadReactions_thread_public_posts[];
}

export interface GetThreadReactions {
  /**
   * fetch data from the table: "thread_public"
   */
  thread_public: GetThreadReactions_thread_public[];
}

export interface GetThreadReactionsVariables {
  threadId: number;
  userId: string;
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
  user_id: string;
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
  userId: string;
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
  user_id: string;
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
  userId: string;
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
  user_id: string;
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
  userId: string;
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
  user_id: string;
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
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRealmById
// ====================================================

export interface GetRealmById_realm_by_pk_topics {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetRealmById_realm_by_pk_threads_public_topic {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetRealmById_realm_by_pk_threads_public_user {
  __typename: "realm_user_public";
  username: string | null;
  avatar_url: string | null;
}

export interface GetRealmById_realm_by_pk_threads_public_posts_user {
  __typename: "realm_user_public";
  username: string | null;
  avatar_url: string | null;
}

export interface GetRealmById_realm_by_pk_threads_public_posts {
  __typename: "post_public";
  id: number | null;
  /**
   * An object relationship
   */
  user: GetRealmById_realm_by_pk_threads_public_posts_user | null;
}

export interface GetRealmById_realm_by_pk_threads_public {
  __typename: "thread_public";
  id: number | null;
  realm_id: number | null;
  /**
   * An object relationship
   */
  topic: GetRealmById_realm_by_pk_threads_public_topic | null;
  /**
   * An object relationship
   */
  user: GetRealmById_realm_by_pk_threads_public_user | null;
  title: string | null;
  updated_at: timestamptz | null;
  /**
   * An array relationship
   */
  posts: GetRealmById_realm_by_pk_threads_public_posts[];
}

export interface GetRealmById_realm_by_pk {
  __typename: "realm";
  id: number;
  name: string;
  description: string;
  private: boolean;
  /**
   * An array relationship
   */
  topics: GetRealmById_realm_by_pk_topics[];
  /**
   * An array relationship
   */
  threads_public: GetRealmById_realm_by_pk_threads_public[];
}

export interface GetRealmById {
  /**
   * fetch data from the table: "realm" using primary key columns
   */
  realm_by_pk: GetRealmById_realm_by_pk | null;
}

export interface GetRealmByIdVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThreadById
// ====================================================

export interface GetThreadById_thread_public_realm {
  __typename: "realm";
  id: number;
  name: string;
}

export interface GetThreadById_thread_public_topic {
  __typename: "topic";
  id: number;
  name: string;
}

export interface GetThreadById_thread_public_user {
  __typename: "realm_user_public";
  username: string | null;
  status: string | null;
  avatar_url: string | null;
}

export interface GetThreadById_thread_public_posts_user {
  __typename: "realm_user_public";
  username: string | null;
  status: string | null;
  avatar_url: string | null;
}

export interface GetThreadById_thread_public_posts {
  __typename: "post_public";
  id: number | null;
  /**
   * An object relationship
   */
  user: GetThreadById_thread_public_posts_user | null;
  content: string | null;
  created_at: timestamptz | null;
  updated_at: timestamptz | null;
}

export interface GetThreadById_thread_public {
  __typename: "thread_public";
  id: number | null;
  /**
   * An object relationship
   */
  realm: GetThreadById_thread_public_realm | null;
  /**
   * An object relationship
   */
  topic: GetThreadById_thread_public_topic | null;
  title: string | null;
  content: string | null;
  /**
   * An object relationship
   */
  user: GetThreadById_thread_public_user | null;
  created_at: timestamptz | null;
  updated_at: timestamptz | null;
  /**
   * An array relationship
   */
  posts: GetThreadById_thread_public_posts[];
}

export interface GetThreadById {
  /**
   * fetch data from the table: "thread_public"
   */
  thread_public: GetThreadById_thread_public[];
}

export interface GetThreadByIdVariables {
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
  userId: string;
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
}

export interface GetUser_user_by_pk_realm_users_realm {
  __typename: "realm";
  id: number;
  name: string;
}

export interface GetUser_user_by_pk_realm_users {
  __typename: "realm_user_union";
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
  id: string;
  email: string;
  role: string;
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
  userId: string;
  realmId: number;
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
  /**
   * An object relationship
   */
  realm: GetUserRealms_user_by_pk_realm_users_realm | null;
}

export interface GetUserRealms_user_by_pk {
  __typename: "user";
  id: string;
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
  id: string;
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
  id: string;
  email: string;
}

export interface AddOrUpdateUser {
  /**
   * insert a single row into the table: "user"
   */
  insert_user_one: AddOrUpdateUser_insert_user_one | null;
}

export interface AddOrUpdateUserVariables {
  id: string;
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
  id: string;
  username: string;
}

export interface UpdateUsername {
  /**
   * update single row of the table: "user"
   */
  update_user_by_pk: UpdateUsername_update_user_by_pk | null;
}

export interface UpdateUsernameVariables {
  id: string;
  username: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRealmUsername
// ====================================================

export interface UpdateRealmUsername_update_realm_user_by_pk {
  __typename: "realm_user";
  user_id: string;
  realm_id: number;
  username: string;
}

export interface UpdateRealmUsername {
  /**
   * update single row of the table: "realm_user"
   */
  update_realm_user_by_pk: UpdateRealmUsername_update_realm_user_by_pk | null;
}

export interface UpdateRealmUsernameVariables {
  userId: string;
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
  id: string;
  avatar_url: string | null;
}

export interface UpdateUserAvatar {
  /**
   * update single row of the table: "user"
   */
  update_user_by_pk: UpdateUserAvatar_update_user_by_pk | null;
}

export interface UpdateUserAvatarVariables {
  id: string;
  avatarUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRealmUserAvatar
// ====================================================

export interface UpdateRealmUserAvatar_update_realm_user_by_pk {
  __typename: "realm_user";
  user_id: string;
  realm_id: number;
  avatar_url: string | null;
}

export interface UpdateRealmUserAvatar {
  /**
   * update single row of the table: "realm_user"
   */
  update_realm_user_by_pk: UpdateRealmUserAvatar_update_realm_user_by_pk | null;
}

export interface UpdateRealmUserAvatarVariables {
  userId: string;
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
  id: string;
  status: string | null;
}

export interface UpdateUserStatus {
  /**
   * update single row of the table: "user"
   */
  update_user_by_pk: UpdateUserStatus_update_user_by_pk | null;
}

export interface UpdateUserStatusVariables {
  id: string;
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
  user_id: string;
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
  userId: string;
  realmId: number;
  status: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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

//==============================================================
// END Enums and Input Objects
//==============================================================
