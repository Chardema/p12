import styles from './Dashboard.module.scss';
import NutritionData from "../NutritionData/NutritionData";
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
    const [user, setUser] = useState(null);
    const [userActivity, setUserActivity] = useState([]);
    const {id} =  useParams();

    useEffect(() => {
        getMockData(id).then(({ userData, userActivity }) => {
            setUser(userData);
            setUserActivity(userActivity.sessions);
        });
    }, [id]);
//permet de prendre en compte les deux élèments score et todayScore
    const getUserScore = (user) => {
        if (user.todayScore !== undefined) {
            return user.todayScore;
        } else if (user.score !== undefined) {
            return user.score;
        } else {
            return undefined;
        }
    };
    //rassemble en une seule const les deux élèments pour affichage dans la RadialbarChart
    const userScore = user && getUserScore(user);


    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
                <h1 className={styles.dashboard__headertitle}>Bienvenue,{" "}<span className={styles.titlered}>{user && user.userInfos && user.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={styles.container}>
                <div className={styles.graphsContainer}>
                    <div className={styles.dashboard__firstgraph}>
                        <Simplebarcharts userActivity={userActivity} />

                    </div>
                    <div className={styles.dashboard__secondcontainer}>
                        <LineCharts />
                        <RadarChart />
                        {userScore !== undefined ? <RadialBarCharts userScore={userScore} key={id} /> : <div>Loading...</div>}
                    </div>
                </div>
                <div className={styles.nutrition}>
                    <NutritionData icon={caloriesIcon} value={user && user.keyData && user.keyData.calorieCount} unit="cal" info="Calories"/>
                    <NutritionData icon={carbohydrate} value={user && user.keyData && user.keyData.proteinCount} unit="g" info="Protéines"/>
                    <NutritionData icon={lipid} value={user && user.keyData && user.keyData.carbohydrateCount} unit="g" info="Glucides"/>
                    <NutritionData icon={protein} value={user && user.keyData && user.keyData.lipidCount} unit="g"  info="Lipides"/>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;



