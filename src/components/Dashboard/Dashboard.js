import { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import {USER_MAIN_DATA} from './../../api/data.js';

const Dashboard = () => {
    const [user, setUser] = useState({});
    console.log(); // Affiche les données de l'utilisateur


    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
            <h1>Bienvenue, {USER_MAIN_DATA[0].userInfos.firstName} !</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </div>
    );
};

export default Dashboard;
