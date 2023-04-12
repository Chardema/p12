import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import styles from "./PieChart.module.scss";

const data = [
    { name: "Football", value: 400 },
    { name: "Basketball", value: 300 },
    { name: "Tennis", value: 200 },
    { name: "Athlétisme", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = () => {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default PieChartComponent;



