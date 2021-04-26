import { gql } from "@apollo/client";

export const GET_COURSE_REVIEWS = gql`
  query GetCourseReviews($courseId: String!, $userId: uuid!) {
    my_course_review: course_review_by_pk(
      course_id: $courseId
      user_id: $userId
    ) {
      id
      user {
        id
        username
        avatar_url
      }
      rating
      content
      created_at
      updated_at
    }
    course_review(
      order_by: { updated_at: desc }
      where: { course_id: { _eq: $courseId }, user_id: { _neq: $userId } }
    ) {
      id
      user {
        id
        username
        avatar_url
      }
      rating
      content
      created_at
      updated_at
    }
  }
`;

export const ADD_COURSE_REVIEW = gql`
  mutation AddCourseReview(
    $userId: uuid!
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
      id
    }
  }
`;

export const UPDATE_COURSE_REVIEW = gql`
  mutation UpdateCourseReview(
    $userId: uuid!
    $courseId: String!
    $rating: Float!
    $content: String!
  ) {
    update_course_review_by_pk(
      pk_columns: { course_id: $courseId, user_id: $userId }
      _set: { rating: $rating, content: $content }
    ) {
      id
    }
  }
`;

export const DELETE_COURSE_REVIEW = gql`
  mutation DeleteCourseReview($userId: uuid!, $courseId: String!) {
    delete_course_review_by_pk(course_id: $courseId, user_id: $userId) {
      id
    }
  }
`;
