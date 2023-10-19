function RightSidebar() {
  return (
    <>
      <div className="course-status">
        <h5>Course Status</h5>
        <div className="d-flex flex-row">
          <button className="btn btn-light btn-50-width ellipsis">
            <i className="fa-solid fa-ban"></i>
            Unpublish
          </button>
          <button className="btn btn-success btn-50-width ellipsis">
            <i
              className="fa fa-check-circle me-3 check-white"
              aria-hidden="true"
            ></i>
            Published
          </button>
        </div>
      </div>
      <div className="d-flex flex-column mt-3">
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-solid fa-file-import"></i>
          Import Existing Content
        </button>
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-solid fa-file-import"></i>
          Import From Commons
        </button>
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-solid fa-bullseye"></i>
          Choose Home Page
        </button>
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-solid fa-chart-simple"></i>
          View Course Stream
        </button>
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-regular fa-bell"></i>
          New Announcement
        </button>
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-solid fa-chart-simple"></i>
          New Analytics
        </button>
        <button className="btn btn-light mb-2 text-left ps-4 ellipsis">
          <i className="fa-regular fa-bell"></i>
          View Course Notifications
        </button>
      </div>
      <div className="d-flex flex-column mt-3 right-sidebar-to-do">
        <h5 className="mb-0">To Do</h5>
        <hr />
        <div className="d-flex flex-row to-do-item ">
          <div className="col-2 mt-1">
            <span className="fa-stack fa-2xs d-block numbered-notification-badger">
              <i className="fa-solid fa-circle fa-stack-2x"></i>
              <span className="fa fa-stack-1x">1</span>
            </span>
          </div>
          <div className="col-9">
            <div className="d-flex flex-column">
              <div>
                <a href="./" className="to-do-item-title link-red">
                  Grade Combustion Analysis
                </a>
              </div>
              <div className="to-do-item-detail right-sidebar-detail">
                100 points Oct 19 at 11:59pm
              </div>
            </div>
          </div>
          <div className="col-1">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-3 right-sidebar-coming-up">
        <div className="d-flex flex-row align-items-center">
          <div className="col-7">
            <h5 className="mb-0 text-nowrap">Coming Up</h5>
          </div>
          <div className="col-5 text-nowrap ellipsis ms-1">
            <i className="fa-regular fa-calendar"></i>
            <a href="./" className="link-red text-nowrap">
              View Calendar
            </a>
          </div>
        </div>
        <hr />
        <div className="coming-up-items mb-3">
          <div className="right-sidebar-coming-up-item">
            <div className="d-flex flex-row">
              <div className="col-1 coming-up-item-icon">
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className="col-11 d-flex flex-column">
                <div className="row coming-up-item-title">
                  <a href="./" className="link-red">
                    Lecture
                  </a>
                  <div className="coming-up-item-detail right-sidebar-detail">
                    Rocket Propulsion
                    <br />
                    Oct 11 at 11:45am
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-sidebar-coming-up-item">
            <div className="d-flex flex-row">
              <div className="col-1 coming-up-item-icon">
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className="col-11 d-flex flex-column">
                <div className="row coming-up-item-title">
                  <a href="./" className="link-red">
                  Aerodynamics
                  </a>
                  <div className="coming-up-item-detail right-sidebar-detail">
                  Aerodynamics Quiz
                    <br />
                    Oct 20 at 6pm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-sidebar-coming-up-item">
            <div className="d-flex flex-row">
              <div className="col-1 coming-up-item-icon">
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className="col-11 d-flex flex-column">
                <div className="row coming-up-item-title">
                  <a href="./" className="link-red">
                  Spacecraft Design
                  </a>
                  <div className="coming-up-item-detail right-sidebar-detail">
                  Structural Design Task
                    <br />
                    Oct 28 at 5pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar-coming-up-next-week">
          <a href="./" className="link-red link-small">
            12 more in the next week...
          </a>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
