import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModule, addModule } from "../Modules/modulesReducer";
import { createModule } from "../Modules/client";
function CoursesButtons({ course }) {
  const module = useSelector((state) => state.modulesReducer.module);
  const [adding, setAdding] = useState(false);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(course._id, module).then((module) => {
      dispatch(addModule(module));
      dispatch(setModule({ name: "New Module", description: "New Description" }));
      setAdding(false);
    });
  };
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
        <button
          className="btn btn-danger me-1 ellipsis"
          type="button"
          onClick={() => setAdding(!adding)}
        >
          <i
            className={`fa fa-${adding ? "minus" : "plus"}`}
            aria-hidden="true"
          ></i>
          Module
        </button>
        <button className="btn btn-light me-1" type="button">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      {adding && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <input
            placeholder="Module Name"
            value={module.name}
            className="form-control me-3"
            onChange={(e) => {
              dispatch(
                setModule({
                  ...module,
                  course: course._id,
                  name: e.target.value,
                })
              );
            }}
          />
          <input
            placeholder="Module Description"
            value={module.description}
            className="form-control me-3"
            onChange={(e) => {
              dispatch(
                setModule({
                  ...module,
                  course: course._id,
                  description: e.target.value,
                })
              );
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddModule}
          >
            Add Module
          </button>
        </div>
      )}
      <hr />
    </>
  );
}

export default CoursesButtons;
