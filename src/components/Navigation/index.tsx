import logo from "@assets/logo/logo.png";
import { ROUTES } from "@constants";
import { Container } from "@layout";

import { Logotype, NavigationLink, NavigationLinks, Wrapper } from "./styles";

function Navigation() {
  const { home, about, appointment, blog, contacts, info, services } = ROUTES;

  return (
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
      </Wrapper>
    </Container>
  );
}

export default Navigation;
