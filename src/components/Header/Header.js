import React from 'react';
import styles from './Header.module.scss';

const Navbar = () => {
    return (
        <header>
            <div className={styles.logo}>SportSee</div>
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
