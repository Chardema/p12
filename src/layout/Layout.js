import {Routes, Route} from 'react-router-dom';
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import styles from "./Layout.module.scss";
import Leftbar from "../components/Leftbar/Leftbar";
function Layout() {
    return (
        <div className={styles.Layout}>
            <Header/>
            <div className={styles.container}>
                <Leftbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
            <br/>
        </div>
    );
}

export default Layout;