import React from "react";
import styles from "./Admin.module.scss";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../../components/admin/home/Home";
import Profile from "../../components/admin/profile/Profile";
import Sub from "../../components/admin/subscription/Sub";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Sub />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
