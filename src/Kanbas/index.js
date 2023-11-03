import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import "./kanbas.css";
import NotFoundPage from "../404Page";
import Account from "./Account";
import Notice from "./Notice";
import db from "./Database";
import store from "./Store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const [onEdit, setOnEdit] = useState(false);
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
    if (course._id === courseId) {
      setOnEdit(false);
    }
  };
  const updateCourse = (courseId) => {
    setCourses(courses.map((c) => (c._id === courseId ? { ...course } : c)));
    setOnEdit(false);
  };
  return (
    <Provider store={store}>
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
            <Route
              path="Dashboard/*"
              element={
                <Dashboard
                  courses={courses}
                  setCourse={setCourse}
                  course={course}
                  onEdit={onEdit}
                  setOnEdit={setOnEdit}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Courses/*" element={<Courses courses={courses} />} />
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
    </Provider>
  );
}
export default Kanbas;
