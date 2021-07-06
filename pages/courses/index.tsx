import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { initializeApollo } from "lib/client";
import { getSemesterTextFromId } from "lib/format";
import { GetCourseCount, GetCourseCountVariables } from "api/types";
import { GET_COURSE_COUNT } from "api/course";

const CURRENT_SEMESTER_ID = "2021-2022-1";

interface CourseHomeProps {
  courseCount?: number | null;
}

export const CourseHome: React.FC<CourseHomeProps> = ({
  children,
  courseCount,
}) => {
  const router = useRouter();

  const [query, setQuery] = useState(router.query.query ?? "");

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    router.push(`/courses/search/${query}`);
  };

  useEffect(() => {
    if (router.query.query) {
      setQuery(router.query.query as string);
    }
  }, [router.query.query]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        minHeight: router.query.query ? "unset" : "100vh",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: {
            xs: "3rem",
            sm: "5rem",
            md: "6rem",
          },
        }}
        variant="h1"
      >
        course
        <Typography
          sx={{ fontSize: "inherit" }}
          variant="h1"
          component="span"
          color="primary"
        >
          X
        </Typography>
      </Typography>
      <Typography sx={{ textAlign: "center" }} variant="h4" component="h2">
        课程信息共享计划
      </Typography>
      {courseCount && (
        <Typography sx={{ mt: 5, textAlign: "center" }} variant="caption">
          已收录本学期（{getSemesterTextFromId(CURRENT_SEMESTER_ID)}）课程{" "}
          <Typography sx={{ fontWeight: "bold" }} variant="caption">
            {courseCount}
          </Typography>{" "}
          门。
        </Typography>
      )}
      <Container
        sx={{ display: "flex", alignItems: "stretch", mt: courseCount ? 3 : 4 }}
        maxWidth="sm"
        component="form"
        action=""
        onSubmit={handleSearch}
      >
        <TextField
          sx={{ flex: 7 }}
          placeholder="课程名 / 教师名"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          sx={{ flex: 1, ml: 2 }}
          type="submit"
          variant="contained"
          disabled={!query}
        >
          搜索
        </Button>
      </Container>
      {children}
    </Container>
  );
};

const CourseHomeWithSeo: React.FC<CourseHomeProps> = (props) => (
  <>
    <NextSeo
      title="课程信息共享计划 courseX"
      description="星期四大学课程信息共享计划"
    />
    <CourseHome {...props} />
  </>
);

export default CourseHomeWithSeo;

export const getStaticProps: GetStaticProps<CourseHomeProps> = async () => {
  const client = initializeApollo();

  let courseCount: number | null = null;

  try {
    const result = await client.query<GetCourseCount, GetCourseCountVariables>({
      query: GET_COURSE_COUNT,
      variables: {
        semesterId: CURRENT_SEMESTER_ID,
      },
    });

    if (!result.error && !result.errors) {
      courseCount = result.data.course_aggregate.aggregate?.count ?? null;
    }
  } catch {}

  return {
    props: {
      courseCount,
    },
    revalidate: 1 * 60 * 60, // 1h
  };
};
