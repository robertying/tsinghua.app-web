import { GetStaticProps } from "next";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  Stack,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import {
  CommentOutlined,
  EmojiEmotionsOutlined,
  PeopleOutlined,
} from "@material-ui/icons";
import dayjs from "dayjs";
import sampleSize from "lodash/sampleSize";
import { initializeApollo } from "lib/client";
import {
  GetHottestThreads,
  GetHottestThreads_thread,
  GetNewestThreads,
  GetNewestThreads_thread,
  GetPublicRealms,
  GetPublicRealms_realm_public,
} from "api/types";
import { GET_HOTTEST_THREADS, GET_NEWEST_THREADS } from "api/thread";
import { GET_PUBLIC_REALMS } from "api/realm";
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

const ExploreRealmCard: React.FC<GetPublicRealms_realm_public> = (props) => {
  return (
    <Card>
      <Link href={`/bbs/realms/${props.id}`} passHref>
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
      </Link>
    </Card>
  );
};

const CarouselContainer: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        pl: {
          xs: 1,
          sm: 0,
        },
        mx: {
          xs: -1,
          sm: 0,
        },
      }}
    >
      <Stack
        sx={{
          pt: 1,
          pb: {
            xs: 2,
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
          display: {
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
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 90%, var(--background-color) 100%)",
        }}
      />
    </Box>
  );
};

interface ThursdayHomeProps {
  hottestThreads: GetHottestThreads_thread[];
  newestThreads: GetNewestThreads_thread[];
  randomRealms: GetPublicRealms_realm_public[];
}

const ThursdayHome: React.FC<ThursdayHomeProps> = ({
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
        {randomRealms.length && (
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

  let hottestThreads: GetHottestThreads_thread[] = [];
  let newestThreads: GetNewestThreads_thread[] = [];
  let randomRealms: GetPublicRealms_realm_public[] = [];

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
  try {
    const response = await client.query<GetPublicRealms>({
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
