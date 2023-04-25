import "@localization";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { ErrorBoundary } from "@components/ErrorBoundary";
import { THEMES } from "@constants";
import GlobalStyles from "@styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEMES}>
      <ErrorBoundary>
        <Component {...pageProps} />
        <GlobalStyles />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
