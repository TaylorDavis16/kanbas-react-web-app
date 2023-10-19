function GradeButtons() {
  return (
    <div
      className="d-flex flex-row align-items-center ms-auto mb-3"
      id="grades-top-buttons"
    >
      <button className="btn btn-light me-1 ellipsis" type="button">
        <i className="fa-solid fa-file-import"></i>
        Import
      </button>
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle me-1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
        >
          <i className="fa-solid fa-file-export"></i>
          Export
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
      <button className="btn btn-light me-1" type="button">
        <i className="fa-solid fa-gear"></i>
      </button>
    </div>
  );
}

export default GradeButtons;
