/**
 * @file Dashboard component
 * @module components/Dashboard
 */
import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import NutritionData from "../NutritionData/NutritionData";
import caloriesIcon from "./../../img/calorie.svg";
import carbohydrate from "./../../img/carbohydrate.svg";
import lipid from "./../../img/lipid.svg";
import protein from "./../../img/protein.svg";
import Simplebarcharts from "../Simplebarcharts/Simplebarcharts";
import RadarChart from "./../../components/RadarChart/RadarChart.js";
import LineCharts from "./../../components/LineChart/LineChart.js";
import RadialBarCharts from "../PieChart/RadialBarCharts.js";
import { useParams } from "react-router-dom";
import { switchUserData } from "../../api/datacall";
import Models from "../../api/Model";
/**
 * Dashboard component, displaying user information and various chart components.
 * @function Dashboard
 * @returns {React.Element} - The rendered Dashboard component
 */
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [userSessionData, setUserSessionData] = useState([]);
  const [userKinds, setUserKinds] = useState({});
  const { id } = useParams();
  const models = new Models();

  /**
   * Fetch user data and activity data and set state.
   */

  useEffect(() => {
    switchUserData(id, true)
      .then(({ userData, userActivity, userSessionData, userKind }) => {
        setUser(userData);
        setUserActivity(userActivity.sessions);
        setUserPerformance(
          models.getPerformanceData(userKind.data, userKind.kind)
        );
        console.log(userSessionData);
        setUserSessionData(userSessionData);
        setUserKinds(userKind.kind);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  const performanceData = models.getPerformanceData(userPerformance, userKinds);
  const userScore = models.getUserScoreWrapper(user);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__header}>
        <h1 className={styles.dashboard__headertitle}>
          Bienvenue,{" "}
          <span className={styles.titlered}>
            {user && user.userInfos && user.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={styles.container}>
        <div className={styles.graphsContainer}>
          <div className={styles.dashboard__firstgraph}>
            <Simplebarcharts userActivity={userActivity} />
          </div>
          <div className={styles.dashboard__secondcontainer}>
            <LineCharts
              data={userSessionData.sessions ? userSessionData.sessions : []}
            />
            {performanceData.length > 0 ? (
              <RadarChart performanceData={performanceData} />
            ) : (
              <div>Loading...</div>
            )}
            {userScore !== undefined ? (
              <RadialBarCharts userScore={userScore} key={id} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className={styles.nutrition}>
          <NutritionData
            icon={caloriesIcon}
            value={user && user.keyData && user.keyData.calorieCount}
            unit="cal"
            info="Calories"
          />
          <NutritionData
            icon={protein}
            value={user && user.keyData && user.keyData.proteinCount}
            unit="g"
            info="Protéines"
          />
          <NutritionData
            icon={carbohydrate}
            value={user && user.keyData && user.keyData.carbohydrateCount}
            unit="g"
            info="Glucides"
          />
          <NutritionData
            icon={lipid}
            value={user && user.keyData && user.keyData.lipidCount}
            unit="g"
            info="Lipides"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
