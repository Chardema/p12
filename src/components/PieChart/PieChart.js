import React from "react";
import styles from "./PieChart.module.scss";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Score moyen', value: 80, fill: '#8884d8' },
];

const renderCustomizedLabel = () => {
    return (
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={28}>
            Mon titre
        </text>
    );
};

const RadialBarCharts = () => (
    <div className={styles.PieContainer}>
    <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="80%" barSize={20} data={data} background={renderCustomizedLabel()}>
            <RadialBar minAngle={15} background clockWise={true} dataKey="value" />
            <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
        </RadialBarChart>
    </ResponsiveContainer>
    </div>
);

export default RadialBarCharts;






