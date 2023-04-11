import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './LineChart.module.scss';
import {USER_AVERAGE_SESSIONS} from './../../api/data.js';

const LineCharts = () => {
    return (
        <div className={styles["line-chart-container"]}>
            <div className={styles["chart-title"]}>Durée Moyenne des sessions</div>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={USER_AVERAGE_SESSIONS[0].sessions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineCharts;

