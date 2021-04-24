import { forwardRef } from "react";
import { Fab, FabProps, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Portal from "./Portal";

const MyFab: React.FC<
  FabProps & {
    forwardedRef: React.Ref<HTMLButtonElement>;
  }
> = ({ forwardedRef, ...restProps }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Portal parentId="action-bar">
      <Fab
        ref={forwardedRef}
        sx={{
          boxShadow: 3,
        }}
        size={sm ? "small" : "medium"}
        {...restProps}
      />
    </Portal>
  );
};

export default forwardRef<HTMLButtonElement, FabProps>((props, ref) => (
  <MyFab {...props} forwardedRef={ref} />
));
