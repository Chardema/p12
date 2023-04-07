import React from 'react';
import styles from './Leftbar.module.scss';

const Leftbar = () => {
    return (
        <div className={styles.sidebar}>
            <img src="image1.jpg" alt="Image 1" />
            <img src="image2.jpg" alt="Image 2" />
            <img src="image3.jpg" alt="Image 3" />
            <img src="image4.jpg" alt="Image 4" />
            <div className={styles.copy}>&copy; 2023 Mon entreprise</div>
        </div>
    );
};

export default Leftbar;
