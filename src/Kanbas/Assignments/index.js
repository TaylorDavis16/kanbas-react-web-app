import React from "react";
import { Link } from "react-router-dom";
import "./assignments.css";
function Assignments(props) {
  const { course, assignments } = props;
  return (
    <div>
      <div className="list-group p-0 mb-5 rounded-0 assignment-module">
        <div
          href="./"
          className="d-flex list-group-item list-group-item-secondary module-title border-start-1 border-top-1 border-end-1 border-bottom-0"
        >
          <div className="d-flex align-items-center two-ellipsis">
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="ms-2 me-auto">
            <a href="./">Assignments</a>
          </div>
          <div className="d-flex align-items-center title-icons">
            <div className="rounded-pill border border-dark-subtle me-3">
              <span className="mx-3 ">40% of Total</span>
            </div>
            <i className="fa fa-plus me-3" aria-hidden="true"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

        {assignments.map((assignment) => (
          <div
            href="./"
            className="d-flex align-items-center list-group-item assignment-item finished"
            key={assignment._id}
          >
            <div className="d-flex align-items-center two-ellipsis">
              <i className="fa-solid fa-ellipsis-vertical"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <Link
              to={`/Kanbas/Courses/${course._id}/Assignments/${assignment._id}`}
            >
              <div className="ms-3 assignment-item-icon">
                <i className="fa-regular fa-pen-to-square"></i>
              </div>
            </Link>
            <div className="d-flex flex-column ms-3 me-auto">
              <div className="assignment-item-title">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Assignments/${assignment._id}`}
                >
                  {assignment._id}
                </Link>
              </div>
              <div className="assignment-item-detail">{assignment.title}</div>
              <div className="assignment-item-due-date">
                <strong>Due</strong> No Due Date
              </div>
            </div>
            <div className="d-flex align-items-center float-end">
              <i className="fa fa-check-circle me-3" aria-hidden="true"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
