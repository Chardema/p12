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
import {USER_ACTIVITY, USER_MAIN_DATA} from './../../api/data.js';

const SimpleBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart
                data={USER_ACTIVITY[0].sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis dataKey="kilogram" orientation={"right"} domain={[60, "auto"]} axisLine={false} />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10} />
                <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SimpleBarChart;