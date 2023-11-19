import { Link } from "react-router-dom";

function Card(props) {
  const {course, deleteCourse, setCourse, setOnEdit} = props;
  const editCourseHandler = (e) => {
    e.preventDefault();
    setCourse(course);
    setOnEdit(true);
  }
  const deleteCourseHandler = (e) => {
    e.preventDefault();
    deleteCourse(course._id);
  }
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="dropdown card-img-top course-solid-color d-flex flex-row">
          <button
            className="btn position-absolute top-0 end-0 right-0 m-2 override-card-img-button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="./" onClick={editCourseHandler}>
                Edit
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./" onClick={deleteCourseHandler}>
                Delete
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body d-flex flex-column">
          <Link to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link">
            <div className="card-header-content-container">
              <h6 className="card-title ellipsis">
                <span className="card-title-text">
                  {course.name}
                </span>
              </h6>
              <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
              <p className="card-text ellipsis">
                {course.startDate} - {course.endDate}
              </p>
            </div>
          </Link>
          <a href="./" className="course-card-icon">
            <i className="fa-regular fa-note-sticky"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
