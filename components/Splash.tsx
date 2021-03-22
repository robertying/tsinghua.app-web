import { Box, CircularProgress } from "@material-ui/core";

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
      }}
    >
      <CircularProgress size="2rem" />
    </Box>
  );
};

export default Splash;
