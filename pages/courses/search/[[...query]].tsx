import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { CourseXHome } from "pages/courses";
import { useToast } from "components/Snackbar";
import { getSemesterTextFromId } from "lib/format";
import { addApolloState, initializeApollo } from "lib/client";
import { GET_COURSES } from "api/course";
import { GetCourses, GetCoursesVariables } from "api/types";

const CourseXSearch: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const query = router.query.query?.[0] as string;

  const { data: courseData, error: courseError } = useQuery<
    GetCourses,
    GetCoursesVariables
  >(GET_COURSES, {
    variables: {
      query: `%${query}%`,
    },
    skip: !query,
  });

  useEffect(() => {
    if (courseError) {
      toast("error", "课程加载失败");
    }
  }, [courseError, toast]);

  return (
    <>
      <NextSeo
        title={query ? `${query} - 搜索 - courseX` : "搜索 - courseX"}
        description="星期四大学课程信息共享计划"
      />
      <CourseXHome>
        {query && (
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 8,
              px: 0,
            }}
            maxWidth="sm"
          >
            {router.isFallback ? (
              <CircularProgress size="2rem" />
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
                        <Link href={`/courses/${course.id}`}>
                          <a>{course.name}</a>
                        </Link>
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
      </CourseXHome>
    </>
  );
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

export default CourseXSearch;
