import Link from "next/link";
import {
  AvatarGroup,
  Box,
  Card,
  CardActionArea,
  Chip,
  Stack,
  Typography,
} from "@material-ui/core";
import dayjs from "dayjs";
import { GetRealmById_realm_by_pk_threads_public } from "api/types";
import MyAvatar from "./Avatar";

export interface ThreadCardProps
  extends GetRealmById_realm_by_pk_threads_public {}

const ThreadCard: React.FC<ThreadCardProps> = (props) => {
  return (
    <Card>
      <Link href={`/bbs/realms/${props.realm_id}/threads/${props.id}`} passHref>
        <CardActionArea sx={{ p: 2, pb: 1.5 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {props.topic && <Chip label={props.topic.name} />}
            <Typography variant="subtitle1" component="span">
              {props.title}
            </Typography>
          </Stack>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="caption">
              {dayjs(props.updated_at!).fromNow()}
            </Typography>
            <AvatarGroup
              sx={{
                "& > .MuiAvatarGroup-avatar": {
                  width: 24,
                  height: 24,
                  fontSize: 12,
                },
              }}
              max={5}
            >
              <MyAvatar
                key={props.user!.username}
                src={props.user!.avatar_url ?? undefined}
                alt={props.user!.username ?? undefined}
                size="small"
              />
              {props.posts.map((post) => (
                <MyAvatar
                  key={post.user!.username}
                  src={post.user!.avatar_url ?? undefined}
                  alt={post.user!.username ?? undefined}
                  size="small"
                />
              ))}
            </AvatarGroup>
          </Box>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ThreadCard;
