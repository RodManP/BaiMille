import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
// import styles from "../../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const MENU_LIST = [
  { text: "home", href: "/" },
  { text: "reservations", href: "/reservations" },
  { text: "contact", href: "/contact" },
  { text: "about", href: "/about" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a onClick={() => setActiveIdx(0)}>
            <h1 className="logo">Guest House</h1>
          </a>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu) => {
            return (
              <div
                onClick={() => {
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
