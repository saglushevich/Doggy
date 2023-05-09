import React from "react";

import { ThemeProvider } from "styled-components";
import { THEMES } from "../src/constants";

import GlobalStyle from "../src/styles";

export const Decorator = (story) => (
  <ThemeProvider theme={THEMES}>
      <GlobalStyle />
      {story()}
  </ThemeProvider>
);