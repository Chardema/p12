import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./Layout.module.scss";
import Leftbar from "../components/Leftbar/Leftbar";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../pages/Home";

function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.Layout}>
        <Header />
        <div className={styles.container}>
          <Leftbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="user/:id" element={<Dashboard />} />
          </Routes>
        </div>
        <br />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
