import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./components/firebase-config";

const getMenuItems = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

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
