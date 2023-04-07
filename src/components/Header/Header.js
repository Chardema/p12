import React from 'react';
import styles from './Header.module.scss';
import logo from './../../img/sport-see-full-LOGO.png'

const Navbar = () => {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="Sport See" />
            </div>
            <nav className={styles.navbar}>

                <ul className={styles.menu}>
                    <li><a href="src/components/Header#">Accueil</a></li>
                    <li><a href="src/components/Header#">Profil</a></li>
                    <li><a href="src/components/Header#">Réglage</a></li>
                    <li><a href="src/components/Header#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
