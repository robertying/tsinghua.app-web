import { Fab, FabProps, useMediaQuery } from "@material-ui/core";
import Portal from "./Portal";

const MyFab: React.FC<FabProps> = (props) => {
  const xs = useMediaQuery("(max-width: 599px)");

  return (
    <Portal parentId="action-bar">
      <Fab
        sx={{
          boxShadow: 3,
        }}
        size={xs ? "small" : "medium"}
        {...props}
      />
    </Portal>
  );
};

export default MyFab;
