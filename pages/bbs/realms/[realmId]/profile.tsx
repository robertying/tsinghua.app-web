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
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import ReactCrop, { Crop } from "react-image-crop";
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

const initialCrop: Crop = {
  x: 0,
  y: 0,
  unit: "%",
  width: 100,
  height: 100,
};

const RealmProfile: React.FC<React.PropsWithChildren<unknown>> = () => {
  const toast = useToast();

  const router = useRouter();

  const [user, authLoading, refetchUser] = useUser();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>(initialCrop);
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
  const [updateRealmStatus, { loading: updateRealmStatusLoading }] =
    useMutation<UpdateRealmUserStatus, UpdateRealmUserStatusVariables>(
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

  const handleImageLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget;
    imageRef.current = img;

    const min = Math.min(img.height, img.width);
    setCrop({
      x: 0,
      y: 0,
      width: min,
      height: min,
      unit: "px",
    });
    return false;
  };

  const handleAvatarUpload = async () => {
    if (!previewCanvasRef.current || !imageRef.current) {
      toast("info", "??????????????????");
      return;
    }

    const canvas = previewCanvasRef.current;

    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          toast("error", "??????????????????");
          return;
        }
        if (blob.size > 5 * 1024 * 1024) {
          toast("warning", "?????????????????? 5 MB?????????????????????????????????????????????");
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
            toast("error", "????????????");
          } else {
            refetchUser();
            handleUploadDialogClose();
            toast("success", "????????????");
          }
        } catch (e) {
          toast("error", "???????????????" + (e as Error).toString());
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
      toast("info", "??????????????????");
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
      toast("success", "??????????????????");
    } catch {
      toast("error", "??????????????????");
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
      toast("error", "??????????????????");
    }
  }, [sessionError, toast]);

  useEffect(() => {
    if (deleteSessionError) {
      toast("error", "??????????????????");
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
            ? `${user.username} - ???????????? - ${user.realmName}`
            : "????????????"
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
          ????????????
        </Typography>
        <Typography variant="h5" component="h2">
          ?????????
        </Typography>
        <Typography variant="body1">{user?.username}</Typography>
        <Typography variant="h5" component="h2">
          ??????
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
            {user.avatarUrl ? "????????????" : "????????????"}
          </Button>
        )}
        <Typography variant="h5" component="h2">
          ??????
        </Typography>
        <Typography variant="body1">{user?.status || "???????????????"}</Typography>
        {user?.username && (
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            component="span"
            onClick={handleStatusDialogOpen}
          >
            ????????????
          </Button>
        )}
        <Typography variant="h5" component="h2">
          ??????
        </Typography>
        <Stack sx={{ mt: 2 }} direction="column" spacing={2}>
          {sessionLoading && <CircularProgress size="1.5rem" />}
          {sessionData?.session.map((s) => (
            <Stack key={s.id} direction="row" alignItems="center" spacing={2}>
              <Button onClick={() => handleDeleteSessionDialogOpen(s.id)}>
                ??????
              </Button>
              <Stack direction="column" spacing={1}>
                <Typography>{getDeviceDescription(s.description)}</Typography>
                <Typography variant="caption">{`????????? ${dayjs(
                  s.active_at
                ).fromNow()}???????????? ${dayjs(
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
          ??????????????????????????????
        </Typography>
        <Typography variant="h5" component="h2">
          ??????
        </Typography>
        <Typography variant="body1">{user?.email}</Typography>
        <Typography variant="h5" component="h2">
          ????????????
        </Typography>
        <Typography variant="body1">
          {dayjs(user?.createdAt).fromNow()}
        </Typography>
        <MyDialog
          open={uploadDialogOpen}
          onClose={handleUploadDialogClose}
          title={user?.avatarUrl ? "????????????" : "????????????"}
          okText={user?.avatarUrl ? "??????" : "??????"}
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
                crop={crop}
                aspect={1}
                keepSelection
                ruleOfThirds
                circularCrop
                onChange={setCrop}
              >
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    css={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={imageFile}
                    alt="????????????????????????"
                    onLoad={handleImageLoad}
                  />
                }
              </ReactCrop>
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
              ??????????????????
            </Button>
          </label>
        </MyDialog>
        <Dialog
          fullWidth
          open={statusDialogOpen}
          onClose={handleStatusDialogClose}
        >
          <DialogTitle>????????????</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              placeholder="?????????"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleStatusDialogClose}>??????</Button>
            <LoadingButton
              loading={updateStatusLoading || updateRealmStatusLoading}
              onClick={handleStatusSet}
            >
              ??????
            </LoadingButton>
          </DialogActions>
        </Dialog>
        <Dialog
          fullWidth
          open={deleteSessionDialogOpen}
          onClose={handleDeleteSessionDialogClose}
        >
          <DialogTitle>??????????????????</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ???????????????????????????????????????????????????????????????
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteSessionDialogClose}>??????</Button>
            <LoadingButton
              loading={deleteSessionLoading}
              onClick={handleSessionDelete}
            >
              ??????
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default RealmProfile;
