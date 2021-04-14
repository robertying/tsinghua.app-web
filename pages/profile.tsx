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
import { getOSS } from "lib/oss";
import { authenticate } from "lib/auth";
import { graphQLClient } from "lib/client";
import {
  GetUserDetail,
  GetUserDetail_user_by_pk,
  GetUserDetailVariables,
  UpdateUserAvatar,
  UpdateUserAvatarVariables,
  UpdateUserStatus,
  UpdateUserStatusVariables,
} from "api/types";
import {
  GET_USER_DETAIL,
  UPDATE_USER_AVATAR,
  UPDATE_USER_STATUS,
} from "api/user";

interface ProfileProps {
  user: GetUserDetail_user_by_pk;
}

const initialCrop: ReactCrop.Crop = {
  aspect: 1,
  x: 0,
  y: 0,
};

const Profile: React.FC<ProfileProps> = ({ user: ssrUser }) => {
  const toast = useToast();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [user, setUser] = useState(ssrUser);
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
  const [updateStatus] = useMutation<
    UpdateUserStatus,
    UpdateUserStatusVariables
  >(UPDATE_USER_STATUS);

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

          const result = await updateAvatar({
            variables: {
              id: user.id,
              avatarUrl: name,
            },
          });
          if (result.errors) {
            toast("error", "上传失败");
          } else {
            setUser({ ...user, ...result.data!.update_user_by_pk! });
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
      const result = await updateStatus({
        variables: {
          id: user.id,
          status: status.trim(),
        },
      });

      setUser({ ...user, ...result.data!.update_user_by_pk! });
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

  return (
    <>
      <NextSeo title={`${user.username} - 用户信息`} />
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
        <Typography variant="h3" component="h1">
          用户信息
        </Typography>
        <Typography variant="h5" component="h2">
          头像
        </Typography>
        <MyAvatar
          sx={{ width: 150, height: 150, mt: 2, fontSize: "4rem" }}
          src={user.avatar_url ?? undefined}
          alt={user.username}
          size="large"
        />
        <Button
          sx={{ mt: 2 }}
          variant="outlined"
          component="span"
          onClick={handleUploadDialogOpen}
        >
          {user.avatar_url ? "更新头像" : "上传头像"}
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
          {dayjs(user.created_at).fromNow()}
        </Typography>
        <MyDialog
          open={uploadDialogOpen}
          onClose={handleUploadDialogClose}
          okText={user.avatar_url ? "更新" : "上传"}
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

export default Profile;

export const getServerSideProps: GetServerSideProps<ProfileProps> = async ({
  req,
}) => {
  const auth = await authenticate(req);

  if (!auth) {
    return {
      redirect: {
        destination: "/auth/login?redirect_url=/profile",
        permanent: false,
      },
    };
  } else {
    const response = await graphQLClient.request<
      GetUserDetail,
      GetUserDetailVariables
    >(GET_USER_DETAIL, { id: auth.id });
    const user = response.user_by_pk!;

    return {
      props: {
        user,
      },
    };
  }
};
