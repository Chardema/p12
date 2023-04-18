import React from "react";
import { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import styles from "./Simplebarcharts.module.scss";
import Models from "../../api/Model";

const SimpleBarChart = ({userActivity}) => {
    const CustomLegend = ({ data }) => {
        return (
            <div className={styles.legend}>
                {data.map((entry, index) => (
                    <div
                        key={`item-${index}`}
                        className={`${styles.legendItem} ${
                            entry.name === "Poids (kg)" ? styles.legendItemMargin : ""
                        }`}
                    >
          <span
              className={styles.legendIcon}
              style={{ backgroundColor: entry.color }}
          ></span>
                        <span className={styles.legendText}>{entry.name}</span>
                    </div>
                ))}
            </div>
        );
    };
    const [legendData, setLegendData] = useState([]);

    useEffect(() => {
        setLegendData([
            { name: "Poids (kg)", color: "#282D30" },
            { name: "Calories brûlées (kCal)", color: "#E60000" },
        ]);
    }, []);

    const ChartTitle = ({text}) => (
        <div className={styles.CharTitle}>
            <h2>{text}</h2>
        </div>
    );
    function CustomizedAxisTick(props) {
        const { x, y, payload } = props;

        return (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#666" >
                {new Date(payload.value).getDate()}
            </text>
        );
    }


    const CustomTooltip = ({ active, payload }) => {
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
    // on vérifie que les données sont chargées
    if (!userActivity || userActivity.length === 0) {
        return <div>Loading...</div>;
    }

    // Trouver la valeur maximale des calories pour limiter l'axe des calories
    const maxCalories = Math.max(...userActivity.map(session => session.calories));
    let activitymodel = new Models();
    const testdatacharts = activitymodel.FormatActivity(userActivity);


    return (
        <>
            <div className={styles.chartContainer}>
                <div className={styles.chartTitlelegend}>
                    <ChartTitle text="Activité quotidienne" />
                    <div className={styles.legenddata}>
                        <CustomLegend data={legendData} />
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart
                        data={testdatacharts}
                        margin={{
                            top: 50,
                            left : 0,
                            right: 30,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
                        <XAxis dataKey="day" tick={CustomizedAxisTick} interval={0}/>
                        <YAxis yAxisId="left" dataKey="actualkilogram" orientation="right" domain={[60, 'auto']} axisLine={false} />
                        <YAxis yAxisId="right" dataKey="lostcalories" tick={false} domain={['auto', maxCalories]} axisLine={false} />
                        <Tooltip content={CustomTooltip} />
                        <Bar yAxisId="left" dataKey="actualkilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10} />
                        <Bar yAxisId="right" dataKey="lostcalories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default SimpleBarChart;
