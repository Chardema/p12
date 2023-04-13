import React, { useEffect, useRef, useState } from 'react';
import ColorThief from "colorthief";
import styles from './NutritionData.module.scss';

function NutritionData(props) {
    const [bgColor, setBgColor] = useState('#ffffff');
    const imgRef = useRef(null);
    const colorThief = new ColorThief();

    useEffect(() => {
        const extractColor = () => {
            if (imgRef.current.complete) {
                const color = colorThief.getColor(imgRef.current);
                setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
            } else {
                imgRef.current.addEventListener('load', () => {
                    const color = colorThief.getColor(imgRef.current);
                    setBgColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
                });
            }
        };

        extractColor();
    }, [props.icon, colorThief]);

    return (
        <div className={styles.data}>
      <span style={{ backgroundColor: bgColor }} className={styles.iconWrapper}>
        <img ref={imgRef} className={styles.icon} src={props.icon} alt="icon" />
      </span>
            <div className={styles.infos}>
                <span className={styles.value}>{props.value}</span>
                <span className={styles.unit}>{props.unit}</span>
            </div>
        </div>
    );
}

export default NutritionData;
