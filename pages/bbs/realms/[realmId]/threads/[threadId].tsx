import "@primer/css/dist/markdown.css";
import "katex/dist/katex.css";
import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
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
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useMutation, useQuery } from "@apollo/client";
import { v4 as uuid } from "uuid";
import Post from "components/Post";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";
import MyFab from "components/Fab";
import MyDialog from "components/Dialog";
import { addApolloState, initializeApollo } from "lib/client";
import { useUser } from "lib/session";
import { getOSS } from "lib/oss";
import { markdownToReact } from "lib/markdown";
import NotFound from "pages/404";
import { GET_THREAD_BY_ID, UPDATE_THREAD } from "api/thread";
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
  GetThreadById,
  GetThreadByIdVariables,
  GetThreadById_thread_public_posts,
  GetThreadReactions,
  GetThreadReactionsVariables,
  reaction_emoji_enum,
  UpdatePost,
  UpdatePostVariables,
  UpdateThread,
  UpdateThreadVariables,
} from "api/types";
import { ADD_POST, UPDATE_POST } from "api/post";
import {
  ADD_POST_REACTION,
  ADD_THREAD_REACTION,
  DELETE_POST_REACTION,
  DELETE_THREAD_REACTION,
  GET_THREAD_REACTIONS,
} from "api/reaction";

const Thread: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [user] = useUser();

  const realmId = router.query.realmId as string;
  const threadId = router.query.threadId as string;

  const [threadDialogOpen, setThreadDialogOpen] = useState(false);
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [tab, setTab] = useState(0);
  const [
    renderedContent,
    setRenderedContent,
  ] = useState<React.ReactElement | null>(null);
  const [rendering, setRendering] = useState(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  const {
    data: threadData,
    error: threadError,
    refetch: refetchThread,
  } = useQuery<GetThreadById, GetThreadByIdVariables>(GET_THREAD_BY_ID, {
    variables: {
      id: threadId ? parseInt(threadId, 10) : 0,
    },
    skip: !threadId,
  });
  const thread = threadData?.thread_public[0];

  const {
    data: threadReactionData,
    refetch: refetchThreadReactions,
  } = useQuery<GetThreadReactions, GetThreadReactionsVariables>(
    GET_THREAD_REACTIONS,
    {
      variables: {
        threadId: threadId ? parseInt(threadId, 10) : 0,
        userId: user?.id ?? "",
      },
      skip: !threadId,
    }
  );
  const threadReactions = threadReactionData?.thread_public[0];

  const [
    updateThread,
    { error: updateThreadError, loading: updateThreadLoading },
  ] = useMutation<UpdateThread, UpdateThreadVariables>(UPDATE_THREAD);
  const [
    addPost,
    { error: addPostError, loading: addPostLoading },
  ] = useMutation<AddPost, AddPostVariables>(ADD_POST);
  const [
    updatePost,
    { error: updatePostError, loading: updatePostLoading },
  ] = useMutation<UpdatePost, UpdatePostVariables>(UPDATE_POST);

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

  const handleThreadDialogClose = (
    event: {},
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason) {
      return;
    }

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

  const handlePostDialogClose = (
    event: {},
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason) {
      return;
    }

    setEditingPostId(null);
    setPostDialogOpen(false);
    setImageUploading(false);
    setContent("");
    setTab(0);
    setRenderedContent(null);
    setRendering(false);
  };

  const handleLinkDialogOpen = () => {
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

  const handleImageSelect: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setImageUploading(true);
      try {
        const { oss, tempFolder } = await getOSS();

        const name = `images/${tempFolder}/${uuid()}`;
        await oss.put(name, file);

        setContent(content + `\n![上传图片](${name})\n`);
        toast("success", "图片上传成功");
      } catch (e) {
        toast("error", "图片上传失败：" + e.toString());
      } finally {
        setImageUploading(false);
      }
    }

    e.target.value = "";
  };

  const handleInsertLink = () => {
    if (!linkHref.trim()) {
      return;
    }

    setContent(
      content + `[${linkTitle.trim() || linkHref.trim()}](${linkHref.trim()})`
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
        threadId: thread!.id!,
        title: title.trim(),
        content: content.trim(),
      },
    });

    handleThreadDialogClose({});
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
          userId: user!.id,
          threadId: thread?.id!,
          content: content.trim(),
        },
      });
      toast("success", "回复发表成功");

      const newPostId = result.data?.insert_post_one?.id;
      newPostId && router.replace(router.asPath + `#post-${newPostId}`);
    }

    handlePostDialogClose({});
    await refetchThread({
      id: thread?.id!,
    });
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
            userId: user!.id,
            threadId: thread!.id!,
            name,
          },
        });
      } else {
        deleteThreadReaction({
          variables: {
            userId: user!.id,
            threadId: thread!.id!,
            name,
          },
        });
      }
    } else {
      if (action === "add") {
        addPostReaction({
          variables: {
            userId: user!.id,
            postId: postId!,
            name,
          },
        });
      } else {
        deletePostReaction({
          variables: {
            userId: user!.id,
            postId: postId!,
            name,
          },
        });
      }
    }

    await refetchThreadReactions();
  };

  const handleEditThread = async () => {
    setTitle(thread?.title ?? "");
    setContent(thread?.content ?? "");
    handleThreadDialogOpen();
  };

  const handleEditPost = async (post: GetThreadById_thread_public_posts) => {
    setEditingPostId(post.id);
    setContent(post.content ?? "");
    handlePostDialogOpen();
  };

  useEffect(() => {
    if (threadError) {
      toast("error", "帖子加载失败");
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
        const result = await markdownToReact(content);
        setRenderedContent(result);
        setRendering(false);
      })();
    }
  }, [content, tab]);

  if (router.isFallback) {
    return <Splash />;
  }

  if (!thread) {
    return <NotFound />;
  }

  return (
    <>
      <NextSeo
        title={`${thread.title} - ${thread.topic!.name} - ${
          thread.realm!.name
        }`}
      />
      <Container sx={{ py: 8 }} maxWidth="sm">
        {user && (
          <MyFab onClick={handlePostDialogOpen}>
            <Add />
          </MyFab>
        )}
        <Breadcrumbs>
          <Link href="/" passHref>
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
          <Chip label={thread.topic?.name} />
          <Typography sx={{ ml: 1 }} variant="h5" component="h1">
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
              <MenuItem value={thread.topic?.id}>{thread.topic?.name}</MenuItem>
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
            <TextField
              sx={{ my: 2 }}
              minRows={10}
              maxRows={20}
              fullWidth
              multiline
              placeholder="内容"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            <div
              css={{
                padding: "2rem 1rem",
              }}
              className="markdown-body"
            >
              {rendering ? (
                <Typography>预览加载中……</Typography>
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
              <Button onClick={handleLinkDialogClose} color="primary">
                取消
              </Button>
              <Button onClick={handleInsertLink} color="primary">
                确定
              </Button>
            </DialogActions>
          </Dialog>
        </MyDialog>
        <MyDialog
          open={postDialogOpen}
          scroll={tab === 0 ? "paper" : "body"}
          onClose={handlePostDialogClose}
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
            <TextField
              sx={{ my: 2 }}
              minRows={10}
              maxRows={20}
              fullWidth
              multiline
              placeholder="内容"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            <div
              css={{
                padding: "2rem 1rem",
              }}
              className="markdown-body"
            >
              {rendering ? (
                <Typography>预览加载中……</Typography>
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
              <Button onClick={handleLinkDialogClose} color="primary">
                取消
              </Button>
              <Button onClick={handleInsertLink} color="primary">
                确定
              </Button>
            </DialogActions>
          </Dialog>
        </MyDialog>
      </Container>
    </>
  );
};

export default Thread;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();

  if (params?.threadId) {
    await client.query<GetThreadById, GetThreadByIdVariables>({
      query: GET_THREAD_BY_ID,
      variables: {
        id: parseInt(params?.threadId as string, 10),
      },
    });
    await client.query<GetThreadReactions, GetThreadReactionsVariables>({
      query: GET_THREAD_REACTIONS,
      variables: {
        threadId: parseInt(params?.threadId as string, 10),
        userId: "",
      },
    });
  }

  return addApolloState(client, {
    props: {},
    revalidate: 1,
  });
};
