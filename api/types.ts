/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseReviews
// ====================================================

export interface GetCourseReviews_my_course_review_user {
  __typename: "user_public";
  avatar_url: string | null;
}

export interface GetCourseReviews_my_course_review {
  __typename: "course_review_public";
  /**
   * An object relationship
   */
  user: GetCourseReviews_my_course_review_user | null;
  course_id: string | null;
  username: string | null;
  rating: number | null;
  content: string | null;
  created_at: timestamptz | null;
  updated_at: timestamptz | null;
}

export interface GetCourseReviews_course_review_public_user {
  __typename: "user_public";
  avatar_url: string | null;
}

export interface GetCourseReviews_course_review_public {
  __typename: "course_review_public";
  /**
   * An object relationship
   */
  user: GetCourseReviews_course_review_public_user | null;
  course_id: string | null;
  username: string | null;
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
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user_by_pk {
  __typename: "user";
  id: string;
  username: string;
  email: string;
  role: string;
  avatar_url: string | null;
}

export interface GetUser {
  /**
   * fetch data from the table: "user" using primary key columns
   */
  user_by_pk: GetUser_user_by_pk | null;
}

export interface GetUserVariables {
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
  username: string;
  email: string;
  role: string;
  avatar_url: string | null;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================