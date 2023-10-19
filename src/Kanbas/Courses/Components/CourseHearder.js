import { Link } from "react-router-dom";
function CourseHeader(props) {
  const { course, loc } = props;
  return (
    <>
      <h2>{course.name}</h2>
      <div
        id="courses-page-header"
        className="d-flex flex-row align-items-center"
      >
        <i
          className="fa-solid fa-bars fa-1x me-3"
          id="courses-page-header-icon"
        ></i>
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="Home">
                {course.number}-{course.name}-{course.startDate}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {loc}
            </li>
          </ol>
        </nav>
        <div className="ms-auto float-end">
          <a href="./" className="btn btn-light">
            <i className="fa-solid fa-glasses me-1"></i>
            Student View
          </a>
        </div>
      </div>
    </>
  );
}
export default CourseHeader;
