import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// @ts-ignore
import { messages } from "/src/utils/i18n";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locale } = useRouter();
  const preferredDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setDarkTheme(preferredDarkTheme);
  }, [preferredDarkTheme]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkTheme ? "dark" : "light",
          primary: {
            main: "#00b5f1",
            contrastText: "#efefef",
          },
          secondary: {
            main: "#161b22",
          },
          error: {
            main: red.A400,
          },
          background: darkTheme
            ? { default: "#090c10", paper: "#0d1117" }
            : { default: "#ececec", paper: "#e5e5e5" },
          text: darkTheme
            ? {
                primary: "rgba(238,238,238,0.87)",
                disabled: "rgba(238,238,238,0.38)",
                //hint: "rgba(238,238,238,0.38)",
                secondary: "rgba(238,238,238,0.54)",
              }
            : {},
        },
        /*typography: {
          fontFamily: `"Montserrat", "Inconsolata", "Roboto", "sans-serif"`,
        },*/
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 30,
                textTransform: "none",
              },
            },
          },
        },
      }),
    [darkTheme]
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Jeckson Jaimes | Portfolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <IntlProvider
          locale={locale!}
          defaultLocale="en"
          messages={messages[locale]}
        >
          <Component
            {...pageProps}
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          />
        </IntlProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
