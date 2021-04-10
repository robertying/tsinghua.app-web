import { Box, CircularProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const Splash: React.FC = () => {
  const theme = useTheme();

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
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CircularProgress size="2rem" />
    </Box>
  );
};

export default Splash;
