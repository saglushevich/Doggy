import { NAVIGATION } from "@mocks";

import { Menu, MenuItem } from "./styles";

function MobileMenu({ menuStatus }: { menuStatus: boolean }) {
  const navigation = NAVIGATION.ru.map((nav) => {
    const { id, title, link } = nav;

    return (
      <MenuItem key={id} href={link}>
        {title}
      </MenuItem>
    );
  });

  return <Menu active={menuStatus}>{navigation}</Menu>;
}

export default MobileMenu;
