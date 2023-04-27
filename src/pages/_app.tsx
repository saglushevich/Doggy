import "@localization";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { ApolloProvider } from "@apollo/client";
import { client } from "@apolloClient";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { THEMES } from "@constants";
import GlobalStyles from "@styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={THEMES}>
        <ErrorBoundary>
          <Component {...pageProps} />
          <GlobalStyles />
        </ErrorBoundary>
      </ThemeProvider>
    </ApolloProvider>
  );
}
