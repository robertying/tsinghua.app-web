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
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";

const DialogTransition = forwardRef(function DialogTransition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface MyDialogProps extends DialogProps {
  onClose?: (event: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onOk?: () => void;
  okText: string;
  okLoading?: boolean;
  title?: string;
}

const MyDialog: React.FC<MyDialogProps> = ({
  onOk,
  okText,
  okLoading,
  title,
  ...restProps
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      TransitionComponent={fullScreen ? DialogTransition : undefined}
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
          <IconButton onClick={restProps.onClose}>
            <Close />
          </IconButton>
        </Tooltip>
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        {okLoading ? (
          <CircularProgress size="2rem" />
        ) : (
          <Button onClick={onOk}>{okText}</Button>
        )}
      </Box>
      <DialogContent>{restProps.children}</DialogContent>
    </Dialog>
  );
};

export default MyDialog;
