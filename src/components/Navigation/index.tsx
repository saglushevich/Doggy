import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "@assets/logo/logo.png";
import MobileMenu from "@components/MobileMenu";
import { useLanguage } from "@hooks";
import { Container } from "@layout";
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

  const toggleMobileMenu = () => {
    setMenuStatus((prevMenuStatus) => !prevMenuStatus);
  };

  const navigation = NAVIGATION[lang].map((nav) => {
    const { id, title, link } = nav;

    return (
      <NavigationLink key={id} href={link} active={pathname === link}>
        {title}
      </NavigationLink>
    );
  });

  return (
    <>
      <Container>
        <Wrapper>
          <Logotype src={logo} />
          <NavigationLinks>{navigation}</NavigationLinks>
          <Burger onClick={toggleMobileMenu} active={menuStatus} />
          <Languages>
            <Language active={lang === "ru"} onClick={onChangeLang("ru")}>
              RUS
            </Language>
            <Language active={lang === "en"} onClick={onChangeLang("en")}>
              ENG
            </Language>
          </Languages>
        </Wrapper>
      </Container>
      <MobileMenu menuStatus={menuStatus} onChangeLang={onChangeLang} />
    </>
  );
}

export default Navigation;
