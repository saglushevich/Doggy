import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { THEMES } from "../src/constants";
import "../src/localization";

import GlobalStyle from "../src/styles";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={THEMES}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
