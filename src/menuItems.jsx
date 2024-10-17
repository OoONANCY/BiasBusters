import React from "react";

const getMenuItems = () => {
  const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Earn Certificate',
      submenu: [
        {
          title: 'Learning modules',
          url: 'articles',
        },
        {
          title: 'Attempt Challenge'
        },
      ],
    },
    {
      title: 'Social',
      submenu: [
        {
          title: 'Engage in community'
        },
        {
          title: 'LinkedIn',
        },
        {
          title: 'Instagram',
        }
      ],
    },
    {
      title: 'Contact',
      submenu: [
        {
          title: 'About Us',
        },
        {
          title: 'Contact Us',
        },
      ],
    },
  ];

  return menuItems;
};

export default getMenuItems;