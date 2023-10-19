function Module(module) {
  return (
    <>
      <div
        href="#"
        className="d-flex align-items-center list-group-item module-level-1 finished"
      >
        <div className="d-flex align-items-center two-ellipsis">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="ms-2 me-auto">
          <a href="#">{module.name}</a>
        </div>
        <div className="d-flex align-items-center float-end">
          <i className="fa fa-check-circle me-3" aria-hidden="true"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div
        href="#"
        className="d-flex align-items-center list-group-item module-level-2 finished"
      >
        <div className="d-flex align-items-center two-ellipsis">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="module-subtask ms-5 me-auto">
          <a href="#">{module.description}</a>
        </div>
        <div className="d-flex flex-row align-items-center float-end">
          <i className="fa fa-check-circle me-3" aria-hidden="true"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </>
  );
}

export default Module;
