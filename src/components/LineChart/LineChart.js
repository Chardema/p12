import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './LineChart.module.scss';
import {USER_AVERAGE_SESSIONS} from './../../api/data.js';

const LineCharts = () => {
    const data = [
        { day: "L", averageDuration: 45 },
        { day: "M", averageDuration: 60 },
        { day: "M", averageDuration: 48 },
        { day: "J", averageDuration: 58 },
        { day: "V", averageDuration: 40 },
        { day: "S", averageDuration: 55 },
        { day: "D", averageDuration: 50 },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className={styles.tooltip}>
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <XAxis  axisLine={false} dataKey="day" />
                <YAxis  axisLine={false} tick={false} dataKey="averageDuration" />
                <Tooltip content={CustomTooltip} />
                <Line
                    type="monotone"
                    dataKey="averageDuration"
                    stroke="#E60000"
                    strokeWidth={2}
                    dot={true}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineCharts;

