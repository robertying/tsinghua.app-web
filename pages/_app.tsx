import "@primer/css/dist/color-modes.css";
import "styles/index.css";
import "styles/nprogress.css";
import "styles/markdown.css";
import { useMemo } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NProgress from "nprogress";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import getAppTheme from "styles/theme";
import { ToastProvider } from "components/Snackbar";
import Layout from "components/Layout";
import { useApollo } from "lib/client";

dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(() => getAppTheme(darkMode), [darkMode]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="application-name" content="Thursday" />
        <meta name="apple-mobile-web-app-title" content="Thursday" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <DefaultSeo
        defaultTitle="星期四 Thursday"
        titleTemplate="%s｜星期四 Thursday"
        description="星期四大学信息化建设推进计划"
      />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ToastProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
