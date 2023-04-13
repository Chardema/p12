import React from 'react';
import styles from './RadarChart.module.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'Maths', A: 120, B: 110, fullMark: 150 },
    { subject: 'Science', A: 98, B: 130, fullMark: 150 },
    { subject: 'Histoire', A: 86, B: 130, fullMark: 150 },
    { subject: 'Géographie', A: 99, B: 100, fullMark: 150 },
    { subject: 'Langue', A: 85, B: 90, fullMark: 150 },
    { subject: 'Arts', A: 65, B: 85, fullMark: 150 },
];

const RadarCharts = () => (
    <div className={styles.RadarContainer}>
    <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Vous" dataKey="A" stroke="#FF0101" strokeOpacity={0.6} fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
    </div>
);

export default RadarCharts;
