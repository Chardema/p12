import React from "react";
import styles from "./RadarChart.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

const translations = {
  cardio: "Cardio",
  energy: "Energie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

const RadarCharts = ({ performanceData }) => (
  <div className={styles.RadarContainer}>
    <ResponsiveContainer width="90%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tickFormatter={(word) => translations[word.toLowerCase()] || word}
          tick={{ fill: "white", fontSize: 11 }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          strokeOpacity={0.6}
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

RadarCharts.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RadarCharts;
