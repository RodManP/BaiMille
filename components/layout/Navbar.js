import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
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
          <a  className="logo" onClick={() => setActiveIdx(0)}>
            <h2>Kashta za gosti</h2>
            <h4>Bai Mile</h4>
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
