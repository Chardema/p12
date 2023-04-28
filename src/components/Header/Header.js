import React from "react";
import styles from "./Header.module.scss";
import logo from "./../../img/sport-see-full-LOGO.png";

const Navbar = () => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="/">
          {" "}
          <img src={logo} alt="Sport See" />
        </a>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
