import { cloneElement } from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import {
  ForumOutlined,
  NotificationsOutlined,
  SchoolOutlined,
} from "@material-ui/icons";

const FeatureCard = ({
  title,
  description,
  url,
  icon,
}: {
  title: string;
  description: string;
  url: string;
  icon: React.ReactElement;
}) => (
  <Link href={url} passHref>
    <Card component="a">
      <CardActionArea>
        <CardContent>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            {cloneElement(icon, {
              sx: { fontSize: { xs: "4rem", sm: "6rem" } },
            })}
          </Box>
          <Typography
            sx={{ mt: 1, fontWeight: 500 }}
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            {description}
          </Typography>
          <Typography sx={{ mt: 0.5 }} variant="subtitle2" component="h4">
            {process.env.NEXT_PUBLIC_DOMAIN + url}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

const Home: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        py: 8,
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
        tsinghua
        <Typography
          sx={{ fontSize: "inherit", fontWeight: "bold" }}
          variant="h1"
          component="span"
          color="primary"
        >
          .
        </Typography>
        app
        <br />
        <Typography
          sx={{
            textAlign: {
              xs: "unset",
              sm: "right",
            },
            mt: 2,
          }}
        >
          星期四大学信息化建设推进计划
        </Typography>
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "center",
          mt: {
            xs: 2,
            sm: 8,
          },
          "& > *": {
            mx: {
              xs: 0,
              sm: 2,
            },
            my: {
              xs: 1,
              sm: 0,
            },
            flex: {
              xs: "initial",
              sm: "1 1 0",
            },
          },
        }}
        maxWidth="md"
      >
        <FeatureCard
          title="星期四"
          description="多功能社区"
          url="/bbs"
          icon={<ForumOutlined />}
        />
        <FeatureCard
          title="courseX"
          description="课程信息共享计划"
          url="/courses"
          icon={<SchoolOutlined />}
        />
        <FeatureCard
          title="learnX"
          description="网络学堂新选择"
          url="/learn"
          icon={<NotificationsOutlined />}
        />
      </Container>
    </Container>
  );
};

export default Home;
