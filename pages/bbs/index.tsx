import { useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  Stack,
  Typography,
  Container,
  Box,
} from "@mui/material";
import {
  CommentOutlined,
  EmojiEmotionsOutlined,
  PeopleOutlined,
} from "@mui/icons-material";
import dayjs from "dayjs";
import sampleSize from "lodash/sampleSize";
import { initializeApollo } from "lib/client";
import {
  GetHottestThreadsQuery,
  GetNewestThreadsQuery,
  GetPublicRealmsQuery,
} from "api/types/graphql";
import { GET_HOTTEST_THREADS, GET_NEWEST_THREADS } from "api/thread";
import { GET_PUBLIC_REALMS } from "api/realm";
import Realm from "./realms/[realmId]";

const ExploreThreadCard: React.FC<
  React.PropsWithChildren<
    GetHottestThreadsQuery["thread"][0] | GetNewestThreadsQuery["thread"][0]
  >
> = (props) => {
  return (
    <Card>
      <CardActionArea
        component={Link}
        href={`/bbs/realms/${props.realm?.id}/threads/${props.id}`}
        sx={{
          p: 2,
          pb: 1.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        <Typography variant="subtitle2" component="div">
          {props.realm?.name}
        </Typography>
        <Typography
          sx={{ mt: 0.5, overflowWrap: "break-word" }}
          variant="subtitle1"
          component="div"
        >
          {props.title}
        </Typography>
        <Stack
          sx={{
            mt: 0.5,
          }}
          direction="row"
          alignItems="center"
        >
          <Typography variant="caption">
            {dayjs(props.created_at).fromNow()}
          </Typography>
          <Stack
            sx={{ fontSize: "0.8rem", ml: "auto", mr: 1 }}
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <CommentOutlined sx={{ fontSize: "inherit" }} />
            <Typography sx={{ fontSize: "inherit" }} variant="caption">
              {props.posts_aggregate.aggregate?.count}
            </Typography>
          </Stack>
          <Stack
            sx={{ fontSize: "0.8rem" }}
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <EmojiEmotionsOutlined sx={{ fontSize: "inherit" }} />
            <Typography sx={{ fontSize: "inherit" }} variant="caption">
              {props.reactions_aggregate.aggregate?.count}
            </Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

const ExploreRealmCard: React.FC<
  React.PropsWithChildren<GetPublicRealmsQuery["realm_public"][0]>
> = (props) => {
  return (
    <Card>
      <CardActionArea
        component={Link}
        href={`/bbs/realms/${props.id}`}
        sx={{
          p: 2,
          pb: 1.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        <Typography variant="subtitle2" component="div">
          {props.name}
        </Typography>
        <Typography
          sx={{ mt: 0.5, overflowWrap: "break-word" }}
          variant="subtitle1"
          component="div"
        >
          {props.description}
        </Typography>
        <Stack
          sx={{
            mt: 0.5,
          }}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Stack
            sx={{ fontSize: "0.8rem", ml: "auto" }}
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <PeopleOutlined sx={{ fontSize: "inherit" }} />
            <Typography sx={{ fontSize: "inherit" }} variant="caption">
              {props.users_aggregate.aggregate?.count}
            </Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

const CarouselContainer: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    if (stackRef.current) {
      const element = stackRef.current;

      const handleScroll = () => {
        if (element.scrollWidth - element.offsetWidth <= element.scrollLeft) {
          setScrollEnd(true);
        } else {
          setScrollEnd(false);
        }
      };

      handleScroll();
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        mx: {
          xs: -1,
          sm: 0,
        },
      }}
    >
      <Stack
        ref={stackRef}
        sx={{
          pt: 1,
          pb: {
            xs: 2,
            sm: 0,
          },
          pl: {
            xs: 1,
            sm: 0,
          },
          "&::after": {
            content: '""',
            minWidth: {
              xs: 8,
              sm: 0,
            },
          },
          overflowX: {
            xs: "auto",
            sm: "unset",
          },
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: 8,
          "& > *": {
            scrollSnapAlign: "start",
            flex: {
              xs: "1 0 auto",
              sm: 1,
            },
            width: {
              xs: "55%",
            },
          },
        }}
        direction="row"
        spacing={1.5}
      >
        {children}
      </Stack>
      <Box
        sx={{
          display: scrollEnd
            ? "none"
            : {
                xs: "block",
                sm: "none",
              },
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          pointerEvents: "none",
          background:
            "linear-gradient(to right, var(--transparent-color) 0%, var(--transparent-color) 95%, var(--background-color) 100%)",
        }}
      />
    </Box>
  );
};

interface ThursdayHomeProps {
  hottestThreads: GetHottestThreadsQuery["thread"];
  newestThreads: GetNewestThreadsQuery["thread"];
  randomRealms: GetPublicRealmsQuery["realm_public"];
}

const ThursdayHome: React.FC<React.PropsWithChildren<ThursdayHomeProps>> = ({
  hottestThreads,
  newestThreads,
  randomRealms,
}) => {
  return (
    <>
      <Container
        sx={{
          pt: 8,
          mb: {
            xs: -4,
            sm: -2,
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        maxWidth="sm"
      >
        {hottestThreads.length !== 0 && (
          <>
            <Typography variant="h5" component="h3">
              热门
            </Typography>
            <CarouselContainer>
              {hottestThreads.map((t) => (
                <ExploreThreadCard key={t.id} {...t} />
              ))}
            </CarouselContainer>
          </>
        )}
        {newestThreads.length !== 0 && (
          <>
            <Typography sx={{ mt: 1.5 }} variant="h5" component="h3">
              最新
            </Typography>
            <CarouselContainer>
              {newestThreads.map((t) => (
                <ExploreThreadCard key={t.id} {...t} />
              ))}
            </CarouselContainer>
          </>
        )}
        {randomRealms.length !== 0 && (
          <>
            <Typography sx={{ mt: 1.5 }} variant="h5" component="h3">
              探索
            </Typography>
            <CarouselContainer>
              {randomRealms.map((t) => (
                <ExploreRealmCard key={t.id} {...t} />
              ))}
            </CarouselContainer>
          </>
        )}
      </Container>
      <Realm />
    </>
  );
};

export default ThursdayHome;

export const getStaticProps: GetStaticProps<ThursdayHomeProps> = async () => {
  const client = initializeApollo();

  let hottestThreads: GetHottestThreadsQuery["thread"] = [];
  let newestThreads: GetNewestThreadsQuery["thread"] = [];
  let randomRealms: GetPublicRealmsQuery["realm_public"] = [];

  try {
    const response = await client.query<GetHottestThreadsQuery>({
      query: GET_HOTTEST_THREADS,
    });
    hottestThreads = response.data.thread;
  } catch {}
  try {
    const response = await client.query<GetNewestThreadsQuery>({
      query: GET_NEWEST_THREADS,
    });
    newestThreads = response.data.thread;
  } catch {}
  try {
    const response = await client.query<GetPublicRealmsQuery>({
      query: GET_PUBLIC_REALMS,
    });
    randomRealms = sampleSize(response.data.realm_public, 3);
  } catch {}

  return {
    props: {
      hottestThreads,
      newestThreads,
      randomRealms,
    },
    revalidate: 1,
  };
};
