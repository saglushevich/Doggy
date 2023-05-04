import { SyntheticEvent } from "react";

export interface IMobileMenu {
  menuStatus: boolean;
  onChangeLang: (selectedLang: string) => () => void;
  toggleMobileMenu: (e: SyntheticEvent) => void;
}
