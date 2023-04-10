import React from 'react';
import styles from './NutritionData.module.scss';

function NutritionData(props) {
    return (
        <div className={styles.data}>
      <span>
        <img src={props.icon} alt="icon" />
      </span>
            <span>{props.value}</span>
            <span>{props.unit}</span>
        </div>
    );
}

export default NutritionData;
