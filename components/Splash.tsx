import Image from "next/image";
import { Box } from "@material-ui/core";
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
      }}
    >
      {theme.palette.mode === "dark" ? (
        <Image
          css={{
            borderRadius: 16,
          }}
          alt="logo"
          src="/logo-dark.png"
          width={80}
          height={80}
          priority
        />
      ) : (
        <Image
          css={{
            borderRadius: 16,
          }}
          alt="logo"
          src="/logo-light.png"
          width={80}
          height={80}
          priority
        />
      )}
    </Box>
  );
};

export default Splash;
