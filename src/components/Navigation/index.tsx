import { useRouter } from "next/router";
import { useState } from "react";

import logo from "@assets/logo/logo.png";
import MobileMenu from "@components/MobileMenu";
import { useLanguage } from "@hooks";
import { Container } from "@layout";
import { NAVIGATION } from "@mocks";

import {
  Burger,
  Logotype,
  NavigationLink,
  NavigationLinks,
  Wrapper,
} from "./styles";

function Navigation() {
  const lang = useLanguage();
  const { pathname } = useRouter();
  const [menuStatus, setMenuStatus] = useState(false);

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
        </Wrapper>
      </Container>
      <MobileMenu menuStatus={menuStatus} />
    </>
  );
}

export default Navigation;
