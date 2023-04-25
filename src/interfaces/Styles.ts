import { THEMES } from "@constants";

export interface IStyles {
  active?: boolean;
  image?: string;
  theme: typeof THEMES;
}
