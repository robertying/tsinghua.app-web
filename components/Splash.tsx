import { Box } from "@mui/material";
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
        position: "fixed",
        zIndex: 999,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--background-color)",
      }}
    >
      <Logo />
    </Box>
  );
};

export default Splash;
