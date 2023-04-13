import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea, Area } from 'recharts';
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
        <div className={styles.chartContainer}>
            <h3 className={styles.chartTitle}>Durée moyenne de sessions</h3>
            <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.106534)" />
                        </linearGradient>
                    </defs>
                    <XAxis axisLine={false} dataKey="day" />
                    <YAxis axisLine={false} tick={false} dataKey="averageDuration" />
                    <Tooltip content={CustomTooltip} />
                    <CartesianGrid vertical={false} />
                    <Line
                        type="monotone"
                        dataKey="averageDuration"
                        stroke="#E60000"
                        strokeWidth={2}
                        dot={true}
                    />
                    <Area
                        type="monotone"
                        dataKey="averageDuration"
                        stroke="none"
                        fill="url(#areaGradient)"
                        fillOpacity={1}
                        isAnimationActive={false}
                    />
                    <ReferenceArea x1="S" x2="D" fill="#000000" fillOpacity={0.1} />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineCharts;
