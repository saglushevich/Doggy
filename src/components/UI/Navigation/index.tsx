import { Suspense, SyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import logo from "@assets/logo/logo.png";
import MobileMenu from "@components/UI/MobileMenu";
import { useLanguage } from "@hooks";
import { NAVIGATION } from "@mocks";

import {
  Burger,
  Language,
  Languages,
  Logotype,
  NavigationLink,
  NavigationLinks,
  Wrapper,
} from "./styles";

function Navigation() {
  const lang = useLanguage();
  const { pathname } = useRouter();
  const [menuStatus, setMenuStatus] = useState(false);

  const { i18n } = useTranslation();

  const onChangeLang = (selectedLang: string) => () => {
    i18n.changeLanguage(selectedLang);
  };

  const toggleMobileMenu = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      setMenuStatus((prevMenuStatus) => !prevMenuStatus);
    }
  };

  const navigation = NAVIGATION[lang].map(({ id, title, link }) => {
    return (
      <NavigationLink key={id} href={link} active={pathname === link}>
        {title}
      </NavigationLink>
    );
  });

  return (
    <Suspense>
      <Wrapper onClick={toggleMobileMenu}>
        <Logotype src={logo} />
        <NavigationLinks>{navigation}</NavigationLinks>
        <Burger active={menuStatus} />
        <Languages>
          <Language active={lang === "ru"} onClick={onChangeLang("ru")}>
            RUS
          </Language>
          <Language active={lang === "en"} onClick={onChangeLang("en")}>
            ENG
          </Language>
        </Languages>
      </Wrapper>
      <MobileMenu
        menuStatus={menuStatus}
        onChangeLang={onChangeLang}
        toggleMobileMenu={toggleMobileMenu}
      />
    </Suspense>
  );
}

export default Navigation;
