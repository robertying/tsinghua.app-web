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
} from "@mui/material";
import { Edit, MessageOutlined, MoreVert } from "@mui/icons-material";
import dayjs from "dayjs";
import { markdownToReact } from "lib/markdown";
import { useUser } from "lib/session";
import {
  GetThreadQuery,
  GetThreadReactionsQuery,
  ReactionEmojiEnum,
} from "api/types/graphql";
import MyAvatar from "./Avatar";
import ReactionSelect from "./ReactionSelect";

type Thread = Partial<
  Omit<
    NonNullable<GetThreadQuery["thread_by_pk"]> &
      NonNullable<GetThreadReactionsQuery["thread_by_pk"]>,
    "posts"
  >
>;
type ThreadPost = Partial<
  NonNullable<GetThreadQuery["thread_by_pk"]>["posts"][0] &
    NonNullable<GetThreadReactionsQuery["thread_by_pk"]>["posts"][0]
>;

export type PostProps = (Thread | ThreadPost) & {
  onReact?: (
    target: "thread" | "post",
    name: ReactionEmojiEnum,
    action: "add" | "delete"
  ) => void;
  onEdit?: () => void;
};

const getReactions = (values: PostProps) => {
  if ("thumbs_up_reactions" in values) {
    return {
      thumbs_up: values.thumbs_up_reactions!.aggregate?.count,
      thumbs_down: values.thumbs_down_reactions!.aggregate?.count,
      grinning_face_with_smiling_eyes:
        values.grinning_face_with_smiling_eyes_reactions!.aggregate?.count,
      party_popper: values.party_popper_reactions!.aggregate?.count,
      confused_face: values.confused_face_reactions!.aggregate?.count,
      red_heart: values.red_heart_reactions!.aggregate?.count,
      rocket: values.rocket_reactions!.aggregate?.count,
      eyes: values.eyes_reactions!.aggregate?.count,
    };
  }
};

const getMyReactions = (values: PostProps) => {
  if ("my_reactions" in values) {
    return [...values.my_reactions!].reduce((prev, curr) => {
      return {
        ...prev,
        [curr.name]: true,
      };
    }, {});
  }
};

const Post: React.FC<React.PropsWithChildren<PostProps>> = ({
  onEdit,
  onReact,
  ...post
}) => {
  const [user] = useUser();

  const [loading, setLoading] = useState(true);
  const [renderedContent, setRenderedContent] =
    useState<React.ReactElement | null>(null);
  const [menuButton, setMenuButton] = useState<HTMLButtonElement | null>(null);

  const handleMoreMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuButton(e.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMenuButton(null);
  };

  const handleEditClick = () => {
    handleMoreMenuClose();
    onEdit?.();
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await markdownToReact(post.content!);
      setRenderedContent(result);
      setLoading(false);
    })();
  }, [post.content]);

  return (
    <Card id={post.__typename === "realm_post" ? `post-${post.id}` : undefined}>
      <CardHeader
        avatar={
          <MyAvatar
            src={post.user?.avatar_url ?? undefined}
            alt={post.user?.username ?? undefined}
            size="medium"
          />
        }
        title={post.user?.username}
        subheader={post.user?.status}
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
                {user.username && user.id !== post.user?.user_id && (
                  <MenuItem
                    component={Link}
                    href={`/bbs/realms/${post.user?.realm_id}/messages?user=${post.user?.user_id}`}
                  >
                    <MessageOutlined />
                    <Typography sx={{ ml: 1 }} component="span">
                      发消息
                    </Typography>
                  </MenuItem>
                )}
                {onEdit && (
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
          {dayjs(post.updated_at!).isSame(post.created_at!)
            ? dayjs(post.created_at!).fromNow()
            : "编辑于 " + dayjs(post.updated_at!).fromNow()}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        {onReact && (
          <ReactionSelect
            reactions={getReactions(post)}
            myReactions={getMyReactions(post)}
            onReact={(name, action) =>
              onReact?.(
                post.__typename === "thread" ? "thread" : "post",
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
