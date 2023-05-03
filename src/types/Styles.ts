import { THEMES } from "@constants";

export interface IStyles {
  active?: boolean;
  image?: string;
  day?: boolean;
  gray?: boolean;
  theme: typeof THEMES;
}
