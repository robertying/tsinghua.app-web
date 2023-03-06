import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import dayjs from "dayjs";
import { GetCourseReviewsQuery } from "api/types/graphql";
import Avatar from "./Avatar";

export type ReviewProps = GetCourseReviewsQuery["course_review"][0];

const Review: React.FC<React.PropsWithChildren<ReviewProps>> = (review) => (
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
