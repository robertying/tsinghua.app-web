import { Box, Card, CardContent, Rating, Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { GetCourseReviews_course_review } from "api/types";
import Avatar from "./Avatar";

export interface ReviewProps extends GetCourseReviews_course_review {}

const Review: React.FC<ReviewProps> = (review) => (
  <Card>
    <CardContent sx={{ "&:last-child": { pb: 2 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          size="medium"
          alt={review.user?.username ?? "用户头像"}
          src={review.user?.avatar_url ?? undefined}
        />
        <Typography sx={{ mx: 2 }}>{review.user?.username}</Typography>
        <Rating sx={{ ml: "auto" }} value={review.rating} readOnly />
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
