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
import dayjs from "dayjs";
import { initializeApollo } from "lib/client";
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

interface ThursdayHomeProps {
  hottestThreads: GetHottestThreads_thread[];
  newestThreads: GetNewestThreads_thread[];
}

const ThursdayHome: React.FC<ThursdayHomeProps> = ({
  hottestThreads,
  newestThreads,
}) => {
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
        {hottestThreads.length && (
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
        {newestThreads.length && (
          <>
            <Typography sx={{ mt: 2 }} variant="h5" component="h3">
              最新
            </Typography>
            <CarouselContainer>
              {newestThreads.map((t) => (
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

export const getStaticProps: GetStaticProps<ThursdayHomeProps> = async () => {
  const client = initializeApollo();

  let hottestThreads: GetHottestThreads_thread[] = [];
  let newestThreads: GetNewestThreads_thread[] = [];

  try {
    const response = await client.query<GetHottestThreads>({
      query: GET_HOTTEST_THREADS,
    });
    hottestThreads = response.data.thread;
  } catch {}
  try {
    const response = await client.query<GetNewestThreads>({
      query: GET_NEWEST_THREADS,
    });
    newestThreads = response.data.thread;
  } catch {}

  return {
    props: {
      hottestThreads,
      newestThreads,
    },
    revalidate: 1,
  };
};
