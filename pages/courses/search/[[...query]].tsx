import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Container,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CourseHome } from "pages/courses";
import { getSemesterTextFromId } from "lib/format";
import { addApolloState, initializeApollo } from "lib/client";
import { GET_COURSES } from "api/course";
import { GetCourses, GetCoursesVariables } from "api/types";

const CourseSearch: React.FC<React.PropsWithChildren<unknown>> = () => {
  const router = useRouter();
  const query = router.query.query?.[0] as string | undefined;

  const { data: courseData } = useQuery<GetCourses, GetCoursesVariables>(
    GET_COURSES,
    {
      variables: {
        query: `%${query}%`,
      },
      skip: !query,
    }
  );

  return <>
    <NextSeo
      title={query ? `${query} - 搜索 - courseX` : "搜索 - courseX"}
      description="星期四大学课程信息共享计划"
    />
    <CourseHome>
      {query && (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
            px: 0,
          }}
          maxWidth="sm"
        >
          {router.isFallback ? (
            <CircularProgress size="1.5rem" />
          ) : courseData?.course.length === 0 ? (
            <Typography variant="body1">未找到相关课程</Typography>
          ) : (
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "40%" }}>课程</TableCell>
                  <TableCell sx={{ width: "30%" }}>教师</TableCell>
                  <TableCell sx={{ width: "30%" }} align="right">
                    学期
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courseData?.course.map((course) => (
                  <TableRow
                    sx={{
                      "& > td": {
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      },
                    }}
                    key={course.id}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Link href={`/courses/${course.id}`}>
                          {course.name}
                        </Link>
                        <Rating
                          sx={{ mt: 0.5 }}
                          value={
                            course.course_reviews_aggregate.aggregate?.avg
                              ?.rating
                          }
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                      </Box>
                    </TableCell>
                    <TableCell>{course.teacher.name}</TableCell>
                    <TableCell align="right">
                      {getSemesterTextFromId(course.semester_id, true)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Container>
      )}
    </CourseHome>
  </>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  if (params?.query?.[0]) {
    await client.query<GetCourses, GetCoursesVariables>({
      query: GET_COURSES,
      variables: {
        query: `%${params?.query?.[0] as string}%`,
      },
    });
  }

  return addApolloState(client, {
    props: {},
    revalidate: 1,
  });
};

export default CourseSearch;
