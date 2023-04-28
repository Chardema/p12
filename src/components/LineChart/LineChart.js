import React from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./LineChart.module.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

const dayOfWeek = ["", "L", "M", "M", "J", "V", "S", "D"];

const LineCharts = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Chargement...</div>;
  }
  return (
    <div className={styles.LineContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.106534)" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickFormatter={(tickItem) => dayOfWeek[tickItem]}
            padding={{ left: 30, right: 30 }}
            stroke="#FFFFFF"
          />
          <YAxis hide />
          <Tooltip content={CustomTooltip} />
          <Area
            type="monotone"
            dataKey="sessionLength"
            fill="url(#areaGradient)"
            strokeWidth={0}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            activeDot={<Dot r={5} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
LineCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avgSessionDuration: PropTypes.number,
    })
  ),
  CustomTooltip: PropTypes.func,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

export default LineCharts;
