import React from 'react';
import styles from './Leftbar.module.scss';

const Leftbar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.copy}>Copiryght, SportSee 2020</div>
        </div>
    );
};

export default Leftbar;
