import React from 'react';
import { Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import styles from './PieChart.module.scss';



const SinglePieCharts = () => {

    const data = [
        { name: 'Pop', value: 27 },
        { name: 'Rock', value: 25 },
        { name: 'Hip Hop', value: 20 },
        { name: 'Rap', value: 18 },
        { name: 'Autres', value: 10 },
    ];

    const COLORS = ['#6c5dd3', '#ffbb3b', '#ff7043', '#ff5252', '#ced4da'];
    return (
        <div className={styles['pie-chart-container']}>
            <div className={styles['chart-title']}>Répartition de vos playlists</div>
            <div className={styles.chart}>

            </div>
        </div>
    );
}

export default SinglePieCharts;


