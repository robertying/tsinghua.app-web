import { Fab, FabProps, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Portal from "./Portal";

const MyFab: React.FC<FabProps> = (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Portal parentId="action-bar">
      <Fab
        sx={{
          boxShadow: 3,
        }}
        size={sm ? "small" : "medium"}
        {...props}
      />
    </Portal>
  );
};

export default MyFab;
