import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const Logo: React.FC<React.PropsWithChildren<unknown>> = () => {
  const theme = useTheme();

  return theme.palette.mode === "dark" ? (
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
  );
};

export default Logo;
