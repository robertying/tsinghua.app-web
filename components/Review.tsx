import { Box, Card, CardContent, Rating, Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { GetCourseReviews_course_review_public } from "api/types";
import Avatar from "./Avatar";

export interface ReviewProps extends GetCourseReviews_course_review_public {}

const Review: React.FC<ReviewProps> = (review) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={review.username ?? "用户头像"}
          src={review.user?.avatar_url}
        />
        <Typography sx={{ mx: 2 }}>{review.username}</Typography>
        <Box sx={{ ml: "auto" }} clone>
          <Rating value={review.rating} readOnly />
        </Box>
      </Box>
      <Typography
        sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word", p: 1, my: 2 }}
      >
        {review.content || "无评价内容"}
      </Typography>
      <Typography variant="caption">
        {dayjs(review.updated_at!).isSame(review.created_at!)
          ? dayjs(review.created_at!).fromNow()
          : "编辑于 " + dayjs(review.updated_at!).fromNow()}
      </Typography>
    </CardContent>
  </Card>
);

export default Review;
