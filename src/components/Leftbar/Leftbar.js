/**
 * Leftbar component that renders a vertical navigation bar with sports icons.
 *
 * @component
 */

import React from 'react';
import styles from './Leftbar.module.scss';
import swimmingIcon from './../../img/swimming-icon.svg'
import yogaIcon from './../../img/yoga-icon.svg'
import bikeIcon from './../../img/bike-icon.svg'
import dumbbellIcon from './../../img/dumbbell-icon.svg'


const Leftbar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.button}>
                <div className={styles.square}>
                    <img src={yogaIcon} alt="Swimming icon" className={styles.icon} />
                </div>
                <div className={styles.square}>
                    <img src={swimmingIcon} alt="Swimming icon" className={styles.icon} />
                </div>
                <div className={styles.square}>
                    <img src={bikeIcon} alt="Swimming icon" className={styles.icon} />
                </div>
                <div className={styles.square}>
                    <img src={dumbbellIcon} alt="Swimming icon" className={styles.icon} />
                </div>
            </div>
            <div className={styles.copy}>Copiryght, SportSee 2020</div>
        </div>
    );
};

export default Leftbar;
