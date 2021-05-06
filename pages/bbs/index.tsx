import { GetStaticProps } from "next";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  Stack,
  Typography,
  Container,
} from "@material-ui/core";
import { CommentOutlined, EmojiEmotionsOutlined } from "@material-ui/icons";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { addApolloState, initializeApollo } from "lib/client";
import {
  GetHottestThreads,
  GetHottestThreads_thread,
  GetNewestThreads,
  GetNewestThreads_thread,
} from "api/types";
import { GET_HOTTEST_THREADS, GET_NEWEST_THREADS } from "api/thread";
import Realm from "./realms/[realmId]";

const ExploreThreadCard: React.FC<
  GetHottestThreads_thread | GetNewestThreads_thread
> = (props) => {
  return (
    <Card>
      <Link
        href={`/bbs/realms/${props.realm?.id}/threads/${props.id}`}
        passHref
      >
        <CardActionArea
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
          <Typography
            sx={{ overflowWrap: "break-word" }}
            variant="subtitle1"
            component="div"
          >
            {props.id === 15
              ? "dasdadasdadadadasdadadadadadadadadsadadsadasdadsa"
              : props.title}
          </Typography>
          <Stack
            sx={{
              mt: 1,
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
      </Link>
    </Card>
  );
};

const CarouselContainer: React.FC = ({ children }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        pt: 1,
        pb: {
          xs: 2,
          sm: 0,
        },
        pl: {
          xs: 1,
          sm: 0,
        },
        mx: {
          xs: -1,
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
          xs: "scroll",
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
            xs: "75%",
          },
        },
      }}
      direction="row"
      spacing={1.5}
    >
      {children}
    </Stack>
  );
};

const ThursdayHome: React.FC = () => {
  const { data: hotThreadData } = useQuery<GetHottestThreads>(
    GET_HOTTEST_THREADS
  );
  const { data: newThreadData } = useQuery<GetNewestThreads>(
    GET_NEWEST_THREADS
  );

  return (
    <>
      <Container
        sx={{
          pt: 10,
          mb: -4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        maxWidth="sm"
      >
        {hotThreadData?.thread.length && (
          <>
            <Typography variant="h5" component="h3">
              热门
            </Typography>
            <CarouselContainer>
              {hotThreadData?.thread.map((t) => (
                <ExploreThreadCard key={t.id} {...t} />
              ))}
            </CarouselContainer>
          </>
        )}
        {newThreadData?.thread.length && (
          <>
            <Typography sx={{ mt: 2 }} variant="h5" component="h3">
              最新
            </Typography>
            <CarouselContainer>
              {newThreadData?.thread.map((t) => (
                <ExploreThreadCard key={t.id} {...t} />
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

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();

  await client.query<GetHottestThreads>({
    query: GET_HOTTEST_THREADS,
  });
  await client.query<GetNewestThreads>({
    query: GET_NEWEST_THREADS,
  });

  return addApolloState(client, {
    props: {},
    revalidate: 1,
  });
};
