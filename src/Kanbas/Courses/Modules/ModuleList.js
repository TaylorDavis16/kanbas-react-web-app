import React, {useEffect} from "react";
import Module from "./";
import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse } from "./client";
import { setModules } from "./modulesReducer";
function ModuleList({ course }) {
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(course._id)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [course._id, dispatch]);

  const modules = useSelector((state) => state.modulesReducer.modules).filter(e => e.course === course._id);
  return (
    <div className="list-group p-0 mb-5 rounded-0 course-module">
      <div
        href="./"
        className="d-flex list-group-item list-group-item-secondary module-title border-start-1 border-top-1 border-end-1 border-bottom-0"
      >
        <div className="d-flex align-items-center two-ellipsis">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="ms-2 me-auto">
          <a href="./">Week 0 - INTRO</a>
        </div>
        <div className="d-flex align-items-center title-icons float-end">
          {/* <i className="fa fa-plus me-3" aria-hidden="true"></i> */}
          {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
        </div>
      </div>
      {modules.map((module) => (
        <Module key={module._id} module={module} />
      ))}
    </div>
  );
}

export default ModuleList;
