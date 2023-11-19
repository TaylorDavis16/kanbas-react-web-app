import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  sendAddAssignment,
  sendUpdateAssignment,
  sendDeleteAssignment,
} from "../client";
import {
  addAssignment,
  updateAssignment,
  deleteAssignment,
} from "../assignmentsReducer";

function AssignmentEditor({ course }) {
  const { assignmentId } = useParams();
  let assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const cur = assignments.find((a) => a._id === assignmentId);
  const [assignment, setAssignment] = useState(
    cur
      ? cur
      : {
          _id: new Date().getTime().toString(),
          title: "New Assignment",
          description: "Some Description",
          points: 0,
          course: course._id,
          due: "",
          from: "",
          until: "",
        }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    if (cur !== undefined) {
      sendUpdateAssignment(assignment).then((res) => {
        dispatch(updateAssignment(res));
      });
    } else {
      sendAddAssignment(assignment).then((res) => {
        dispatch(addAssignment(res));
      });
    }
    navigate(`/Kanbas/Courses/${assignment.course}/Assignments`);
  };

  const handleDelete = () => {
    sendDeleteAssignment(assignment).then((res) => {
      dispatch(deleteAssignment(assignment._id));
      navigate(`/Kanbas/Courses/${assignment.course}/Assignments`);
    });
  }
  return (
    <div className="container-fluid">
      <div>
        <div>
          <h3>Assignment Title</h3>
          <input
            placeholder="Assignment Title"
            value={assignment.title}
            className="form-control mb-2"
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </div>

        <div className="mt-3">
          <h3>Assignment Description</h3>
          <textarea
            placeholder="New Assignment Description"
            value={assignment.description}
            className="form-control mb-2"
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
            rows="3"
          ></textarea>
        </div>

        <div className="d-flex mt-3">
          <h3>Points</h3>
          <input
            placeholder="From 0 to 100"
            value={assignment.points}
            type="number"
            className="form-control mb-2"
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
          />
        </div>

        <div>
          <h3>Assign</h3>
          <div
            style={{
              border: "1px solid black",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <h4>Due</h4>
            <input
              value={assignment.due}
              type="date"
              className="form-control mb-2"
              onChange={(e) =>
                setAssignment({ ...assignment, due: e.target.value })
              }
            />

            <h4>Available from</h4>
            <input
              value={assignment.from}
              type="datetime-local"
              className="form-control mb-2"
              onChange={(e) =>
                setAssignment({ ...assignment, from: e.target.value })
              }
            />

            <h4>Until</h4>
            <input
              value={assignment.until}
              type="datetime-local"
              className="form-control mb-2"
              onChange={(e) =>
                setAssignment({ ...assignment, until: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <button
          onClick={() =>
            navigate(`/Kanbas/Courses/${assignment.course}/Assignments`)
          }
          className="btn btn-secondary me-2"
        >
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
        {cur !== undefined && (
          <button
            onClick={handleDelete}
            className="btn btn-danger me-2"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default AssignmentEditor;
