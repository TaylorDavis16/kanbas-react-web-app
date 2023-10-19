import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import "./account.css";
import AccountNavigation from "./AccountNavigation";
import AccountSection from "./AccountSection";
function Account() {
  const location = useLocation();
  const paths = location.pathname.split("/");
  let name = paths.length > 3 ? paths[3] : "Profile";
  return (
    <div>
      <span
        id="account-page-header"
        className="d-flex flex-row align-items-center"
      >
        <h2>
          <i
            className="fa-solid fa-bars fa-1x me-4"
            id="account-page-header-icon"
          ></i>
          Xingdong Li's Profile
        </h2>
      </span>
      <hr />
      <div className="d-flex flex-row">
        <AccountNavigation loc={name} />
        <Routes>
          <Route index element={<Navigate to="Profile" />} />
          <Route path="Profile" element={<AccountSection />} />
          <Route path="*" element={<h1>No Content Yet</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Account;
