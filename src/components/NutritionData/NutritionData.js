import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ColorThief from "colorthief";
import styles from "./NutritionData.module.scss";

/**
 * NutritionData component that render a nutrition data with background related with image put on it.
 *
 * @component
 *
 * @param {Object} props - props of NutritionData component
 * @param {string} props.icon - icon image URL
 * @param {number} props.value - value of nutrition data
 * @param {string} props.unit - unit of the nutrition data
 * @param {string} props.info - additional info
 *
 * @returns {React.Node} - NutritionData component
 */
function NutritionData(props) {
  const [bgColor, setBgColor] = useState("#ffffff");
  const imgRef = useRef(null);
  const colorThief = new ColorThief();

  useEffect(() => {
    const extractColor = () => {
      if (imgRef.current.complete) {
        const color = colorThief.getColor(imgRef.current);
        setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
      } else {
        imgRef.current.addEventListener("load", () => {
          const color = colorThief.getColor(imgRef.current);
          setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
        });
      }
    };

    extractColor();
  }, [props.icon, colorThief]);

  // Convertir les calories en kilocalories si l'unité est "cal"
  const displayValue =
    props.unit === "cal" ? (props.value / 1000).toFixed(3) : props.value;
  const displayUnit = props.unit === "cal" ? "kcal" : props.unit;

  return (
    <div className={styles.data}>
      <span style={{ backgroundColor: bgColor }} className={styles.iconWrapper}>
        <img ref={imgRef} className={styles.icon} src={props.icon} alt="icon" />
      </span>
      <div className={styles.infosWrapper}>
        <div className={styles.infos}>
          <span>{displayValue}</span>
          <span>{displayUnit}</span>
        </div>
        <div className={styles.infonutri}>
          <span>{props.info}</span>
        </div>
      </div>
    </div>
  );
}

NutritionData.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default NutritionData;
