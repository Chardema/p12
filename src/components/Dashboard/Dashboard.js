import { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import NutritionData from "../NutritionData/NutritionData";
import {USER_MAIN_DATA} from './../../api/data.js';
import {USER_ACTIVITY} from './../../api/data.js';
import caloriesIcon from './../../img/calorie.svg';
import carbohydrate from './../../img/carbohydrate.svg';
import lipid from './../../img/lipid.svg';
import protein from './../../img/protein.svg';
import {USER_AVERAGE_SESSIONS} from './../../api/data.js';
import {USER_PERFORMANCE} from './../../api/data.js';
import { BarChart,Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Simplebarcharts from "../Simplebarcharts/Simplebarcharts";



const Dashboard = () => {
    const [user, setUser] = useState({});
    console.log(USER_ACTIVITY[0].sessions); // Affiche les données de l'utilisateur


    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
            <h1>Bienvenue, {USER_MAIN_DATA[0].userInfos.firstName} !</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={styles.container}>
            <div className={styles.dashboard__firstgraph}>
                <Simplebarcharts />
            </div>
                <div className={styles.nutrition}>
                    <NutritionData icon={caloriesIcon} value={USER_MAIN_DATA[0].keyData.calorieCount} unit="cal"
                    />
                    <NutritionData icon={carbohydrate} value={USER_MAIN_DATA[0].keyData.proteinCount} unit="g"
                    />
                    <NutritionData icon={lipid} value={USER_MAIN_DATA[0].keyData.carbohydrateCount} unit="g" />

                    <NutritionData icon={protein} value={USER_MAIN_DATA[0].keyData.lipidCount} unit="g" />
                </div>
            </div>
            <div className={styles.dashboard__secondcontainer}>
                <div className={styles.dashboard__allgraph}>
            <div className={styles.dashboard__secondgraph}>
                <AreaChart>
                    <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                        <tspan fontSize="14">Zone de l'area chart</tspan>
                    </text>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                    <XAxis axisLine={false}/>
                    <YAxis dataKey="caloriesBurned" orientation={"right"} domain={[60,"auto"]} axisLine={false}/>
                    <Tooltip />
                    <Legend verticalAlign="top" iconType={"circle"}/>
                    <Area dataKey="caloriesBurned" fill="#8884d8" stroke="#8884d8" />
                </AreaChart>
            </div>
                <div className={styles.dashboard__thirdgraph}>
                    <AreaChart>
                        <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                            <tspan fontSize="14">Zone de l'area chart</tspan>
                        </text>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                        <XAxis axisLine={false}/>
                        <YAxis dataKey="caloriesBurned" orientation={"right"} domain={[60,"auto"]} axisLine={false}/>
                        <Tooltip />
                        <Legend verticalAlign="top" iconType={"circle"}/>
                        <Area dataKey="caloriesBurned" fill="#8884d8" stroke="#8884d8" />
                    </AreaChart>
                </div>
                <div className={styles.dashboard__lastgraph}>
                    <AreaChart
>
                        <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                            <tspan fontSize="14">Zone de l'area chart</tspan>
                        </text>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                        <XAxis axisLine={false}/>
                        <YAxis dataKey="caloriesBurned" orientation={"right"} domain={[60,"auto"]} axisLine={false}/>
                        <Tooltip />
                        <Legend verticalAlign="top" iconType={"circle"}/>
                        <Area dataKey="caloriesBurned" fill="#8884d8" stroke="#8884d8" />
                    </AreaChart>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
