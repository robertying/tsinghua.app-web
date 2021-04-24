import { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Edit, MoreVert } from "@material-ui/icons";
import dayjs from "dayjs";
import { markdownToReact } from "lib/markdown";
import {
  GetThreadById_thread_public,
  GetThreadById_thread_public_posts,
  GetThreadReactions_thread_public,
  GetThreadReactions_thread_public_my_reactions,
  GetThreadReactions_thread_public_posts,
  GetThreadReactions_thread_public_posts_my_reactions,
  reaction_emoji_enum,
} from "api/types";
import MyAvatar from "./Avatar";
import ReactionSelect from "./ReactionSelect";

export type PostProps = (
  | Omit<GetThreadById_thread_public, "posts">
  | GetThreadById_thread_public_posts
  | (Omit<GetThreadById_thread_public, "posts"> &
      Omit<GetThreadReactions_thread_public, "posts">)
  | (GetThreadById_thread_public_posts & GetThreadReactions_thread_public_posts)
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
      | GetThreadReactions_thread_public_my_reactions
      | GetThreadReactions_thread_public_posts_my_reactions
    )[]).reduce((prev, curr) => {
      return {
        ...prev,
        [curr.name]: true,
      };
    }, {});
  }
};

const Post: React.FC<PostProps> = (props) => {
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
      id={props.__typename === "post_public" ? `post-${props.id}` : undefined}
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
          props.onEdit && (
            <>
              <Tooltip title="更多操作" placement="left">
                <IconButton onClick={handleMoreMenuOpen}>
                  <MoreVert />
                </IconButton>
              </Tooltip>
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
                <MenuItem onClick={handleEditClick}>
                  <Edit />
                  <Typography sx={{ ml: 1 }} component="span">
                    编辑
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          )
        }
      />
      <CardContent sx={{ py: 0 }}>
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
                props.__typename === "thread_public" ? "thread" : "post",
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
