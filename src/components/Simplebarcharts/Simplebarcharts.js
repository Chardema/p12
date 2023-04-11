import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "janv", kg: 50, kcal: 3000 },
    { name: "févr", kg: 52, kcal: 2800 },
    { name: "mars", kg: 49, kcal: 3200 },
    { name: "avr", kg: 51, kcal: 2900 },
    { name: "mai", kg: 48, kcal: 3400 },
    { name: "juin", kg: 50, kcal: 3100 },
    { name: "juil", kg: 51, kcal: 3000 },
];

const SimpleBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10} />
                <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SimpleBarChart;