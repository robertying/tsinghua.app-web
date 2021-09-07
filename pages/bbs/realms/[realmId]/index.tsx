import "@primer/css/dist/markdown.css";
import "katex/dist/katex.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Add, Refresh, Settings, SwapHoriz } from "@material-ui/icons";
import { v4 as uuid } from "uuid";
import {
  ADD_REALM,
  GET_REALM,
  GET_REALM_DETAILS_INVITATION_CODE,
  UPDATE_REALM,
} from "api/realm";
import { ADD_THREAD } from "api/thread";
import { GET_USER_REALMS } from "api/user";
import {
  AddRealm,
  AddRealmVariables,
  AddThread,
  AddThreadVariables,
  GetRealm,
  GetRealmVariables,
  GetRealmDetailsInvitationCode,
  GetRealmDetailsInvitationCodeVariables,
  GetUserRealms,
  GetUserRealmsVariables,
  UpdateRealm,
  UpdateRealmVariables,
} from "api/types";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";
import ThreadCard from "components/ThreadCard";
import MyDialog from "components/Dialog";
import MyFab from "components/Fab";
import { getOSS } from "lib/oss";
import { markdownToReact } from "lib/markdown";
import { useBeforeUnloadAlert } from "lib/edit";
import { useUser } from "lib/session";
import NotFound from "pages/404";

const generateRealmCode = () => {
  return Math.floor(1000 + Math.random() * 9000)
    .toString()
    .substr(0, 4);
};

const Realm: React.FC = () => {
  const toast = useToast();

  const router = useRouter();
  const realmId = (
    router.pathname.startsWith("/bbs/realms") ? router.query.realmId : "1"
  ) as string | undefined;
  const topicId = router.query.topic as string | undefined;

  const [user, authLoading] = useUser();

  const textFieldRef = useRef<HTMLTextAreaElement>(null);

  const [threadDialogOpen, setThreadDialogOpen] = useState(false);
  const [topic, setTopic] = useState("");
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
  const [realmDialogOpen, setRealmDialogOpen] = useState(false);
  const [realmName, setRealmName] = useState("");
  const [realmDescription, setRealmDescription] = useState("");
  const [realmTopics, setRealmTopics] = useState<Set<string>>(new Set());
  const [realmPrivate, setRealmPrivate] = useState(false);
  const [realmCode, setRealmCode] = useState(generateRealmCode());
  const [editingRealm, setEditingRealm] = useState(false);
  const [topicDialogOpen, setTopicDialogOpen] = useState(false);
  const [newTopic, setNewTopic] = useState("");
  const [switchButton, setSwitchButton] = useState<HTMLButtonElement | null>(
    null
  );

  const {
    data: realmData,
    error: realmError,
    loading: realmLoading,
    refetch: refetchRealm,
  } = useQuery<GetRealm, GetRealmVariables>(GET_REALM, {
    variables: {
      id: parseInt(realmId!, 10),
    },
    skip: !realmId,
  });
  const realm = realmData?.realm_public?.[0]!;

  const { data: realmDetailsData, refetch: refetchRealmDetails } = useQuery<
    GetRealmDetailsInvitationCode,
    GetRealmDetailsInvitationCodeVariables
  >(GET_REALM_DETAILS_INVITATION_CODE, {
    variables: {
      id: parseInt(realmId!, 10),
    },
    skip: !user || !realmId,
  });
  const realmDetails = realmDetailsData?.realm_by_pk;

  const { data: userRealmData } = useQuery<
    GetUserRealms,
    GetUserRealmsVariables
  >(GET_USER_REALMS, {
    variables: {
      id: user?.id!,
    },
    skip: !user,
  });

  const [addThread, { error: addThreadError, loading: addThreadLoading }] =
    useMutation<AddThread, AddThreadVariables>(ADD_THREAD);
  const [addRealm, { error: addRealmError, loading: addRealmLoading }] =
    useMutation<AddRealm, AddRealmVariables>(ADD_REALM);
  const [
    updateRealm,
    { error: updateRealmError, loading: updateRealmLoading },
  ] = useMutation<UpdateRealm, UpdateRealmVariables>(UPDATE_REALM);

  const handleRealmChange = (id: number) => {
    handleSwitchMenuClose();
    router.push(`/bbs/realms/${id}`);
  };

  const handleThreadDialogOpen = () => {
    setThreadDialogOpen(true);
  };

  const handleThreadDialogClose = () => {
    setThreadDialogOpen(false);
    setImageUploading(false);
    setTopic("");
    setTitle("");
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
        toast("error", "图片上传失败：" + (e as Error).toString());
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
    if (!topic) {
      toast("info", "请选择话题分类");
      return;
    }
    if (!title.trim()) {
      toast("info", "请填写标题");
      return;
    }
    if (!content.trim()) {
      toast("info", "请填写内容");
      return;
    }

    await addThread({
      variables: {
        userId: user?.id!,
        realmId: realm.id!,
        topicId: topic === "null" ? null : parseInt(topic, 10),
        title: title.trim(),
        content: content.trim(),
      },
    });

    handleThreadDialogClose();
    toast("success", "帖子发表成功");
    await refetchRealm();
  };

  const handleRealmDialogOpen = () => {
    handleSwitchMenuClose();
    setRealmDialogOpen(true);
  };

  const handleRealmDialogClose = () => {
    setRealmDialogOpen(false);
    setRealmName("");
    setRealmDescription("");
    setRealmPrivate(false);
    setRealmCode(generateRealmCode());
    setEditingRealm(false);
  };

  const handleTopicDialogOpen = () => {
    setTopicDialogOpen(true);
  };

  const handleTopicDialogClose = (
    event: {},
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason) {
      return;
    }

    setTopicDialogOpen(false);
    setNewTopic("");
  };

  const handleTopicAdd = () => {
    if (!newTopic.trim()) {
      toast("info", "请输入话题名");
      return;
    }

    setRealmTopics(realmTopics.add(newTopic.trim()));
    handleTopicDialogClose({});
  };

  const handleRealmEdit = () => {
    if (!realmDetails) {
      return;
    }

    handleSwitchMenuClose();
    setEditingRealm(true);
    setRealmName(realm.name!);
    setRealmDescription(realm.description!);
    setRealmPrivate(realm.private!);
    setRealmCode(realmDetails.invitation_code ?? generateRealmCode());
    setRealmTopics(new Set(realmDetails.topics.map((t) => t.name)));

    handleRealmDialogOpen();
  };

  const handleRealmSubmit = async () => {
    if (!realmName.trim()) {
      toast("info", "请填写领域名");
      return;
    }
    if (!realmDescription.trim()) {
      toast("info", "请填写领域简介");
      return;
    }

    if (editingRealm) {
      await updateRealm({
        variables: {
          id: realm.id!,
          description: realmDescription.trim(),
          private: realmPrivate,
          invitationCode: realmPrivate ? realmCode : null,
          topics: Array.from(realmTopics).map((t) => ({
            realm_id: realm.id,
            name: t,
          })),
        },
      });

      toast("success", "领域更新成功");
      refetchRealm();
      refetchRealmDetails();
    } else {
      const { data: newRealmData } = await addRealm({
        variables: {
          adminId: user?.id!,
          name: realmName.trim(),
          description: realmDescription.trim(),
          private: realmPrivate,
          invitationCode: realmPrivate ? realmCode : null,
        },
      });

      toast("success", "领域创建成功，跳转中……");

      setTimeout(() => {
        router.push(
          `/bbs/realms/${newRealmData?.insert_realm_one?.id}/enter?admin=true`
        );
      }, 1000);
    }

    handleRealmDialogClose();
  };

  const handleSwitchMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSwitchButton(e.currentTarget);
  };

  const handleSwitchMenuClose = () => {
    setSwitchButton(null);
  };

  useEffect(() => {
    if (!authLoading && realm?.private) {
      if (!user) {
        router.push(`/auth/login?redirect_url=${router.asPath}`);
        return;
      }
      if (!user.username) {
        router.replace(`${router.asPath}/enter`);
      }
    }
  }, [authLoading, router, user, realm]);

  useEffect(() => {
    if (realmError) {
      toast("error", "领域加载失败");
    }
  }, [realmError, toast]);

  useEffect(() => {
    if (addThreadError) {
      toast("error", "帖子发表失败");
    }
  }, [addThreadError, toast]);

  useEffect(() => {
    if (addRealmError) {
      toast("error", "领域创建失败");
    }
  }, [addRealmError, toast]);

  useEffect(() => {
    if (updateRealmError) {
      toast("error", "领域更新失败");
    }
  }, [updateRealmError, toast]);

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

  useBeforeUnloadAlert(realmDialogOpen || threadDialogOpen);

  if (!realmId || realmLoading) {
    return <Splash />;
  }

  if (!realmLoading && !realm) {
    return <NotFound />;
  }

  const topicName = topicId
    ? realm.topics.find((t) => t.id.toString() === topicId)?.name
    : undefined;

  return (
    <>
      <NextSeo
        title={topicName ? `${topicName} - ${realm.name!}` : realm.name!}
        description={realm.description!}
      />
      <Container
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        maxWidth="sm"
      >
        {user && (
          <>
            <Tooltip title="切换领域">
              <MyFab onClick={handleSwitchMenuOpen}>
                <SwapHoriz />
              </MyFab>
            </Tooltip>
            <Menu
              sx={{
                mt: 2,
                maxHeight: "50vh",
              }}
              anchorEl={switchButton}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={switchButton ? true : false}
              onClose={handleSwitchMenuClose}
            >
              {realmDetails?.admin_id && realmDetails?.admin_id === user?.id && (
                <MenuItem onClick={handleRealmEdit}>
                  <Settings />
                  <Typography sx={{ ml: 1 }} component="span">
                    领域设置
                  </Typography>
                </MenuItem>
              )}
              <MenuItem onClick={handleRealmDialogOpen}>
                <Add />
                <Typography sx={{ ml: 1 }} component="span">
                  新领域
                </Typography>
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              {userRealmData?.user_by_pk?.realm_users.map((r) => (
                <MenuItem
                  key={r.realm!.id!}
                  onClick={() => handleRealmChange(r.realm!.id!)}
                >
                  {r.realm!.name}
                </MenuItem>
              ))}
            </Menu>
            {user.username && (
              <Tooltip title="新帖子">
                <MyFab onClick={handleThreadDialogOpen}>
                  <Add />
                </MyFab>
              </Tooltip>
            )}
          </>
        )}
        <Typography sx={{ fontWeight: 500 }} variant="h4" component="h1">
          {realm.name}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="body1" component="h2">
          {realm.description}
        </Typography>
        <Stack
          sx={{ width: "100%", mt: 4 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1}>
            <Link href={`/bbs/realms/${realmId}`} passHref>
              <Chip
                label="全部"
                variant={topicId ? "outlined" : "filled"}
                clickable
                component="a"
              />
            </Link>
            {realm.topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/bbs/realms/${realmId}?topic=${topic.id}`}
                passHref
              >
                <Chip
                  label={topic.name}
                  variant={
                    topicId === topic.id.toString() ? "filled" : "outlined"
                  }
                  clickable
                  component="a"
                />
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            mt: 2,
          }}
          spacing={1}
        >
          {realm.threads.length === 0 ? (
            <Card sx={{ textAlign: "center", p: 6 }}>
              <Typography
                sx={{ fontStyle: "italic" }}
                variant="subtitle1"
                component="div"
              >
                未找到相关帖子
              </Typography>
            </Card>
          ) : (
            realm.threads
              .filter((thread) =>
                topicId ? thread.topic?.id.toString() === topicId : true
              )
              .map((thread) => <ThreadCard key={thread.id} {...thread} />)
          )}
        </Stack>
        <MyDialog
          open={threadDialogOpen}
          scroll={tab === 0 ? "paper" : "body"}
          onClose={handleThreadDialogClose}
          title="新帖子"
          okText="发布"
          okLoading={addThreadLoading}
          onOk={handleThreadSubmit}
        >
          <Stack direction="row" spacing={1}>
            <Select
              variant="outlined"
              size="small"
              displayEmpty
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <MenuItem disabled value="">
                选择话题
              </MenuItem>
              <MenuItem value="null">无</MenuItem>
              {realm.topics.map((topic) => (
                <MenuItem key={topic.id} value={topic.id}>
                  {topic.name}
                </MenuItem>
              ))}
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
          open={realmDialogOpen}
          onClose={handleRealmDialogClose}
          title={editingRealm ? "更新领域" : "新领域"}
          okText={editingRealm ? "更新" : "创建"}
          okLoading={addRealmLoading || updateRealmLoading}
          onOk={handleRealmSubmit}
        >
          <Stack sx={{ mb: 3 }} direction="column" spacing={2}>
            <TextField
              label="领域名"
              fullWidth
              disabled={editingRealm}
              value={realmName}
              onChange={(e) => setRealmName(e.target.value)}
            />
            <TextField
              label="领域简介"
              fullWidth
              value={realmDescription}
              multiline
              minRows={3}
              onChange={(e) => setRealmDescription(e.target.value)}
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={realmPrivate}
                    onChange={(e) => setRealmPrivate(e.target.checked)}
                  />
                }
                label="私有领域"
              />
              {realmPrivate && (
                <>
                  <TextField
                    sx={{
                      width: "5rem",
                      "& > div": { letterSpacing: "0.25rem" },
                    }}
                    size="small"
                    label="邀请码"
                    value={realmCode}
                    onChange={() => {}}
                  />
                  <Tooltip title="更换邀请码" placement="right">
                    <IconButton
                      size="small"
                      onClick={() => setRealmCode(generateRealmCode())}
                    >
                      <Refresh />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </Stack>
            {editingRealm && (
              <Stack direction="row" spacing={1}>
                {Array.from(realmTopics).map((topic) => (
                  <Chip key={topic} label={topic} />
                ))}
                <Chip
                  icon={<Add />}
                  label="新话题"
                  onClick={handleTopicDialogOpen}
                />
              </Stack>
            )}
          </Stack>
          <Dialog
            fullWidth
            open={topicDialogOpen}
            onClose={handleTopicDialogClose}
          >
            <DialogTitle>新话题</DialogTitle>
            <Box sx={{ py: 1, px: 3 }}>
              <TextField
                autoFocus
                fullWidth
                label="话题名"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleTopicDialogClose}>取消</Button>
              <Button onClick={handleTopicAdd}>确定</Button>
            </DialogActions>
          </Dialog>
        </MyDialog>
      </Container>
    </>
  );
};

export default Realm;
