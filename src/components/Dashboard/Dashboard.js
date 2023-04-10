import { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import {USER_MAIN_DATA} from './../../api/data.js';
import {USER_ACTIVITY} from './../../api/data.js';
import { BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Dashboard = () => {
    const [user, setUser] = useState({});
    console.log(USER_ACTIVITY[0].sessions); // Affiche les données de l'utilisateur

    function BarChartLegend() {
        return (
            <div>
                <div className={styles.data1} style={{ backgroundColor: "#282D30", height: "10px", width: "10px", display: "inline-block", marginRight: "5px" }}></div>
                <span style={{ marginRight: "20px" }}>Kilogrammes</span>
                <div style={{ backgroundColor: "#E60000", height: "10px", width: "10px", display: "inline-block", marginRight: "5px" }}></div>
                <span>Calories brûlées</span>
            </div>
        );
    }


    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
            <h1>Bienvenue, {USER_MAIN_DATA[0].userInfos.firstName} !</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={styles.dashboard__firstgraph}>
                    <p className={styles.graph__title} style={{ margin: 0 }}>Activité quotidienne</p>
                    <BarChart width={800} height={400} data={USER_ACTIVITY[1].sessions}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                        <XAxis axisLine={false}/>
                        <YAxis  dataKey="kilogram"  orientation={"right"} domain={[60,"auto"]} axisLine={false}/>
                        <Tooltip />
                        <Legend layout={"vertical"} align={"right"} />
                        <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10} />
                        <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10} />
                    </BarChart>
            </div>
        </div>
    );
}

export default Dashboard;
