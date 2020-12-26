import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
/* import { IoPeopleSharp } from "react-icons/io"; */

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    className: "nav-text",
  },
  {
    title: "Menu",
    path: "/the-frugal-santa",
    icon: <FaRegListAlt />,
    className: "nav-text",
  },
  {
    title: "Gifts for woman",
    path: "/woman",
    icon: <AiOutlineGift />,
    className: "nav-text",
  },
  {
    title: "Gifts for man",
    path: "/man",
    icon: <AiOutlineGift />,
    className: "nav-text",
  },
  {
    title: "Gifts for child",
    path: "/child",
    icon: <AiOutlineGift />,
    className: "nav-text",
  },
  {
    title: "About Us",
    path: "/about-us",
    icon: <TiContacts />,
    className: "nav-text",
  },
];
