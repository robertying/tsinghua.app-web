import { gql } from "@apollo/client";

export const GET_COURSE_BY_ID = gql`
  query GetCourseById($id: String!) {
    course_by_pk(id: $id) {
      id
      name
      teacher {
        id
        name
      }
      time_location
      semester_id
      number
      index
      course_reviews_public_aggregate {
        aggregate {
          count
          avg {
            rating
          }
        }
      }
    }
  }
`;

export const GET_COURSES = gql`
  query GetCourses($query: String!) {
    course(
      where: {
        _or: [
          { name: { _ilike: $query } }
          { teacher: { name: { _ilike: $query } } }
        ]
      }
      order_by: { semester_id: desc, updated_at: desc }
    ) {
      id
      name
      teacher {
        id
        name
      }
      semester_id
    }
  }
`;

export const GET_COURSE_COUNT_BY_SEMESTER = gql`
  query GetCourseCountBySemester($semesterId: String!) {
    course_aggregate(where: { semester_id: { _eq: $semesterId } }) {
      aggregate {
        count
      }
    }
  }
`;
