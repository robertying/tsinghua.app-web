import React, { useEffect, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import MyAvatar from "components/Avatar";
import MyDialog from "components/Dialog";
import { useToast } from "components/Snackbar";
import { getOSS } from "lib/oss";
import { authenticate } from "lib/auth";
import { graphQLClient } from "lib/client";
import {
  GetUser,
  GetUserVariables,
  GetUser_user_by_pk,
  UpdateAvatar,
  UpdateAvatarVariables,
} from "api/types";
import { GET_USER, UPDATE_AVATAR } from "api/user";

interface ProfileProps {
  user: GetUser_user_by_pk;
}

const initialCrop: ReactCrop.Crop = {
  aspect: 1,
  unit: "%",
  width: 100,
  height: 100,
};

const Profile: React.FC<ProfileProps> = ({ user: ssrUser }) => {
  const toast = useToast();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [user, setUser] = useState(ssrUser);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [crop, setCrop] = useState<ReactCrop.Crop>(initialCrop);
  const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop | null>(
    null
  );
  const [uploadLoading, setUploadLoading] = useState(false);

  const [updateAvatar] = useMutation<UpdateAvatar, UpdateAvatarVariables>(
    UPDATE_AVATAR
  );

  const handleUploadDialogOpen = () => {
    setUploadDialogOpen(true);
  };

  const handleUploadDialogClose = () => {
    setUploadDialogOpen(false);
    setCrop(initialCrop);
    setImageFile(null);
  };

  const handleImageSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImageFile(reader.result as string | null)
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleImageLoad = (img: HTMLImageElement) => {
    imageRef.current = img;
  };

  const handleUpload = async () => {
    if (!completedCrop || !previewCanvasRef.current || !imageRef.current) {
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

          const name = `avatars/${tempFolder}/${uuid()}.png`;
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
            setUser(result.data!.update_user_by_pk!);
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

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imageRef.current) {
      return;
    }

    const image = imageRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

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
  }, [completedCrop]);

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
          size={150}
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
          {imageFile ? (
            <>
              <ReactCrop
                css={{ width: "100%", height: 0, paddingBottom: "100%" }}
                src={imageFile}
                onImageLoaded={handleImageLoad}
                crop={crop}
                minHeight={250}
                minWidth={250}
                keepSelection
                ruleOfThirds
                circularCrop
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
              />
              <canvas
                ref={previewCanvasRef}
                css={{ display: "none" }}
                style={{
                  width: Math.round(completedCrop?.width ?? 0),
                  height: Math.round(completedCrop?.height ?? 0),
                }}
              />
            </>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: 0,
                pb: "100%",
                border: "dashed #9e9e9e",
              }}
            />
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
    const response = await graphQLClient.request<GetUser, GetUserVariables>(
      GET_USER,
      { id: auth.id }
    );
    const user = response.user_by_pk!;

    return {
      props: {
        user,
      },
    };
  }
};
