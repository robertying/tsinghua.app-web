import "react-image-crop/dist/ReactCrop.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { useMutation, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import ReactCrop from "react-image-crop";
import MyAvatar from "components/Avatar";
import MyDialog from "components/Dialog";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";
import { useAuthRoute, useUser } from "lib/session";
import { getOSS } from "lib/oss";
import { getDeviceDescription } from "lib/format";
import {
  DeleteSession,
  DeleteSessionVariables,
  GetSessions,
  GetSessionsVariables,
  UpdateRealmUserAvatar,
  UpdateRealmUserAvatarVariables,
  UpdateRealmUserStatus,
  UpdateRealmUserStatusVariables,
  UpdateUserAvatar,
  UpdateUserAvatarVariables,
  UpdateUserStatus,
  UpdateUserStatusVariables,
} from "api/types";
import {
  UPDATE_REALM_USER_AVATAR,
  UPDATE_REALM_USER_STATUS,
  UPDATE_USER_AVATAR,
  UPDATE_USER_STATUS,
} from "api/user";
import { DELETE_SESSION, GET_SESSIONS } from "api/session";

const initialCrop: ReactCrop.Crop = {
  aspect: 1,
  x: 0,
  y: 0,
};

const RealmProfile: React.FC = () => {
  const toast = useToast();

  const router = useRouter();

  const [user, authLoading, refetchUser] = useUser();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [crop, setCrop] = useState<ReactCrop.Crop>(initialCrop);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [deleteSessionDialogOpen, setDeleteSessionDialogOpen] = useState(false);
  const [deletingSessionId, setDeletingSessionId] = useState<uuid | null>(null);

  const {
    data: sessionData,
    error: sessionError,
    loading: sessionLoading,
  } = useQuery<GetSessions, GetSessionsVariables>(GET_SESSIONS, {
    variables: {
      userId: user?.id!,
    },
    skip: !user,
  });

  const [updateAvatar] = useMutation<
    UpdateUserAvatar,
    UpdateUserAvatarVariables
  >(UPDATE_USER_AVATAR);
  const [updateRealmAvatar] = useMutation<
    UpdateRealmUserAvatar,
    UpdateRealmUserAvatarVariables
  >(UPDATE_REALM_USER_AVATAR);
  const [updateStatus, { loading: updateStatusLoading }] = useMutation<
    UpdateUserStatus,
    UpdateUserStatusVariables
  >(UPDATE_USER_STATUS);
  const [
    updateRealmStatus,
    { loading: updateRealmStatusLoading },
  ] = useMutation<UpdateRealmUserStatus, UpdateRealmUserStatusVariables>(
    UPDATE_REALM_USER_STATUS
  );

  const [
    deleteSession,
    { error: deleteSessionError, loading: deleteSessionLoading },
  ] = useMutation<DeleteSession, DeleteSessionVariables>(DELETE_SESSION);

  const handleUploadDialogOpen = () => {
    setUploadDialogOpen(true);
  };

  const handleUploadDialogClose = () => {
    setUploadDialogOpen(false);
    setCrop(initialCrop);
    setImageFile(null);
  };

  const handleStatusDialogOpen = () => {
    setStatusDialogOpen(true);
  };

  const handleStatusDialogClose = () => {
    setStatusDialogOpen(false);
    setStatus("");
  };

  const handleDeleteSessionDialogOpen = (id: uuid) => {
    setDeletingSessionId(id);
    setDeleteSessionDialogOpen(true);
  };

  const handleDeleteSessionDialogClose = () => {
    setDeleteSessionDialogOpen(false);
    setDeletingSessionId(null);
  };

  const handleImageSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImageFile(reader.result as string | null)
      );
      reader.readAsDataURL(e.target.files[0]);
    }

    e.target.value = "";
  };

  const handleImageLoad = (img: HTMLImageElement) => {
    imageRef.current = img;

    const min = Math.min(img.height, img.width);
    setCrop({
      aspect: 1,
      x: 0,
      y: 0,
      width: min,
      height: min,
    });
    return false;
  };

  const handleAvatarUpload = async () => {
    if (!previewCanvasRef.current || !imageRef.current) {
      toast("info", "请先选择图片");
      return;
    }

    const canvas = previewCanvasRef.current;

    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          toast("error", "图片处理失败");
          return;
        }
        if (blob.size > 5 * 1024 * 1024) {
          toast("warning", "上传大小超过 5 MB，请重新选择图片或缩小裁剪范围");
          return;
        }

        setUploadLoading(true);
        try {
          const { oss, tempFolder } = await getOSS();

          const name = `avatars/${tempFolder}/${uuid()}`;
          await oss.put(name, blob);

          const result =
            user!.realmId === 1
              ? await updateAvatar({
                  variables: {
                    userId: user!.id,
                    avatarUrl: name,
                  },
                })
              : await updateRealmAvatar({
                  variables: {
                    userId: user!.id,
                    realmId: user!.realmId!,
                    avatarUrl: name,
                  },
                });
          if (result.errors) {
            toast("error", "上传失败");
          } else {
            refetchUser();
            handleUploadDialogClose();
            toast("success", "上传成功");
          }
        } catch (e) {
          toast("error", "上传失败：" + e.toString());
        } finally {
          setUploadLoading(false);
        }
      },
      "image/png",
      1
    );
  };

  const handleStatusSet = async () => {
    if (!status.trim()) {
      toast("info", "请设置新状态");
      return;
    }

    try {
      user!.realmId === 1
        ? await updateStatus({
            variables: {
              userId: user!.id,
              status: status.trim(),
            },
          })
        : await updateRealmStatus({
            variables: {
              userId: user!.id,
              realmId: user!.realmId!,
              status: status.trim(),
            },
          });

      refetchUser();
      handleStatusDialogClose();
      toast("success", "状态设置成功");
    } catch {
      toast("error", "状态设置失败");
    }
  };

  const handleSessionDelete = async () => {
    await deleteSession({ variables: { id: deletingSessionId! } });
    router.reload();
  };

  useAuthRoute();

  useEffect(() => {
    if (!previewCanvasRef.current || !imageRef.current) {
      return;
    }

    const image = imageRef.current;
    const canvas = previewCanvasRef.current;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width! * pixelRatio;
    canvas.height = crop.height! * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x! * scaleX,
      crop.y! * scaleY,
      crop.width! * scaleX,
      crop.height! * scaleY,
      0,
      0,
      crop.width!,
      crop.height!
    );
  }, [crop]);

  useEffect(() => {
    if (sessionError) {
      toast("error", "会话获取失败");
    }
  }, [sessionError, toast]);

  useEffect(() => {
    if (deleteSessionError) {
      toast("error", "会话移除失败");
    }
  }, [deleteSessionError, toast]);

  if (authLoading) {
    return <Splash />;
  }

  return (
    <>
      <NextSeo
        title={
          user?.username
            ? `${user.username} - 用户信息 - ${user.realmName}`
            : "用户信息"
        }
      />
      <Container
        sx={{
          py: 10,
          "& > h2": {
            mt: 4,
            fontWeight: "500",
          },
          "& > p": {
            mt: 1,
          },
        }}
        maxWidth="sm"
      >
        <Typography variant="h5" component="div">
          {user?.realmName}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="h3" component="h1">
          用户信息
        </Typography>
        <Typography variant="h5" component="h2">
          用户名
        </Typography>
        <Typography variant="body1">{user?.username}</Typography>
        <Typography variant="h5" component="h2">
          头像
        </Typography>
        <MyAvatar
          sx={{ width: 150, height: 150, mt: 2, fontSize: "4rem" }}
          src={user?.avatarUrl ?? undefined}
          alt={user?.username}
          size="large"
        />
        {user?.username && (
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            component="span"
            onClick={handleUploadDialogOpen}
          >
            {user.avatarUrl ? "更新头像" : "上传头像"}
          </Button>
        )}
        <Typography variant="h5" component="h2">
          状态
        </Typography>
        <Typography variant="body1">{user?.status || "未设置状态"}</Typography>
        {user?.username && (
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            component="span"
            onClick={handleStatusDialogOpen}
          >
            更新状态
          </Button>
        )}
        <Typography variant="h5" component="h2">
          会话
        </Typography>
        <Stack sx={{ mt: 2 }} direction="column" spacing={2}>
          {sessionLoading && <CircularProgress size="1.5rem" />}
          {sessionData?.session.map((s) => (
            <Stack key={s.id} direction="row" alignItems="center" spacing={2}>
              <Button onClick={() => handleDeleteSessionDialogOpen(s.id)}>
                移除
              </Button>
              <Stack direction="column" spacing={1}>
                <Typography>{getDeviceDescription(s.description)}</Typography>
                <Typography variant="caption">{`活跃于 ${dayjs(
                  s.active_at
                ).fromNow()}；登录于 ${dayjs(
                  s.created_at
                ).fromNow()}`}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Typography
          sx={{ fontStyle: "italic", mt: 2 }}
          variant="caption"
          component="div"
        >
          设备信息可能不准确。
        </Typography>
        <Typography variant="h5" component="h2">
          邮箱
        </Typography>
        <Typography variant="body1">{user?.email}</Typography>
        <Typography variant="h5" component="h2">
          注册时间
        </Typography>
        <Typography variant="body1">
          {dayjs(user?.createdAt).fromNow()}
        </Typography>
        <MyDialog
          open={uploadDialogOpen}
          onClose={handleUploadDialogClose}
          title={user?.avatarUrl ? "更新头像" : "上传头像"}
          okText={user?.avatarUrl ? "更新" : "上传"}
          okLoading={uploadLoading}
          onOk={handleAvatarUpload}
        >
          {imageFile && (
            <>
              <ReactCrop
                css={{
                  width: "100%",
                  "& > div:first-of-type, & > div:first-of-type > img": {
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                }}
                imageStyle={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={imageFile}
                imageAlt="待裁剪的头像图片"
                onImageLoaded={handleImageLoad}
                crop={crop}
                keepSelection
                ruleOfThirds
                circularCrop
                onChange={setCrop}
              />
              <canvas
                ref={previewCanvasRef}
                style={{
                  display: "none",
                  width: Math.round(crop.width ?? 0),
                  height: Math.round(crop.height ?? 0),
                }}
              />
            </>
          )}
          <label htmlFor="upload-button">
            <input
              css={{ display: "none" }}
              accept="image/*"
              id="upload-button"
              type="file"
              onChange={handleImageSelect}
            />
            <Button sx={{ mt: 2, mb: 4 }} variant="outlined" component="span">
              选择本地图片
            </Button>
          </label>
        </MyDialog>
        <Dialog
          fullWidth
          open={statusDialogOpen}
          onClose={handleStatusDialogClose}
        >
          <DialogTitle>更新状态</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              placeholder="新状态"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleStatusDialogClose}>取消</Button>
            <LoadingButton
              loading={updateStatusLoading || updateRealmStatusLoading}
              onClick={handleStatusSet}
            >
              确定
            </LoadingButton>
          </DialogActions>
        </Dialog>
        <Dialog
          fullWidth
          open={deleteSessionDialogOpen}
          onClose={handleDeleteSessionDialogClose}
        >
          <DialogTitle>移除此会话？</DialogTitle>
          <DialogContent>
            <DialogContentText>
              此操作会使你的账号从该会话对应的设备登出。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteSessionDialogClose}>取消</Button>
            <LoadingButton
              loading={deleteSessionLoading}
              onClick={handleSessionDelete}
            >
              确定
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default RealmProfile;
