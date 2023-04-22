import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import styles from './LineChart.module.scss';
import {USER_AVERAGE_SESSIONS} from './../../api/data.js';

const LineCharts = () => {

    const getSessionDataByUserId = (userId) => {
        const userSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);

        if (!userSessions) return [];

        const days = ["L", "M", "M", "J", "V", "S", "D"];

        return userSessions.sessions.map((session) => ({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
        }));
    };

    const data = getSessionDataByUserId(18);
    console.log("Session data:", data);




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
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}>
                        <XAxis axisLine={false} dataKey="day" />
                        <YAxis axisLine={false} tick={false} dataKey="sessionLength" />
                        <Tooltip content={CustomTooltip} />
                        <CartesianGrid vertical={false} />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="white"
                            strokeWidth={2}
                            dot={true}
                        />
                        <Area
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="none"
                            fill="white"
                            fillOpacity={1}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineCharts;
