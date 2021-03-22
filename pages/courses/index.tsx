import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Button, Container, TextField, Typography } from "@material-ui/core";

export const CourseXHome: React.FC = ({ children }) => {
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
        minHeight: "100vh",
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
      <Container
        sx={{ display: "flex", alignItems: "stretch", mt: 8 }}
        maxWidth="sm"
        component="form"
        onSubmit={handleSearch}
      >
        <TextField
          sx={{ flex: 7 }}
          placeholder="课程名"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button sx={{ flex: 1, ml: 2 }} variant="contained" disabled={!query}>
          搜索
        </Button>
      </Container>
      {children}
    </Container>
  );
};

const CourseXHomeWithSeo: React.FC = () => (
  <>
    <NextSeo
      title="课程信息共享计划 courseX"
      description="星期四大学课程信息共享计划"
    />
    <CourseXHome />
  </>
);

export default CourseXHomeWithSeo;
