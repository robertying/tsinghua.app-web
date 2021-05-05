import { Box } from "@material-ui/core";
import Logo from "./Logo";

const Splash: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 999,
      }}
    >
      <Logo />
    </Box>
  );
};

export default Splash;
