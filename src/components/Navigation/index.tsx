import logo from "@assets/logo/logo.png";
import { Container } from "@layout";

import { Logotype, NavigationLink, NavigationLinks, Wrapper } from "./styles";

function Navigation() {
  return (
    <Container>
      <Wrapper>
        <Logotype src={logo} />
        <NavigationLinks>
          <NavigationLink>Home</NavigationLink>
          <NavigationLink>Info</NavigationLink>
          <NavigationLink>Spa Services</NavigationLink>
          <NavigationLink>Book Appointment</NavigationLink>
          <NavigationLink>Blog</NavigationLink>
          <NavigationLink>About Us</NavigationLink>
          <NavigationLink>Contact Us</NavigationLink>
        </NavigationLinks>
      </Wrapper>
    </Container>
  );
}

export default Navigation;
