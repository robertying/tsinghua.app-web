import { useState } from "react";
import {
  IconButton,
  Popover,
  Chip,
  useMediaQuery,
  Box,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AddReactionOutlined } from "@mui/icons-material";
import { ReactionEmojiEnum } from "api/types/graphql";

const emojis = {
  thumbs_up: "👍",
  thumbs_down: "👎",
  grinning_face_with_smiling_eyes: "😄",
  party_popper: "🎉",
  confused_face: "😕",
  red_heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export interface ReactionSelectProps {
  reactions?: {
    [_ in keyof typeof emojis]?: number | null;
  };
  myReactions?: {
    [_ in keyof typeof emojis]?: boolean;
  };
  onReact?: (emojiName: ReactionEmojiEnum, action: "add" | "delete") => void;
}

const ReactionSelect: React.FC<
  React.PropsWithChildren<ReactionSelectProps>
> = ({ reactions, myReactions, onReact }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {reactions &&
          (Object.entries(emojis) as [ReactionEmojiEnum, string][]).map(
            ([name, emoji]) =>
              reactions[name] ? (
                <Chip
                  key={name}
                  sx={{
                    fontSize: "1rem",
                    mt: 0.5,
                    mx: 0.5,
                  }}
                  variant={myReactions?.[name] ? "filled" : "outlined"}
                  onClick={() =>
                    onReact?.(name, myReactions?.[name] ? "delete" : "add")
                  }
                  label={`${emoji} ${reactions[name]}`}
                />
              ) : null
          )}
        <Tooltip title="添加回应" placement="right">
          <IconButton sx={{ mt: 0.5, mr: 0.5 }} onClick={handleClick}>
            <AddReactionOutlined />
          </IconButton>
        </Tooltip>
      </Box>
      <Popover
        open={anchorEl ? true : false}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={
          sm
            ? {
                vertical: "bottom",
                horizontal: "left",
              }
            : {
                vertical: "center",
                horizontal: "left",
              }
        }
        transformOrigin={
          sm
            ? {
                vertical: "top",
                horizontal: "left",
              }
            : {
                vertical: "center",
                horizontal: "left",
              }
        }
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            px: 0.5,
            py: 1,
          }}
        >
          {Object.entries(emojis).map(([name, emoji]) => (
            <IconButton
              sx={{
                margin: "0 0.25rem",
                width: "2.5rem",
                height: "2.5rem",
                "& > .MuiIconButton-label": {
                  color: "initial",
                },
              }}
              key={emoji}
              onClick={() => onReact?.(name as ReactionEmojiEnum, "add")}
            >
              {emoji}
            </IconButton>
          ))}
        </Box>
      </Popover>
    </>
  );
};

export default ReactionSelect;
