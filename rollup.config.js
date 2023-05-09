import dotenv from "rollup-plugin-dotenv";

import alias from "@rollup/plugin-alias";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

export default [
  {
    input: "src/components/UI/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      dotenv.default(),
      json(),
      image(),
      resolve(),
      commonjs(),
      babel({ presets: ["@babel/preset-react"] }),
      typescript({ tsconfig: "./tsconfig.json" }),
      alias({
        entries: [
          { find: "@components", replacement: "./src/components/*" },
          { find: "@styles", replacement: "./src/styles" },
          { find: "@assets/*", replacement: "./src/assets/*" },
          { find: "@types", replacement: "./src/types" },
          { find: "@mocks", replacement: "./src/mocks" },
          { find: "@constants", replacement: "./src/constants" },
          { find: "@hooks", replacement: "./src/hooks" },
          { find: "@localization", replacement: "./src/localization" },
          { find: "@utils", replacement: "./src/utils" },
        ],
      }),
      terser(),
    ],
    external: ["styled-components", "react", "react-dom"],
  },
];
