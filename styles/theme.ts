import { createMuiTheme } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'";

const getAppTheme = (dark?: boolean) =>
  dark
    ? createMuiTheme(
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
    : createMuiTheme(
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
        },
        zhCN
      );

export default getAppTheme;
