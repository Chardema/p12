import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import {USER_ACTIVITY, USER_MAIN_DATA} from './../../api/data.js';
import styles from "./Simplebarcharts.module.scss";


const SimpleBarChart = () => {

    function CustomizedAxisTick(props) {
        const { x, y, payload } = props;

        return (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
                {new Date(payload.value).getDate()}
            </text>
        );
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className={styles.tooltip}>
                    <p>{` ${payload[0].value}kg`}</p>
                    <p>{` ${payload[1].value}Kcal`}</p>
                </div>
            );
        }

        return null;
    };


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
                <XAxis dataKey="day" tick={CustomizedAxisTick}/>
                <YAxis dataKey="kilogram" orientation={"right"} domain={[60, "auto"]} axisLine={false} />
                <Legend />
                <Tooltip  content={CustomTooltip}/>
                <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10} />
                <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SimpleBarChart;