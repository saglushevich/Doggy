import { ROUTES } from "@constants";

import { Menu, MenuItem } from "./styles";

function MobileMenu({ menuStatus }: { menuStatus: boolean }) {
  const { home, about, appointment, blog, contacts, info, services } = ROUTES;
  return (
    <Menu active={menuStatus}>
      <MenuItem href={home}>Home</MenuItem>
      <MenuItem href={info}>Info</MenuItem>
      <MenuItem href={services}>Spa Services</MenuItem>
      <MenuItem href={appointment}>Book Appointment</MenuItem>
      <MenuItem href={blog}>Blog</MenuItem>
      <MenuItem href={about}>About Us</MenuItem>
      <MenuItem href={contacts}>Contact Us</MenuItem>
    </Menu>
  );
}

export default MobileMenu;
