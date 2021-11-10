import { createTheme } from "@mui/material/styles";
import { zhCN } from "@mui/material/locale";

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'";

const getAppTheme = (dark?: boolean) =>
  dark
    ? createTheme(
        {
          palette: {
            mode: "dark",
            primary: {
              main: "#bb86fc",
            },
            secondary: {
              main: "#000",
            },
          },
          typography: {
            fontFamily,
          },
        },
        zhCN
      )
    : createTheme(
        {
          palette: {
            mode: "light",
            primary: {
              main: "#9c27b0",
            },
            secondary: {
              main: "#fff",
            },
          },
          typography: {
            fontFamily,
          },
          components: {
            MuiCssBaseline: {
              styleOverrides: `
                @media (prefers-color-scheme: dark) {
                  body {
                    color: #fff;
                    background-color: #121212;
                  }

                  [class^='Mui'], [class*=' Mui']{
                    color: #fff;
                    background-color: #121212;
                  }
                }
              `,
            },
          },
        },
        zhCN
      );

export default getAppTheme;
