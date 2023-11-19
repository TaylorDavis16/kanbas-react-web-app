import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateModule, deleteModule } from "../Modules/modulesReducer";
import * as client from "./client";
function Module(props) {
  const [module, setModule] = useState(props.module);
  const handleEdit = (e) => {
    e.preventDefault();
    setAdding(true);
  };
  const dispatch = useDispatch();
  const handleSave = (e) => {
    e.preventDefault();
    client.updateModule(module).then((status) => {
      dispatch(updateModule(module));
      setAdding(false);
    });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    client.deleteModule(module._id).then((status) => {
      dispatch(deleteModule(module._id));
    });
  };

  const [adding, setAdding] = useState(false);
  return (
    <>
      <div
        href="./"
        className="d-flex align-items-center list-group-item module-level-1 finished"
      >
        <div className="d-flex align-items-center two-ellipsis">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="ms-2" style={{ flexGrow: "1" }}>
          {adding ? (
            <div className="d-flex align-items-center">
              <input
                value={module.name}
                className="form-control me-2"
                onChange={(e) => setModule({ ...module, name: e.target.value })}
              />
              <button className="btn btn-success me-2" type="button" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <a
              href="./"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {module.name}
            </a>
          )}
        </div>
        <div className="d-flex align-items-center float-end">
          <i className="fa fa-check-circle me-3" aria-hidden="true"></i>
          <div className="drowdown">
            <button
              className="btn position-absolute top-0 end-0 m-1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="button"
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="./" onClick={handleEdit}>
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="./" onClick={handleDelete}>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        href="./"
        className="d-flex align-items-center list-group-item finished"
      >
        <div className="d-flex align-items-center two-ellipsis">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="ms-5" style={{ flexGrow: "1" }}>
          {adding ? (
            <input
              value={module.description}
              className="form-control me-3"
              onChange={(e) =>
                setModule({ ...module, description: e.target.value })
              }
            />
          ) : (
            <a
              href="./"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {module.description}
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Module;
