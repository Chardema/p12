import React from "react";
import styles from "./RadialBarCharts.module.scss";
import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis
} from "recharts";

const RadialBarCharts = ({userScore}) => {
    // Multiplier par 100 pour convertir la valeur décimale en pourcentage
    const userScorePercentage = userScore * 100;
    const percentage = Math.round(userScorePercentage);
    const radialChartData = [{ pct: percentage }];
    return (
        <div className={styles.PieContainer}>
            <p>Score</p>
            <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                    width={200}
                    height={200}
                    data={radialChartData}
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
                        data={radialChartData}
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






















