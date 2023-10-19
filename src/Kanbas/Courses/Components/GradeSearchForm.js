function GradeSearchForm() {
  return (
    <form action="#" id="grades-top-search-container" onSubmit={(e) => e.preventDefault()}>
      <div
        className="row mb-3"
        id="available-from-until-container"
        style={{ height: "80px" }}
      >
        <div className="col">
          <label htmlFor="student-names" className="form-label">
            <h6>Student Names</h6>
          </label>
          <div className="input-group">
            <span className="input-group-text bg-transparent">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="form-select border-start-0"
              name="student-names"
              id="student-names"
              placeholder="Search Students"
            />
          </div>
        </div>
        <div className="col">
          <label htmlFor="assignment-names" className="form-label">
            <h6>Assignment Names</h6>
          </label>
          <div className="input-group">
            <span className="input-group-text bg-transparent">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="form-select border-start-0"
              name="assignment-names"
              id="assignment-names"
              placeholder="Search Assignments"
            />
          </div>
        </div>
      </div>
      <button className="btn btn-secondary mb-3">
        <i className="fa-solid fa-filter"></i>
        Apply Filters
      </button>
    </form>
  );
}

export default GradeSearchForm;
