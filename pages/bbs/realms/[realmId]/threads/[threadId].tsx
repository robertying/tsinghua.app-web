import "@primer/css/dist/markdown.css";
import "katex/dist/katex.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  Breadcrumbs,
  Chip,
  Container,
  Typography,
  Box,
  Stack,
  Button,
  CircularProgress,
  Tabs,
  Tab,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  Select,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useMutation, useQuery } from "@apollo/client";
import { v4 as uuid } from "uuid";
import Post from "components/Post";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";
import MyFab from "components/Fab";
import MyDialog from "components/Dialog";
import { useUser } from "lib/session";
import { getOSS } from "lib/oss";
import { useBeforeUnloadAlert } from "lib/edit";
import { markdownToReact } from "lib/markdown";
import NotFound from "pages/404";
import { GET_THREAD, UPDATE_THREAD } from "api/thread";
import { ADD_POST, UPDATE_POST } from "api/post";
import {
  ADD_POST_REACTION,
  ADD_THREAD_REACTION,
  DELETE_POST_REACTION,
  DELETE_THREAD_REACTION,
  GET_THREAD_REACTIONS,
} from "api/reaction";
import {
  AddPost,
  AddPostReaction,
  AddPostReactionVariables,
  AddPostVariables,
  AddThreadReaction,
  AddThreadReactionVariables,
  DeletePostReaction,
  DeletePostReactionVariables,
  DeleteThreadReaction,
  DeleteThreadReactionVariables,
  GetThread,
  GetThreadVariables,
  GetThreadReactions,
  GetThreadReactionsVariables,
  reaction_emoji_enum,
  UpdatePost,
  UpdatePostVariables,
  UpdateThread,
  UpdateThreadVariables,
  GetThread_thread_by_pk_posts,
} from "api/types";

const Thread: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const realmId = router.query.realmId as string;
  const threadId = router.query.threadId as string;

  const [user] = useUser();

  const textFieldRef = useRef<HTMLTextAreaElement>(null);

  const [threadDialogOpen, setThreadDialogOpen] = useState(false);
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cursorSelection, setCursorSelection] = useState<[number, number]>([
    0, 0,
  ]);
  const [imageUploading, setImageUploading] = useState(false);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [tab, setTab] = useState(0);
  const [renderedContent, setRenderedContent] =
    useState<React.ReactElement | null>(null);
  const [rendering, setRendering] = useState(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  const {
    data: threadData,
    error: threadError,
    loading: threadLoading,
    refetch: refetchThread,
  } = useQuery<GetThread, GetThreadVariables>(GET_THREAD, {
    variables: {
      id: parseInt(threadId, 10),
    },
  });
  const thread = threadData?.thread_by_pk!;

  const { data: threadReactionData, refetch: refetchThreadReactions } =
    useQuery<GetThreadReactions, GetThreadReactionsVariables>(
      GET_THREAD_REACTIONS,
      {
        variables: {
          threadId: parseInt(threadId, 10),
          userId: user?.id!,
        },
        skip: !threadId || !user,
      }
    );
  const threadReactions = threadReactionData?.thread_by_pk;

  const [
    updateThread,
    { error: updateThreadError, loading: updateThreadLoading },
  ] = useMutation<UpdateThread, UpdateThreadVariables>(UPDATE_THREAD);
  const [addPost, { error: addPostError, loading: addPostLoading }] =
    useMutation<AddPost, AddPostVariables>(ADD_POST);
  const [updatePost, { error: updatePostError, loading: updatePostLoading }] =
    useMutation<UpdatePost, UpdatePostVariables>(UPDATE_POST);

  const [addThreadReaction] = useMutation<
    AddThreadReaction,
    AddThreadReactionVariables
  >(ADD_THREAD_REACTION);
  const [deleteThreadReaction] = useMutation<
    DeleteThreadReaction,
    DeleteThreadReactionVariables
  >(DELETE_THREAD_REACTION);
  const [addPostReaction] = useMutation<
    AddPostReaction,
    AddPostReactionVariables
  >(ADD_POST_REACTION);
  const [deletePostReaction] = useMutation<
    DeletePostReaction,
    DeletePostReactionVariables
  >(DELETE_POST_REACTION);

  const handleThreadDialogOpen = () => {
    setThreadDialogOpen(true);
  };

  const handleThreadDialogClose = () => {
    setThreadDialogOpen(false);
    setImageUploading(false);
    setTitle("");
    setContent("");
    setTab(0);
    setRenderedContent(null);
    setRendering(false);
  };

  const handlePostDialogOpen = () => {
    setPostDialogOpen(true);
  };

  const handlePostDialogClose = () => {
    setEditingPostId(null);
    setPostDialogOpen(false);
    setImageUploading(false);
    setContent("");
    setTab(0);
    setRenderedContent(null);
    setRendering(false);
  };

  const handleLinkDialogOpen = () => {
    setCursorSelection([
      textFieldRef.current?.selectionStart ?? 0,
      textFieldRef.current?.selectionEnd ??
        textFieldRef.current?.selectionStart ??
        0,
    ]);
    setLinkDialogOpen(true);
  };

  const handleLinkDialogClose = (
    event: {},
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason) {
      return;
    }

    setLinkDialogOpen(false);
    setLinkTitle("");
    setLinkHref("");
  };

  const handleImageButtonClick = () => {
    setCursorSelection([
      textFieldRef.current?.selectionStart ?? 0,
      textFieldRef.current?.selectionEnd ??
        textFieldRef.current?.selectionStart ??
        0,
    ]);
  };

  const handleImageSelect: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file.size > 10 * 1024 * 1024) {
        toast("warning", "图片上传失败：图片大小超过 10 MB");
        return;
      }

      setImageUploading(true);
      try {
        const { oss, tempFolder } = await getOSS();

        const name = `images/${tempFolder}/${uuid()}`;
        await oss.put(name, file);

        setContent(
          content.substring(0, cursorSelection[0]) +
            `\n![上传图片](${name})\n` +
            content.substring(cursorSelection[1])
        );
        toast("success", "图片上传成功");
      } catch (e) {
        toast("error", "图片上传失败：" + e.toString());
      } finally {
        setImageUploading(false);
      }
    }

    e.target.value = "";
  };

  const handleLinkInsert = () => {
    if (!linkHref.trim()) {
      return;
    }

    setContent(
      content.substring(0, cursorSelection[0]) +
        `[${linkTitle.trim() || linkHref.trim()}](${linkHref.trim()})` +
        content.substring(cursorSelection[1])
    );
    handleLinkDialogClose({});
  };

  const handleThreadSubmit = async () => {
    if (!title.trim()) {
      toast("info", "请填写标题");
      return;
    }
    if (!content.trim()) {
      toast("info", "请填写内容");
      return;
    }

    await updateThread({
      variables: {
        threadId: thread.id,
        title: title.trim(),
        content: content.trim(),
      },
    });

    handleThreadDialogClose();
    toast("success", "帖子编辑成功");
    await refetchThread();
  };

  const handlePostSubmit = async () => {
    if (!content.trim()) {
      toast("info", "请填写内容");
      return;
    }

    if (editingPostId) {
      await updatePost({
        variables: {
          postId: editingPostId,
          content: content.trim(),
        },
      });
      toast("success", "回复编辑成功");
    } else {
      const result = await addPost({
        variables: {
          userId: user?.id!,
          threadId: thread.id,
          content: content.trim(),
        },
      });
      toast("success", "回复发表成功");

      const newPostId = result.data?.insert_post_one?.id;
      newPostId && router.replace(router.asPath + `#post-${newPostId}`);
    }

    handlePostDialogClose();
    await refetchThread();
  };

  const handleReaction = async (
    target: "thread" | "post",
    name: reaction_emoji_enum,
    action: "add" | "delete",
    postId?: number | null
  ) => {
    if (target === "thread") {
      if (action === "add") {
        addThreadReaction({
          variables: {
            userId: user?.id!,
            threadId: thread.id,
            name,
          },
        });
      } else {
        deleteThreadReaction({
          variables: {
            userId: user?.id!,
            threadId: thread.id,
            name,
          },
        });
      }
    } else {
      if (action === "add") {
        addPostReaction({
          variables: {
            userId: user?.id!,
            postId: postId!,
            name,
          },
        });
      } else {
        deletePostReaction({
          variables: {
            userId: user?.id!,
            postId: postId!,
            name,
          },
        });
      }
    }

    await refetchThreadReactions();
  };

  const handleEditThread = async () => {
    setTitle(thread.title);
    setContent(thread.content);
    handleThreadDialogOpen();
  };

  const handleEditPost = async (post: GetThread_thread_by_pk_posts) => {
    setEditingPostId(post.id);
    setContent(post.content ?? "");
    handlePostDialogOpen();
  };

  useEffect(() => {
    if (threadError) {
      toast("error", "帖子获取失败");
    }
  }, [threadError, toast]);

  useEffect(() => {
    if (updateThreadError) {
      toast("error", "帖子编辑失败");
    }
  }, [updateThreadError, toast]);

  useEffect(() => {
    if (addPostError) {
      toast("error", "回复发表失败");
    }
  }, [addPostError, toast]);

  useEffect(() => {
    if (updatePostError) {
      toast("error", "回复编辑失败");
    }
  }, [updatePostError, toast]);

  useEffect(() => {
    if (tab === 1) {
      (async () => {
        setRendering(true);
        const result = await markdownToReact(content, true);
        setRenderedContent(result);
        setRendering(false);
      })();
    }
  }, [content, tab]);

  useBeforeUnloadAlert(threadDialogOpen || postDialogOpen);

  if (threadLoading) {
    return <Splash />;
  }

  if (!threadLoading && !thread) {
    return <NotFound />;
  }

  if (thread.realm!.id?.toString() !== realmId) {
    return <NotFound />;
  }

  return (
    <>
      <NextSeo
        title={
          thread.topic
            ? `${thread.title} - ${thread.topic.name} - ${thread.realm!.name}`
            : `${thread.title} - ${thread.realm!.name}`
        }
      />
      <Container sx={{ py: 10 }} maxWidth="sm">
        {user?.username && (
          <Tooltip title="新回复">
            <MyFab onClick={handlePostDialogOpen}>
              <Add />
            </MyFab>
          </Tooltip>
        )}
        <Breadcrumbs>
          <Link href="/bbs" passHref>
            <Typography sx={{ color: "inherit !important" }} component="a">
              星期四 Thursday
            </Typography>
          </Link>
          <Link href={`/bbs/realms/${realmId}`} passHref>
            <Typography component="a">{thread.realm!.name}</Typography>
          </Link>
        </Breadcrumbs>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {thread.topic && (
            <Link
              href={`/bbs/realms/${realmId}?topic=${thread.topic.id}`}
              passHref
            >
              <Chip
                sx={{ mr: 1 }}
                label={thread.topic.name}
                clickable
                component="a"
              />
            </Link>
          )}
          <Typography variant="h5" component="h1">
            {thread.title}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            "& > *": {
              my: 0.5,
            },
            "& > *:first-of-type": {
              mb: 2,
            },
          }}
        >
          <Post
            {...{ ...thread, ...threadReactions }}
            onReact={user ? handleReaction : undefined}
            onEdit={
              thread.user?.username === user?.username
                ? () => handleEditThread()
                : undefined
            }
          />
          {thread.posts.map((post, index) => (
            <Post
              key={post.id}
              {...{ ...post, ...threadReactions?.posts[index] }}
              onReact={
                user ? (...args) => handleReaction(...args, post.id) : undefined
              }
              onEdit={
                post.user?.username === user?.username
                  ? () => handleEditPost(post)
                  : undefined
              }
            />
          ))}
        </Box>
        <MyDialog
          open={threadDialogOpen}
          scroll={tab === 0 ? "paper" : "body"}
          onClose={handleThreadDialogClose}
          title="编辑帖子"
          okText="发布"
          okLoading={updateThreadLoading}
          onOk={handleThreadSubmit}
        >
          <Stack direction="row" spacing={1}>
            <Select
              variant="outlined"
              size="small"
              displayEmpty
              disabled
              value={thread.topic?.id}
            >
              <MenuItem value={thread.topic?.id}>
                {thread.topic?.name || "无"}
              </MenuItem>
            </Select>
            <TextField
              sx={{ flex: 1 }}
              placeholder="标题"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Stack>
          <Stack sx={{ mt: 2 }} direction="row" alignItems="center" spacing={1}>
            <Button variant="outlined" onClick={handleLinkDialogOpen}>
              插入链接
            </Button>
            <label htmlFor="upload-button">
              <input
                css={{ display: "none" }}
                accept="image/*"
                id="upload-button"
                type="file"
                disabled={imageUploading}
                onChange={handleImageSelect}
              />
              <Button
                variant="outlined"
                component="span"
                disabled={imageUploading}
                onClick={handleImageButtonClick}
              >
                插入图片
              </Button>
            </label>
            {imageUploading && <CircularProgress size="1.5rem" />}
          </Stack>
          <Box sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tab} onChange={(e, v) => setTab(v)}>
              <Tab label="编辑" />
              <Tab label="预览" />
            </Tabs>
          </Box>
          {tab === 0 ? (
            <>
              <TextField
                inputRef={textFieldRef}
                sx={{ mt: 2 }}
                minRows={6}
                maxRows={12}
                fullWidth
                multiline
                placeholder="内容"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Typography
                sx={{ mt: 1, mb: 2, fontStyle: "italic" }}
                variant="caption"
                component="div"
              >
                支持 HTML，Markdown 和 LaTeX
              </Typography>
            </>
          ) : (
            <div
              css={{
                padding: "2rem 0",
              }}
              className="markdown-body"
            >
              {rendering ? (
                <Typography sx={{ fontStyle: "italic" }} variant="caption">
                  预览加载中……
                </Typography>
              ) : (
                renderedContent
              )}
            </div>
          )}
          <Dialog
            fullWidth
            open={linkDialogOpen}
            onClose={handleLinkDialogClose}
          >
            <DialogTitle>插入链接</DialogTitle>
            <Box sx={{ py: 1, px: 3 }}>
              <TextField
                fullWidth
                label="链接名称"
                placeholder="百度"
                value={linkTitle}
                onChange={(e) => setLinkTitle(e.target.value)}
              />
              <TextField
                sx={{ mt: 2 }}
                required
                fullWidth
                label="链接内容"
                placeholder="https://www.baidu.com"
                value={linkHref}
                onChange={(e) => setLinkHref(e.target.value)}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleLinkDialogClose}>取消</Button>
              <Button onClick={handleLinkInsert}>确定</Button>
            </DialogActions>
          </Dialog>
        </MyDialog>
        <MyDialog
          open={postDialogOpen}
          scroll={tab === 0 ? "paper" : "body"}
          onClose={handlePostDialogClose}
          title={editingPostId ? "编辑回复" : "新回复"}
          okText="发布"
          okLoading={addPostLoading || updatePostLoading}
          onOk={handlePostSubmit}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button variant="outlined" onClick={handleLinkDialogOpen}>
              插入链接
            </Button>
            <label htmlFor="upload-button">
              <input
                css={{ display: "none" }}
                accept="image/*"
                id="upload-button"
                type="file"
                disabled={imageUploading}
                onChange={handleImageSelect}
              />
              <Button
                variant="outlined"
                component="span"
                disabled={imageUploading}
                onClick={handleImageButtonClick}
              >
                插入图片
              </Button>
            </label>
            {imageUploading && <CircularProgress size="1.5rem" />}
          </Stack>
          <Box sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tab} onChange={(e, v) => setTab(v)}>
              <Tab label="编辑" />
              <Tab label="预览" />
            </Tabs>
          </Box>
          {tab === 0 ? (
            <>
              <TextField
                inputRef={textFieldRef}
                sx={{ mt: 2 }}
                minRows={6}
                maxRows={12}
                fullWidth
                multiline
                placeholder="内容"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Typography
                sx={{ mt: 1, mb: 2, fontStyle: "italic" }}
                variant="caption"
                component="div"
              >
                支持 HTML，Markdown 和 LaTeX
              </Typography>
            </>
          ) : (
            <div
              css={{
                padding: "2rem 0",
              }}
              className="markdown-body"
            >
              {rendering ? (
                <Typography sx={{ fontStyle: "italic" }} variant="caption">
                  预览加载中……
                </Typography>
              ) : (
                renderedContent
              )}
            </div>
          )}
          <Dialog
            fullWidth
            open={linkDialogOpen}
            onClose={handleLinkDialogClose}
          >
            <DialogTitle>插入链接</DialogTitle>
            <Box sx={{ py: 1, px: 3 }}>
              <TextField
                fullWidth
                label="链接名称"
                placeholder="百度"
                value={linkTitle}
                onChange={(e) => setLinkTitle(e.target.value)}
              />
              <TextField
                sx={{ mt: 2 }}
                required
                fullWidth
                label="链接内容"
                placeholder="https://www.baidu.com"
                value={linkHref}
                onChange={(e) => setLinkHref(e.target.value)}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleLinkDialogClose}>取消</Button>
              <Button onClick={handleLinkInsert}>确定</Button>
            </DialogActions>
          </Dialog>
        </MyDialog>
      </Container>
    </>
  );
};

export default Thread;
