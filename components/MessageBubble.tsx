import { Paper, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

export interface MessageBubbleProps {
  position: "left" | "right";
  text: string;
  createdAt: Date | string;
}

const MessageBubble: React.FC<React.PropsWithChildren<MessageBubbleProps>> = ({
  position,
  text,
  createdAt,
}) => {
  return (
    <Stack
      sx={{
        maxWidth: "75%",
        alignSelf: position === "left" ? "flex-start" : "flex-end",
      }}
      direction="column"
      spacing={0.5}
    >
      <Paper sx={{ borderRadius: "1rem", px: 2, py: 1 }}>
        <Typography sx={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}>
          {text}
        </Typography>
      </Paper>
      <Typography
        sx={{ alignSelf: position === "left" ? "flex-start" : "flex-end" }}
        variant="caption"
      >
        {dayjs(createdAt).fromNow()}
      </Typography>
    </Stack>
  );
};

export default MessageBubble;
