import { Link } from "react-router-dom";

function Card(course) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-img-top course-solid-color d-flex flex-row">
          <img src="" alt="" />
          <button
            type="button"
            className="btn position-absolute top-0 end-0 right-0 m-2 override-card-img-button"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
        <div className="card-body d-flex flex-column">
          <Link to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link">
            <div className="card-header-content-container">
              <h6 className="card-title ellipsis">
                <span className="card-title-text">
                  {course._id} {course.name}
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
