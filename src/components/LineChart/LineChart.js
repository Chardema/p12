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

/**
 * CustomTooltip component that render a tooltip with the average session duration.
 *
 * @component
 *
 * @param {Object} props - props of CustomTooltip component
 * @param {boolean} props.active - active status
 * @param {Object[]} props.payload - payload array
 * @param {number} props.payload[].value - value of payload
 *
 * @returns {React.Node} - CustomTooltip component
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className={styles.tooltip}>
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

/**
 * LineCharts component that render a graph with the average session duration.
 *
 * @component
 *
 * @param {Object} props - props of LineCharts component
 * @param {Object[]} props.data - data array
 * @param {string} props.data[].name - name of data object
 * @param {number} props.data[].avgSessionDuration - average session duration of data object
 * @param {(string|number)} props.data[].day - day of data object
 *
 * @returns {React.Node} - LineCharts component
 */
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
      <h2 className={styles.ChartTitle}>Durée moyenne de sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <XAxis
            dataKey="day"
            tickFormatter={(tickItem) => dayOfWeek[tickItem]}
            padding={{ left: 30, right: 30 }}
            stroke="#FFFFFF"
            axisLine={false}
            tickLine={false}
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
            dot={({ index }) =>
              index === activeIndex ? <Dot r={5} key={index} /> : null
            }
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
