import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

const ChartTitle = ({ text }) => (
  <div className={styles.CharTitle}>
    <h2>{text}</h2>
  </div>
);

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
      {payload.value}
    </text>
  );
};

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
/**
 * SimpleBarChart component that render a graph with the average session duration.
 *
 * @component
 *
 * @param {Object} props - props of SimpleBarChart component
 * @param {Object[]} props.userActivity - user activity data array
 * @param {number} props.userActivity[].calories - calories data of user activity
 *
 * @returns {React.Node} - SimpleBarChart component
 */
const SimpleBarChart = ({ userActivity }) => {
  const [legendData, setLegendData] = useState([]);

  useEffect(() => {
    setLegendData([
      { name: "Poids (kg)", color: "#282D30" },
      { name: "Calories brûlées (kCal)", color: "#E60000" },
    ]);
  }, []);

  if (!userActivity || userActivity.length === 0) {
    return <div>Loading...</div>;
  }

  const maxCalories = Math.max(
    ...userActivity.map((session) => session.calories)
  );
  const activitymodel = new Models();
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
              left: 0,
              right: 30,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              horizontal={true}
            />
            <XAxis dataKey="day" tick={CustomizedAxisTick} interval={0} />
            <YAxis
              yAxisId="left"
              dataKey="actualkilogram"
              orientation="right"
              domain={[60, "auto"]}
              axisLine={false}
            />
            <YAxis
              yAxisId="right"
              dataKey="lostcalories"
              tick={false}
              domain={["auto", maxCalories]}
              axisLine={false}
            />
            <Tooltip content={CustomTooltip} />
            <Bar
              yAxisId="left"
              dataKey="actualkilogram"
              fill="#282D30"
              radius={[3, 3, 0, 0]}
              barSize={10}
            />
            <Bar
              yAxisId="right"
              dataKey="lostcalories"
              fill="#E60000"
              radius={[3, 3, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
CustomLegend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

ChartTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

CustomizedAxisTick.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  payload: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

SimpleBarChart.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
    })
  ).isRequired,
};

export default SimpleBarChart;
