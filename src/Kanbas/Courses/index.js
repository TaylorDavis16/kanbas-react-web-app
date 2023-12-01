import {
  useLocation,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./Components/CourseNavigation";
import React from "react";
import "./courses.css";
import CourseHeader from "./Components/CourseHearder";
import CoursesButtons from "./Components/CoursesButtons";
import ModuleList from "./Modules/ModuleList";
import Home from "./Home";
import RightSidebar from "./Home/RightSidebar";
import Assignments from "./Assignments";
import AssignmentButtons from "./Components/AssignmentButtons";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import NotFoundPage from "../../404Page";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Courses() {
  let courseId = useRef(useParams().courseId);
  const location = useLocation();
  const paths = location.pathname.split("/"),
    oldCourse = courseId.current;
  let name = paths.length > 4 ? paths[4] : "Home";
  // if (courseId === undefined) {
  //   courseId = courses[0]._id;
  // }
  const navigate = useRef(useNavigate());

  const [course, setCourse] = useState({});
  const URL = `${process.env.REACT_APP_BASE_API_URL}/api/courses`;
  useEffect(() => {
    const findCourseById = async (courseId) => {
      try {
        const response = await axios.get(`${URL}/${courseId.current}`);
        setCourse(response.data);
        if (courseId.current === undefined) {
          navigate.current(`/Kanbas/Courses/${response.data._id}/Home`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    findCourseById(courseId);
  }, [URL]);

  if (course === undefined) {
    return <NotFoundPage homeLink="/Kanbas" />;
  }

  return (
    <div>
      <CourseHeader course={course} loc={name} />
      <hr />
      <div className="d-flex flex-row">
        <CourseNavigation course={course} loc={name} />
        {/* Content div */}
        <div className="container-fluid d-flex flex-row me-3">
          <div className="col-12 col-xl-9 d-flex flex-column mx-4">
            {(name === "Home" || name === "Modules") && (
              <CoursesButtons course={course} />
            )}
            {name === "Assignments" && paths.length === 5 && (
              <AssignmentButtons course={course} />
            )}
            <Routes>
              <Route
                index
                element={
                  <Navigate
                    to={oldCourse === undefined ? `${course._id}/Home` : "Home"}
                  />
                }
              />
              <Route path="Home" element={<Home course={course} />} />
              <Route path="Modules" element={<ModuleList course={course} />} />
              <Route
                path="Assignments"
                element={<Assignments course={course} />}
              />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor course={course} />}
              />
              <Route path="Grades" element={<Grades course={course} />} />
              <Route path="*" element={<h1>No Content Yet</h1>} />
            </Routes>
          </div>
          <div
            className="col-xl-3 d-flex flex-column px-3"
            id="courses-right-sidebar"
          >
            {name === "Home" && <RightSidebar />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
