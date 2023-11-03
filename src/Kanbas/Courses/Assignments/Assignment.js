import React from "react";
import { Link } from "react-router-dom";
function Assignment({ assignment, course, handleDelete }) {
  return (
    <div
      href="./"
      className="d-flex align-items-center list-group-item assignment-item finished"
      key={assignment._id}
    >
      <div className="d-flex align-items-center two-ellipsis">
        <i className="fa-solid fa-ellipsis-vertical"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <Link to={`/Kanbas/Courses/${course._id}/Assignments/${assignment._id}`}>
        <div className="ms-3 assignment-item-icon">
          <i className="fa-regular fa-pen-to-square"></i>
        </div>
      </Link>
      <div className="d-flex flex-column ms-3 me-auto">
        <div className="assignment-item-title">
          <Link
            to={`/Kanbas/Courses/${course._id}/Assignments/${assignment._id}`}
          >
            {assignment.title}
          </Link>
        </div>
        <div className="assignment-item-detail">{assignment.description}</div>
        <div className="assignment-item-due-date">
          <strong>Due</strong> {assignment.due ? assignment.due : "No Due Date"}
        </div>
      </div>
      <div className="d-flex align-items-center float-end">
        <i className="fa fa-check-circle" aria-hidden="true"></i>
        <div className="drowdown">
          <button
            className="btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <i className="fa-solid fa-ellipsis-vertical mr-0"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link
                to={`/Kanbas/Courses/${course._id}/Assignments/${assignment._id}`}
                className="dropdown-item"
              >
                Edit
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="./"
                onClick={(e) => handleDelete(e, assignment)}
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
