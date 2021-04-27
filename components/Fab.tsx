import { forwardRef } from "react";
import { Fab, FabProps, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Portal from "./Portal";

const InternalFab: React.FC<
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

const MyFab = forwardRef<HTMLButtonElement, FabProps>((props, ref) => (
  <InternalFab {...props} forwardedRef={ref} />
));

export default MyFab;
