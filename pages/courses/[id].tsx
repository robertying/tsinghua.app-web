import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Rating,
  Container,
  Box,
  Typography,
  TextField,
  Tooltip,
  Stack,
  Card,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COURSE } from "api/course";
import {
  ADD_COURSE_REVIEW,
  DELETE_COURSE_REVIEW,
  GET_COURSE_REVIEWS,
  UPDATE_COURSE_REVIEW,
} from "api/course_review";
import {
  GetCourse,
  GetCourseVariables,
  AddCourseReview,
  AddCourseReviewVariables,
  GetCourseReviewsVariables,
  GetCourseReviews,
  UpdateCourseReview,
  UpdateCourseReviewVariables,
  DeleteCourseReview,
  DeleteCourseReviewVariables,
} from "api/types";
import Review from "components/Review";
import Splash from "components/Splash";
import { useToast } from "components/Snackbar";
import MyDialog from "components/Dialog";
import { addApolloState, initializeApollo } from "lib/client";
import { getSemesterTextFromId } from "lib/format";
import { useUser } from "lib/session";
import NotFound from "pages/404";

const EMPTY_USER_ID = "00000000-0000-0000-0000-000000000000";

const CourseDetail: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const courseId = router.query.id as string;

  const [user, authLoading] = useUser();

  const { data: courseData, refetch: refetchCourse } = useQuery<
    GetCourse,
    GetCourseVariables
  >(GET_COURSE, {
    variables: {
      id: courseId,
    },
    skip: !courseId,
  });
  const course = courseData?.course_by_pk;

  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [deleteReviewDialogOpen, setDeleteReviewDialogOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState("");

  const {
    data: courseReviewData,
    error: courseReviewError,
    loading: courseReviewLoading,
    refetch: refetchCourseReviews,
  } = useQuery<GetCourseReviews, GetCourseReviewsVariables>(
    GET_COURSE_REVIEWS,
    {
      variables: {
        courseId: courseId,
        userId: user?.id ?? EMPTY_USER_ID,
      },
      skip: !courseId,
    }
  );

  const [
    addCourseReview,
    { data: addCourseReviewData, error: addCourseReviewError },
  ] = useMutation<AddCourseReview, AddCourseReviewVariables>(ADD_COURSE_REVIEW);
  const [
    updateCourseReview,
    { data: updateCourseReviewData, error: updateCourseReviewError },
  ] = useMutation<UpdateCourseReview, UpdateCourseReviewVariables>(
    UPDATE_COURSE_REVIEW
  );
  const [
    deleteCourseReview,
    { data: deleteCourseReviewData, error: deleteCourseReviewError },
  ] = useMutation<DeleteCourseReview, DeleteCourseReviewVariables>(
    DELETE_COURSE_REVIEW
  );
  const reviewed = courseReviewData && courseReviewData.my_course_review;

  const handleReviewDialogOpen = () => {
    if (reviewed) {
      setRating(courseReviewData!.my_course_review!.rating);
      setContent(courseReviewData!.my_course_review!.content);
    }
    setReviewDialogOpen(true);
  };

  const handleReviewDialogClose = (e?: any, reason?: string) => {
    if (reason) {
      return;
    }

    setReviewDialogOpen(false);
    setRating(null);
    setContent("");
  };

  const handleDeleteReviewDialogOpen = () => {
    setDeleteReviewDialogOpen(true);
  };

  const handleDeleteReviewDialogClose = () => {
    setDeleteReviewDialogOpen(false);
    setRating(null);
    setContent("");
  };

  const handleDeleteReview = () => {
    deleteCourseReview({
      variables: {
        courseId: course!.id,
        userId: user!.id,
      },
    });
  };

  const handleSubmitReview = () => {
    if (!rating) {
      toast("info", "请先打分");
      return;
    }

    if (!reviewed) {
      addCourseReview({
        variables: {
          courseId: course!.id,
          userId: user!.id,
          rating: rating,
          content: content.trim(),
        },
      });
    } else {
      updateCourseReview({
        variables: {
          courseId: course!.id,
          userId: user!.id,
          rating: rating,
          content: content.trim(),
        },
      });
    }
  };

  useEffect(() => {
    if (addCourseReviewData) {
      handleReviewDialogClose();
      toast("success", "评价已发布");
      refetchCourse();
      refetchCourseReviews();
    }
  }, [addCourseReviewData, refetchCourse, refetchCourseReviews, toast]);

  useEffect(() => {
    if (updateCourseReviewData) {
      handleReviewDialogClose();
      toast("success", "评价已更新");
      refetchCourse();
      refetchCourseReviews();
    }
  }, [updateCourseReviewData, refetchCourse, refetchCourseReviews, toast]);

  useEffect(() => {
    if (deleteCourseReviewData) {
      handleDeleteReviewDialogClose();
      toast("success", "评价已删除");
      refetchCourse();
      refetchCourseReviews();
    }
  }, [deleteCourseReviewData, refetchCourse, refetchCourseReviews, toast]);

  useEffect(() => {
    if (addCourseReviewError) {
      toast("error", "评价发布失败");
    }
  }, [addCourseReviewError, toast]);

  useEffect(() => {
    if (updateCourseReviewError) {
      toast("error", "评价更新失败");
    }
  }, [updateCourseReviewError, toast]);

  useEffect(() => {
    if (deleteCourseReviewError) {
      toast("error", "评价删除失败");
    }
  }, [deleteCourseReviewError, toast]);

  useEffect(() => {
    if (courseReviewError) {
      toast("error", "评价获取失败");
    }
  }, [courseReviewError, toast]);

  if (router.isFallback) {
    return <Splash />;
  }

  if (!course) {
    return <NotFound />;
  }

  return (
    <>
      <NextSeo
        title={`${course.name} - ${course.teacher.name} - courseX`}
        description="星期四大学课程信息共享计划"
      />
      <Container
        sx={{ display: "flex", flexDirection: "column", py: 8 }}
        maxWidth="sm"
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          component="nav"
        >
          <Link href="/courses" passHref>
            <Tooltip title="返回搜索">
              <IconButton>
                <Home />
              </IconButton>
            </Tooltip>
          </Link>
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h4" component="h1">
              course
              <Typography
                sx={{ fontSize: "inherit" }}
                component="span"
                color="primary"
              >
                X
              </Typography>
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h6"
              component="h2"
            >
              课程信息共享计划
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 4,
            "& > *": {
              mb: 4,
            },
          }}
          component="main"
        >
          <section>
            <Typography variant="subtitle1" component="p">
              {getSemesterTextFromId(course.semester_id)}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", mt: 1 }}
              variant="h4"
              component="h3"
            >
              {course.name}
            </Typography>
            <Typography sx={{ mt: 0.5 }} variant="h5" component="h4">
              {course.teacher.name}
            </Typography>
          </section>
          {(JSON.parse(course.time_location) as string[]).length > 0 && (
            <section>
              <Typography variant="h6" component="h5">
                时间 / 地点
              </Typography>
              <ul>
                {(JSON.parse(course.time_location) as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </section>
          )}
          <Box
            sx={{
              "& > *": {
                mb: 2,
              },
            }}
            component="section"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="h5">
                打分评价
              </Typography>
              {authLoading ? (
                <CircularProgress size="1.5rem" />
              ) : user?.id ? (
                <div>
                  {reviewed && (
                    <>
                      <Button
                        sx={{ mr: 1 }}
                        variant="outlined"
                        size="small"
                        onClick={handleDeleteReviewDialogOpen}
                      >
                        删除评价
                      </Button>
                      <Dialog
                        fullWidth
                        open={deleteReviewDialogOpen}
                        onClose={handleDeleteReviewDialogClose}
                      >
                        <DialogTitle>删除此条评价？</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            此操作不可撤销。
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleDeleteReviewDialogClose}
                            color="primary"
                          >
                            取消
                          </Button>
                          <Button onClick={handleDeleteReview} color="primary">
                            确定
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </>
                  )}
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleReviewDialogOpen}
                  >
                    {reviewed ? "更新评价" : "撰写评价"}
                  </Button>
                </div>
              ) : (
                <Link
                  href={`/auth/login?redirect_url=${router.asPath}`}
                  passHref
                >
                  <Button variant="contained">登录</Button>
                </Link>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Rating
                value={course.course_reviews_aggregate.aggregate?.avg?.rating}
                precision={0.1}
                readOnly
              />
              <Typography sx={{ ml: 2 }} component="span">
                {course.course_reviews_aggregate.aggregate?.avg?.rating?.toFixed(
                  1
                )}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                mt: 4,
              }}
            >
              {courseReviewLoading ? (
                <CircularProgress sx={{ alignSelf: "center" }} size="2rem" />
              ) : (
                <Stack direction="column" spacing={1}>
                  {reviewed && (
                    <Review {...courseReviewData!.my_course_review!} />
                  )}
                  {courseReviewData?.course_review.map((review) => (
                    <Review key={review.user!.username} {...review} />
                  ))}
                  {!reviewed && courseReviewData?.course_review.length === 0 && (
                    <Card sx={{ textAlign: "center", p: 6 }}>
                      <Typography
                        sx={{ fontStyle: "italic" }}
                        variant="subtitle1"
                        component="div"
                      >
                        无更多评价
                      </Typography>
                    </Card>
                  )}
                </Stack>
              )}
            </Box>
          </Box>
        </Box>
        <MyDialog
          open={reviewDialogOpen}
          onClose={handleReviewDialogClose}
          title={reviewed ? "更新评价" : "新评价"}
          okText={reviewed ? "更新" : "发布"}
          onOk={handleSubmitReview}
        >
          <Typography variant="subtitle1" component="p">
            {getSemesterTextFromId(course.semester_id)}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", mt: 1 }}
            variant="h5"
            component="h1"
          >
            {course.name}
          </Typography>
          <Typography sx={{ mt: 0.5 }} variant="h6" component="h2">
            {course.teacher.name}
          </Typography>
          <Typography sx={{ mt: 4, mb: 2 }} variant="subtitle1" component="h3">
            打分
          </Typography>
          <Rating
            value={rating}
            onChange={(e, r) => {
              setRating(r);
            }}
          />
          <Typography sx={{ mt: 4 }} variant="subtitle1" component="h3">
            评价
          </Typography>
          <TextField
            sx={{ my: 2 }}
            minRows={5}
            fullWidth
            multiline
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="可选"
          />
        </MyDialog>
      </Container>
    </>
  );
};

export default CourseDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  if (params?.id) {
    await client.query<GetCourse, GetCourseVariables>({
      query: GET_COURSE,
      variables: {
        id: params.id as string,
      },
    });

    await client.query<GetCourseReviews, GetCourseReviewsVariables>({
      query: GET_COURSE_REVIEWS,
      variables: {
        courseId: params.id as string,
        userId: EMPTY_USER_ID,
      },
    });
  }

  return addApolloState(client, {
    props: {},
    revalidate: 1,
  });
};
