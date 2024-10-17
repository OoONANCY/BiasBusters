import React from "react";
import MenuItems from "./MenuItems";
import getMenuItems from "../menuItems";
import "../App.css";

const Navbar = () => {
  const menuItems = getMenuItems();

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;