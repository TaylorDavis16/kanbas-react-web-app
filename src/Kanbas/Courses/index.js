import db from "../../Kanbas/Database";
import {
  Link,
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
import Assignments from "../Assignments";
import AssignmentButtons from "./Components/AssignmentButtons";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "./Grades";
import NotFoundPage from "../../404Page";
function Courses() {
    let { courseId } = useParams();
    const location = useLocation();
    const paths = location.pathname.split("/"), oldCourse = courseId;
    let name = paths.length > 4 ? paths[4] : "Home";
    if (courseId === undefined) {
      courseId = db.courses[0]._id;
    }
    const course = db.courses.find((course) => course._id === courseId);
    if (course === undefined) {
      return <NotFoundPage />;
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
              {(name === "Home" || name === "Modules") && <CoursesButtons />}
              {name === "Assignments" && <AssignmentButtons />}
              <Routes>
                <Route
                  index
                  element={
                    <Navigate
                      to={oldCourse === undefined ? `${course._id}/Home` : "Home"}
                    />
                  }
                />
                <Route
                  path="Home"
                  element={
                    <Home
                      course={course}
                      modules={db.modules.filter((m) => m.course === course._id)}
                    />
                  }
                />
                <Route
                  path="Modules"
                  element={
                    <ModuleList
                      modules={db.modules.filter((m) => m.course === course._id)}
                    />
                  }
                />
                <Route
                  path="Assignments"
                  element={
                    <Assignments
                      course={course}
                      assignments={db.assignments.filter(
                        (a) => a.course === courseId
                      )}
                    />
                  }
                />
                <Route
                  path="Assignments/:assignmentId"
                  element={<AssignmentEditor />}
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