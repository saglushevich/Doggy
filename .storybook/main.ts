import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ['../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@mocks": path.resolve(__dirname, "../src/mocks"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@localization": path.resolve(__dirname, "../src/localization"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
    };

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

