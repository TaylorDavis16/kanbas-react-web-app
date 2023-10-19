import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import React from "react";
import { Routes, Route, Navigate } from "react-router";
import "./kanbas.css";
import NotFoundPage from "../404Page";
import Account from "./Account";
import Notice from "./Notice";
function Kanbas() {
  return (
    <div className="d-flex" id="wrapper">
      <div id="sidebar-wrapper">
        <KanbasNavigation />
      </div>
      <div
        className="page-content-wrapper container-fluid"
        style={{
          marginLeft: "25px",
        }}
      >
        <Routes>
          <Route index element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses/*" element={<Courses />} />
          <Route path="Calendar" element={<Notice />} />
          <Route path="Inbox" element={<Notice />} />
          <Route path="History" element={<Notice />} />
          <Route path="Studio" element={<Notice />} />
          <Route path="Commons" element={<Notice />} />
          <Route path="Help" element={<Notice />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
