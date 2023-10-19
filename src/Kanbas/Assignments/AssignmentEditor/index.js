import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );
    const [title, setTitle] = useState(assignment.title);
    const courseId  = assignment.course;
    const navigate = useNavigate();
    const handleSave = () => {
        assignment.title = title;
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
        <h2>Assignment Name</h2>
        <input value={title} className="form-control mb-2" onChange={(e) => setTitle(e.target.value)}/>
        <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger me-2"
        >
            Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
            Save
        </button>
        </div>
    );
}

export default AssignmentEditor;
