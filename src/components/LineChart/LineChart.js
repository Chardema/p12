import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
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

  return (
    <div className={styles.LineContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
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
          {activeIndex !== null && (
            <>
              <ReferenceArea
                x1={data[activeIndex]?.day || data[data.length - 1].day}
                x2={data[data.length - 1].day}
                fill="black"
                fillOpacity={0.2}
              />
              <ReferenceArea
                x1={data[0].day}
                x2={data[activeIndex].day}
                fillOpacity={0}
              />
            </>
          )}
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
      day: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
};

export default LineCharts;
