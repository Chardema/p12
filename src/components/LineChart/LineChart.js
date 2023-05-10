import React, { useState } from "react";
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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

const dayOfWeek = ["", "L", "M", "M", "J", "V", "S", "D"];

const LineCharts = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data || data.length === 0) {
    return <div>Chargement...</div>;
  }

  const handleMouseMove = (e) => {
    if (e.activeTooltipIndex) {
      setActiveIndex(e.activeTooltipIndex);
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Split data into two arrays based on activeIndex
  const data1 = activeIndex !== null ? data.slice(0, activeIndex + 1) : data;
  const data2 = activeIndex !== null ? data.slice(activeIndex) : [];

  return (
    <div className={styles.LineContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
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
            data={data1}
            fill="#FFFFFF" // color before active index
            strokeWidth={0}
          />
          <Area
            type="monotone"
            dataKey="sessionLength"
            data={data2}
            fill="#8884d8" // color after active index
            strokeWidth={0}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
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
};

export default LineCharts;
