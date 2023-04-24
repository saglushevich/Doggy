import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { THEMES } from "@constants";
import GlobalStyles from "@styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEMES}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
