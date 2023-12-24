"use client";

import { useState } from "react";
import styles from "../styles/header.module.scss";
import HamburgMenu from "./HamburgMenu";
import Logo from "./Logo";
import Link from "next/link";

const MenuBar = ({ isMenuVisible }) => {
  return (
    <nav
      className={`${styles.navbar} ${
        isMenuVisible ? styles.open : styles.close
      }`}
    >
      <ul>
        <li>
          <Link href="/">Welcome</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/courses">Courses we offer</Link>
        </li>
        <li>
          <Link href="/faculties">Faculties</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div>
      <header className={styles.header}>
        <HamburgMenu isMenuOpen={isMenuVisible} toggleMenu={setIsMenuVisible} />
        <Logo />
      </header>
      <MenuBar isMenuVisible={isMenuVisible} />
    </div>
  );
}
