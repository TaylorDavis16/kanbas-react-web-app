import React from "react";
import "./assignments.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import Assignment from "./Assignment";
import { useNavigate } from "react-router";
function Assignments({ course }) {
  const searchText = useSelector((state) => state.searchReducer.text);
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  ).filter((e) => e.course === course._id && (e.title.includes(searchText) || e.description?.includes(searchText)));
  const dispatch = useDispatch();
  const handleDelete = (e, assignment) => {
    e.preventDefault();
    dispatch(deleteAssignment(assignment._id));
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="list-group p-0 mb-5 rounded-0 assignment-module">
        <div
          href="./"
          className="d-flex list-group-item list-group-item-secondary border-start-1 border-top-1 border-end-1 border-bottom-0 justify-content-between"
        >
          <div className="d-flex align-items-center two-ellipsis">
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <div className="ms-2">Assignments</div>
          </div>

          <div className="d-flex align-items-center">
            <div className="rounded-pill border border-dark-subtle">
              <span className="mx-3">40% of Total</span>
            </div>
            <button className="btn" onClick={() => navigate(`/Kanbas/Courses/${course._id}/Assignments/new`)}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

        {assignments.map((assignment) => (
          <Assignment
            key={assignment._id}
            assignment={assignment}
            course={course}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
export default Assignments;
