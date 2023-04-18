import styles from './Dashboard.module.scss';
import NutritionData from "../NutritionData/NutritionData";
import {USER_MAIN_DATA} from './../../api/data.js';
import caloriesIcon from './../../img/calorie.svg';
import carbohydrate from './../../img/carbohydrate.svg';
import lipid from './../../img/lipid.svg';
import protein from './../../img/protein.svg';
import Simplebarcharts from "../Simplebarcharts/Simplebarcharts";
import RadarChart from "./../../components/RadarChart/RadarChart.js";
import LineCharts from "./../../components/LineChart/LineChart.js";
import RadialBarCharts from "../PieChart/RadialBarCharts.js";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getMockData from "../../api/datacall";



const Dashboard = () => {
    const [user, setUser] = useState({});
    const {id} =  useParams();
    console.log(id);
    useEffect(() => {
        getMockData(id).then(data => {
            setUser(data.userInfos);
        });

    },[id])

    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
                <h1 className={styles.dashboard__headertitle}>Bienvenue, <span className={styles.titlered}>{user.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={styles.container}>
                <div className={styles.graphsContainer}>
                    <div className={styles.dashboard__firstgraph}>
                        <Simplebarcharts />
                    </div>
                    <div className={styles.dashboard__secondcontainer}>
                        <LineCharts />
                        <RadarChart />
                        <RadialBarCharts />
                    </div>
                </div>
                <div className={styles.nutrition}>
                    <NutritionData icon={caloriesIcon} value={USER_MAIN_DATA[0].keyData.calorieCount} unit="cal" info="Calories"/>
                    <NutritionData icon={carbohydrate} value={USER_MAIN_DATA[0].keyData.proteinCount} unit="g" info="Protéines"/>
                    <NutritionData icon={lipid} value={USER_MAIN_DATA[0].keyData.carbohydrateCount} unit="g" info="Glucides"/>
                    <NutritionData icon={protein} value={USER_MAIN_DATA[0].keyData.lipidCount} unit="g"  info="Lipides"/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;



