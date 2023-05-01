import { useLanguage } from "@hooks";
import { IMobileMenu } from "@interfaces";
import { NAVIGATION } from "@mocks";

import { Language, Languages, Menu, MenuItem } from "./styles";

function MobileMenu({ menuStatus, onChangeLang }: IMobileMenu) {
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
    <Menu active={menuStatus}>
      {navigation}
      <Languages>
        <Language onClick={onChangeLang("en")}>ENGLISH</Language>
        <Language onClick={onChangeLang("ru")}>РУССКИЙ</Language>
      </Languages>
    </Menu>
  );
}

export default MobileMenu;
