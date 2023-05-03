export interface IMobileMenu {
  menuStatus: boolean;
  onChangeLang: (selectedLang: string) => () => void;
  toggleMobileMenu: () => void;
}
