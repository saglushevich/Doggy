import { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  rootDir: ".",
  moduleDirectories: ["node_modules", "<rootDir>"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|webp|svg)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "@components/(.*)": ["<rootDir>/src/components/$1"],
    "@pages/(.*)": ["<rootDir>/src/pages/$1"],
    "@styles": ["<rootDir>/src/styles"],
    "@assets/images/(.*)": ["<rootDir>/src/assets/images/$1"],
    "@types": ["<rootDir>/src/types"],
    "@mocks": ["<rootDir>/src/mocks"],
    "@constants": ["<rootDir>/src/constants"],
    "@hooks": ["<rootDir>/src/hooks"],
    "@localization": ["<rootDir>/src/localization"],
    "@utils": ["<rootDir>/src/utils"],
    "@apolloClient": ["<rootDir>/src/apolloClient"],
  },
  testEnvironment: "jsdom",
};

export default jestConfig;
