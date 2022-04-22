import { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Box,
  useMediaQuery,
  DialogProps,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import { Close } from "@mui/icons-material";

const DialogTransition = forwardRef(function DialogTransition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface MyDialogProps extends DialogProps {
  onClose?: () => void;
  onOk?: () => void;
  okText: string;
  okLoading?: boolean;
  title?: string;
}

const MyDialog: React.FC<React.PropsWithChildren<MyDialogProps>> = ({
  onClose,
  onOk,
  okText,
  okLoading,
  title,
  children,
  ...restProps
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose: DialogProps["onClose"] = (e, reason) => {
    if (reason) {
      return;
    }

    onClose?.();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      TransitionComponent={fullScreen ? DialogTransition : undefined}
      onClose={handleClose}
      {...restProps}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
        component="nav"
      >
        <Tooltip title="关闭" placement="right">
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Tooltip>
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        {okLoading ? (
          <CircularProgress sx={{ mr: 1 }} size="1.5rem" />
        ) : (
          <Button onClick={onOk}>{okText}</Button>
        )}
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default MyDialog;
