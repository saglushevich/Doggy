import { useState } from "react";

import logo from "@assets/logo/logo.png";
import MobileMenu from "@components/MobileMenu";
import { ROUTES } from "@constants";
import { Container } from "@layout";

import {
  Burger,
  Logotype,
  NavigationLink,
  NavigationLinks,
  Wrapper,
} from "./styles";

function Navigation() {
  const [menuStatus, setMenuStatus] = useState(false);

  const { home, about, appointment, blog, contacts, info, services } = ROUTES;

  const toggleMobileMenu = () => {
    setMenuStatus((prevMenuStatus) => !prevMenuStatus);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logotype src={logo} />
          <NavigationLinks>
            <NavigationLink href={home}>Home</NavigationLink>
            <NavigationLink href={info}>Info</NavigationLink>
            <NavigationLink href={services}>Spa Services</NavigationLink>
            <NavigationLink href={appointment}>Book Appointment</NavigationLink>
            <NavigationLink href={blog}>Blog</NavigationLink>
            <NavigationLink href={about}>About Us</NavigationLink>
            <NavigationLink href={contacts}>Contact Us</NavigationLink>
          </NavigationLinks>
          <Burger onClick={toggleMobileMenu} active={menuStatus} />
        </Wrapper>
      </Container>
      <MobileMenu menuStatus={menuStatus} />
    </>
  );
}

export default Navigation;
