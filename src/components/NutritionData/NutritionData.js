import React from 'react';

function NutritionData(props) {
    return (
        <div>
      <span>
        <img src={props.icon} alt="icon" />
      </span>
            <span>{props.value}</span>
            <span>{props.unit}</span>
        </div>
    );
}

export default NutritionData;
