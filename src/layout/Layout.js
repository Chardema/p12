import {Routes, Route,useParams,BrowserRouter} from 'react-router-dom';
import Header from "../components/Header/Header";
import styles from "./Layout.module.scss";
import Leftbar from "../components/Leftbar/Leftbar";
import Dashboard from "../components/Dashboard/Dashboard";
import getMockData from "../api/datacall";
import {useEffect,} from "react";


function Layout() {
    return (
        <BrowserRouter>
            <div className={styles.Layout}>
                <Header/>
                <div className={styles.container}>
                    <Leftbar/>
                    <Routes>
                        <Route path="user/:id" element={<Dashboard/>}/>
                    </Routes>
                </div>
                <br/>
            </div>

        </BrowserRouter>
    );
}

export default Layout;