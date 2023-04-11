import React from 'react';
import styles from './NutritionData.module.scss';

function NutritionData(props) {
    return (
        <div className={styles.data}>
      <span>
        <img  className={styles.icon} src={props.icon} alt="icon" />
      </span>
            <div className={styles.infos}>
            <span>{props.value}</span>
            <span>{props.unit}</span>
            </div>
        </div>
    );
}

export default NutritionData;
