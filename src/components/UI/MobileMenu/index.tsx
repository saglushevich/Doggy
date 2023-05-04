import { useMemo } from "react";

import { useLanguage } from "@hooks";
import { NAVIGATION } from "@mocks";

import { Language, Languages, Menu, MenuItem, Wrapper } from "./styles";
import { IMobileMenu } from "./types";

function MobileMenu({
  menuStatus,
  onChangeLang,
  toggleMobileMenu,
}: IMobileMenu) {
  const lang = useLanguage();

  const navigation = useMemo(
    () =>
      NAVIGATION[lang].map(({ id, title, link }) => (
        <MenuItem key={id} href={link}>
          {title}
        </MenuItem>
      )),
    [lang]
  );

  return (
    <Wrapper active={menuStatus} onClick={toggleMobileMenu}>
      <Menu active={menuStatus}>
        {navigation}
        <Languages>
          <Language onClick={onChangeLang("en")}>ENGLISH</Language>
          <Language onClick={onChangeLang("ru")}>РУССКИЙ</Language>
        </Languages>
      </Menu>
    </Wrapper>
  );
}

export default MobileMenu;
