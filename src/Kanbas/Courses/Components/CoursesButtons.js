function CoursesButtons() {
  return (
    <>
      <div
        className="d-flex flex-row ms-auto float-end mb-1"
        id="courses-content-top-buttons"
      >
        <button className="btn btn-light me-1 ellipsis" type="button">
          Collapse All
        </button>
        <button className="btn btn-light me-1 ellipsis" type="button">
          View Progress
        </button>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle me-1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="./">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-danger me-1 ellipsis" type="button">
          <i className="fa fa-plus" aria-hidden="true"></i>
          Module
        </button>
        <button className="btn btn-light me-1" type="button">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      <hr />
    </>
  );
}

export default CoursesButtons;
