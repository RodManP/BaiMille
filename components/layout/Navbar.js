import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";

export default function navbar() {
  return (
    <nav className={styles.navbar}>
      <span>
        <Link href="/">
        <Image src="/vercel.svg" alt="Icon" width="100px" height="50px" />
      </Link>
      </span>
      
      <Link href="/">
        <a className={styles.active}>Home</a>
      </Link>
      <Link href="/reservations">
        <a>Reservations</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
