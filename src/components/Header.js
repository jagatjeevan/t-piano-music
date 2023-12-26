"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import HamburgMenu from "./HamburgMenu";
import Logo from "./Logo";

import styles from "../styles/header.module.scss";

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
  const router = useRouter();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setIsMenuVisible(false);
  }, [router]);

  return (
    <div>
      <header className={styles.header}>
        {/* <HamburgMenu isMenuOpen={isMenuVisible} toggleMenu={setIsMenuVisible} /> */}
        <Logo />
      </header>
      <MenuBar isMenuVisible={isMenuVisible} />
    </div>
  );
}
