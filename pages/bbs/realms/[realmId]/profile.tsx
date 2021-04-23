import "react-image-crop/dist/ReactCrop.css";
import React, { useEffect, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import ReactCrop from "react-image-crop";
import MyAvatar from "components/Avatar";
import MyDialog from "components/Dialog";
import { useToast } from "components/Snackbar";
import Splash from "components/Splash";
import { useUser } from "lib/session";
import { getOSS } from "lib/oss";
import { authenticate } from "lib/auth";
import {
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

const initialCrop: ReactCrop.Crop = {
  aspect: 1,
  x: 0,
  y: 0,
};

const RealmProfile: React.FC = () => {
  const toast = useToast();
  const [user, authLoading, refetchUser] = useUser();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [crop, setCrop] = useState<ReactCrop.Crop>(initialCrop);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [updateAvatar] = useMutation<
    UpdateUserAvatar,
    UpdateUserAvatarVariables
  >(UPDATE_USER_AVATAR);
  const [updateRealmAvatar] = useMutation<
    UpdateRealmUserAvatar,
    UpdateRealmUserAvatarVariables
  >(UPDATE_REALM_USER_AVATAR);
  const [updateStatus] = useMutation<
    UpdateUserStatus,
    UpdateUserStatusVariables
  >(UPDATE_USER_STATUS);
  const [updateRealmStatus] = useMutation<
    UpdateRealmUserStatus,
    UpdateRealmUserStatusVariables
  >(UPDATE_REALM_USER_STATUS);

  const handleUploadDialogOpen = () => {
    setUploadDialogOpen(true);
  };

  const handleUploadDialogClose = (
    e: {},
    reason?: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason) {
      return;
    }

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

  const handleUpload = async () => {
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
                    id: user!.id,
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
            handleUploadDialogClose({});
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

  const handleSetStatus = async () => {
    if (!status) {
      toast("info", "请设置新状态");
      return;
    }

    try {
      user!.realmId === 1
        ? await updateStatus({
            variables: {
              id: user!.id,
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

  if (authLoading || !user) {
    return <Splash />;
  }

  return (
    <>
      <NextSeo title={`${user!.username} - 用户信息`} />
      <Container
        sx={{
          py: 8,
          "& > h2": {
            mt: 4,
          },
          "& > p": {
            mt: 1,
          },
        }}
        maxWidth="sm"
      >
        <Typography variant="h5" component="div">
          {user.realmName}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="h3" component="h1">
          用户信息
        </Typography>
        <Typography variant="h5" component="h2">
          头像
        </Typography>
        <MyAvatar
          sx={{ width: 150, height: 150, mt: 2, fontSize: "4rem" }}
          src={user.avatarUrl ?? undefined}
          alt={user.username}
          size="large"
        />
        <Button
          sx={{ mt: 2 }}
          variant="outlined"
          component="span"
          onClick={handleUploadDialogOpen}
        >
          {user.avatarUrl ? "更新头像" : "上传头像"}
        </Button>
        <Typography variant="h5" component="h2">
          状态
        </Typography>
        <Typography variant="body1">{user.status || "未设置状态"}</Typography>
        <Button
          sx={{ mt: 2 }}
          variant="outlined"
          component="span"
          onClick={handleStatusDialogOpen}
        >
          更新状态
        </Button>
        <Typography variant="h5" component="h2">
          用户名
        </Typography>
        <Typography variant="body1">{user.username}</Typography>
        <Typography variant="h5" component="h2">
          邮箱
        </Typography>
        <Typography variant="body1">{user.email}</Typography>
        <Typography variant="h5" component="h2">
          注册时间
        </Typography>
        <Typography variant="body1">
          {dayjs(user.createdAt).fromNow()}
        </Typography>
        <MyDialog
          open={uploadDialogOpen}
          onClose={handleUploadDialogClose}
          okText={user.avatarUrl ? "更新" : "上传"}
          okLoading={uploadLoading}
          onOk={handleUpload}
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
                minHeight={250}
                minWidth={250}
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
            <Button onClick={handleStatusDialogClose} color="primary">
              取消
            </Button>
            <Button onClick={handleSetStatus} color="primary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default RealmProfile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const auth = await authenticate(req);

  if (!auth) {
    return {
      redirect: {
        destination: `/auth/login?redirect_url=${req.url}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
