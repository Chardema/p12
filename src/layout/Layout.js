import {Routes, Route} from 'react-router-dom';
import Header from "../components/Footer/Header/Header";
import Home from "../pages/Home/Home";
import styles from "./Layout.module.scss";
function Layout() {
    return (
        <div className={styles.Layout}>
            <Header/>
            <div className={styles.container}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
            <br/>
        </div>
    );
}

export default Layout;