import "./dashboard.css";
import Card from "./Card";
import React, { useState } from "react";
function Dashboard({
  courses,
  setCourses,
  course,
  setCourse,
  onEdit,
  setOnEdit,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <>
      <span id="page-header">
        <h2>Dashboard</h2>
      </span>
      <hr />
      <div className="container-fluid">
        <div className="container-fluid">
          <span id="page-subheader">
            <h4>Published Courses ({courses.length})</h4>
          </span>
          <div className="d-flex justify-content-between align-items-center">
            <input
              value={course.name}
              placeholder="Course Name"
              className="form-control me-3"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
              value={course.number}
              placeholder="Course Number"
              className="form-control me-3"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
              value={course.startDate}
              className="form-control me-3"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
            <input
              value={course.endDate}
              className="form-control me-3"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={onEdit ? () => updateCourse(course._id) : addNewCourse}
            >
              {onEdit ? "Update Course" : "Add Course"}
            </button>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <div
            className="d-flex flex-row flex-wrap row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4 justify-content-start align-items-stretch"
            id="cards-container"
          >
            {courses.map((course) => (
              <Card
                key={course._id}
                course={course}
                deleteCourse={deleteCourse}
                setCourse={setCourse}
                setOnEdit={setOnEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
