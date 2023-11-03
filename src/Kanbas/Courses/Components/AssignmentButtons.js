import { Link } from "react-router-dom";

function AssignmentButtons({ course }) {
  return (
    <>
      <div
        className="d-flex mb-1 justify-content-between"
        id="assignments-top-buttons"
      >
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
          />
        </div>
        <div>
          <button className="btn btn-light me-1 ellipsis" type="button">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Group
          </button>
          <Link to={`/Kanbas/Courses/${course._id}/Assignments/new`}>
            <button className="btn btn-danger me-1 ellipsis" type="button">
              <i className="fa fa-plus" aria-hidden="true"></i>
              Assignment
            </button>
          </Link>
          <button className="btn btn-light me-1" type="button">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default AssignmentButtons;
