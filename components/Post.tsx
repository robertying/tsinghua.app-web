import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { Edit, MessageOutlined, MoreVert } from "@material-ui/icons";
import dayjs from "dayjs";
import { markdownToReact } from "lib/markdown";
import { useUser } from "lib/session";
import {
  GetThread_thread_by_pk,
  GetThread_thread_by_pk_posts,
  GetThreadReactions_thread_by_pk,
  GetThreadReactions_thread_by_pk_posts,
  GetThreadReactions_thread_by_pk_my_reactions,
  GetThreadReactions_thread_by_pk_posts_my_reactions,
  reaction_emoji_enum,
} from "api/types";
import MyAvatar from "./Avatar";
import ReactionSelect from "./ReactionSelect";

export type PostProps = (
  | Omit<GetThread_thread_by_pk, "posts">
  | GetThread_thread_by_pk_posts
  | (Omit<GetThread_thread_by_pk, "posts"> &
      Omit<GetThreadReactions_thread_by_pk, "posts">)
  | (GetThread_thread_by_pk_posts & GetThreadReactions_thread_by_pk_posts)
) & {
  onReact?: (
    target: "thread" | "post",
    name: reaction_emoji_enum,
    action: "add" | "delete"
  ) => void;
  onEdit?: () => void;
};

const getReactions = (values: PostProps) => {
  if ("thumbs_up_reactions" in values) {
    return {
      thumbs_up: values.thumbs_up_reactions.aggregate?.count,
      thumbs_down: values.thumbs_down_reactions.aggregate?.count,
      grinning_face_with_smiling_eyes:
        values.grinning_face_with_smiling_eyes_reactions.aggregate?.count,
      party_popper: values.party_popper_reactions.aggregate?.count,
      confused_face: values.confused_face_reactions.aggregate?.count,
      red_heart: values.red_heart_reactions.aggregate?.count,
      rocket: values.rocket_reactions.aggregate?.count,
      eyes: values.eyes_reactions.aggregate?.count,
    };
  }
};

const getMyReactions = (values: PostProps) => {
  if ("my_reactions" in values) {
    return (values.my_reactions as (
      | GetThreadReactions_thread_by_pk_my_reactions
      | GetThreadReactions_thread_by_pk_posts_my_reactions
    )[]).reduce((prev, curr) => {
      return {
        ...prev,
        [curr.name]: true,
      };
    }, {});
  }
};

const Post: React.FC<PostProps> = (props) => {
  const [user] = useUser();

  const [loading, setLoading] = useState(true);
  const [
    renderedContent,
    setRenderedContent,
  ] = useState<React.ReactElement | null>(null);
  const [menuButton, setMenuButton] = useState<HTMLButtonElement | null>(null);

  const handleMoreMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuButton(e.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMenuButton(null);
  };

  const handleEditClick = () => {
    handleMoreMenuClose();
    props.onEdit?.();
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await markdownToReact(props.content!);
      setRenderedContent(result);
      setLoading(false);
    })();
  }, [props.content]);

  return (
    <Card
      id={props.__typename === "realm_post" ? `post-${props.id}` : undefined}
    >
      <CardHeader
        avatar={
          <MyAvatar
            src={props.user?.avatar_url ?? undefined}
            alt={props.user?.username ?? undefined}
            size="medium"
          />
        }
        title={props.user?.username}
        subheader={props.user?.status}
        action={
          user && (
            <>
              <IconButton onClick={handleMoreMenuOpen}>
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={menuButton}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={menuButton ? true : false}
                onClose={handleMoreMenuClose}
              >
                {user.username && user.id !== props.user?.user_id && (
                  <Link
                    href={`/bbs/realms/${props.user?.realm_id}/messages?user_id=${props.user?.user_id}`}
                    passHref
                  >
                    <MenuItem button component="a">
                      <MessageOutlined />
                      <Typography sx={{ ml: 1 }} component="span">
                        发消息
                      </Typography>
                    </MenuItem>
                  </Link>
                )}
                {props.onEdit && (
                  <MenuItem onClick={handleEditClick}>
                    <Edit />
                    <Typography sx={{ ml: 1 }} component="span">
                      编辑
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </>
          )
        }
      />
      <CardContent sx={{ pt: 0, pb: 1 }}>
        <Typography component="article" className="markdown-body">
          {loading ? "加载中……" : renderedContent}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="caption" component="div">
          {dayjs(props.updated_at!).isSame(props.created_at!)
            ? dayjs(props.created_at!).fromNow()
            : "编辑于 " + dayjs(props.updated_at!).fromNow()}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        {props.onReact && (
          <ReactionSelect
            reactions={getReactions(props)}
            myReactions={getMyReactions(props)}
            onReact={(name, action) =>
              props.onReact?.(
                props.__typename === "thread" ? "thread" : "post",
                name,
                action
              )
            }
          />
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
