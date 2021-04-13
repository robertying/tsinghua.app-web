import { gql } from "@apollo/client";

export const GET_COURSE_REVIEWS = gql`
  query GetCourseReviews($courseId: String!, $username: String!) {
    my_course_review: course_review_public(
      where: { course_id: { _eq: $courseId }, username: { _eq: $username } }
    ) {
      user {
        username
        avatar_url
      }
      course_id
      rating
      content
      created_at
      updated_at
    }
    course_review_public(
      order_by: { updated_at: desc }
      where: { course_id: { _eq: $courseId }, username: { _neq: $username } }
    ) {
      user {
        username
        avatar_url
      }
      course_id
      rating
      content
      created_at
      updated_at
    }
  }
`;

export const ADD_COURSE_REVIEW = gql`
  mutation AddCourseReview(
    $userId: String!
    $courseId: String!
    $rating: Float!
    $content: String!
  ) {
    insert_course_review_one(
      object: {
        user_id: $userId
        course_id: $courseId
        rating: $rating
        content: $content
      }
    ) {
      user {
        username
      }
      course_id
    }
  }
`;

export const UPDATE_COURSE_REVIEW = gql`
  mutation UpdateCourseReview(
    $userId: String!
    $courseId: String!
    $rating: Float!
    $content: String!
  ) {
    update_course_review_by_pk(
      pk_columns: { course_id: $courseId, user_id: $userId }
      _set: { rating: $rating, content: $content }
    ) {
      user {
        username
      }
      course_id
    }
  }
`;

export const DELETE_COURSE_REVIEW = gql`
  mutation DeleteCourseReview($userId: String!, $courseId: String!) {
    delete_course_review_by_pk(course_id: $courseId, user_id: $userId) {
      user {
        username
      }
      course_id
    }
  }
`;
