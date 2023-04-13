import styles from './Dashboard.module.scss';
import NutritionData from "../NutritionData/NutritionData";
import {USER_MAIN_DATA} from './../../api/data.js';
import {USER_ACTIVITY} from './../../api/data.js';
import caloriesIcon from './../../img/calorie.svg';
import carbohydrate from './../../img/carbohydrate.svg';
import lipid from './../../img/lipid.svg';
import protein from './../../img/protein.svg';
import Simplebarcharts from "../Simplebarcharts/Simplebarcharts";
import RadarChart from "./../../components/RadarChart/RadarChart.js";
import LineCharts from "./../../components/LineChart/LineChart.js";
import PieChartComponent from "./../../components/PieChart/PieChart.js";



const Dashboard = () => {

    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
                <h1>Bienvenue, <span className={styles.titlered}>{USER_MAIN_DATA[0].userInfos.firstName}</span></h1>
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
                        <PieChartComponent />
                    </div>
                </div>
                <div className={styles.nutrition}>
                    <NutritionData icon={caloriesIcon} value={USER_MAIN_DATA[0].keyData.calorieCount} unit="cal" />
                    <NutritionData icon={carbohydrate} value={USER_MAIN_DATA[0].keyData.proteinCount} unit="g" />
                    <NutritionData icon={lipid} value={USER_MAIN_DATA[0].keyData.carbohydrateCount} unit="g" />
                    <NutritionData icon={protein} value={USER_MAIN_DATA[0].keyData.lipidCount} unit="g" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;



