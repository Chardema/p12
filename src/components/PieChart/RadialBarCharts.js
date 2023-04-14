import React from "react";
import styles from "./RadialBarCharts.module.scss";
import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarGrid,
    PolarAngleAxis
} from "recharts";

const data = [{ pct: 40 }];

const RadialBarCharts = () => {
    const total = 100;
    const percentage = Math.round((data[0].pct / total) * 100);
    return (
        <div className={styles.PieContainer}>
            <p>Score</p>
            <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                    width={200}
                    height={200}
                    data={data}
                    innerRadius="80%"
                    outerRadius="80%"
                    barSize={10}
                    startAngle={90}
                    endAngle={470}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        dataKey={"pct"}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background
                        dataKey="pct"
                        angleAxisId={0}
                        data={data}
                        fill="#FF0000"
                    />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={18}
                    >
                        {`${percentage}%`} de votre objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadialBarCharts;






















