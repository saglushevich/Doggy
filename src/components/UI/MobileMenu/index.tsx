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
  const navigation = NAVIGATION[lang].map((nav) => {
    const { id, title, link } = nav;

    return (
      <MenuItem key={id} href={link}>
        {title}
      </MenuItem>
    );
  });

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
