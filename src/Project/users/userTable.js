import React, { useState, useEffect, useRef } from "react";
import * as client from "./client";
import {
  BsTrash3Fill,
  BsFillCheckCircleFill,
  BsPencil,
  BsPlusCircleFill,
} from "react-icons/bs";
import "./userTable.css";
import { notify, notifyError } from "../tools/notifications";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../projectReducer";
function UserTable() {
  const currentUser = useSelector((state) => state.projectReducer.currentUser);
  useEffect(() => {
    if (!currentUser || currentUser.role !== "ADMIN") return;
    const fetchUsers = async () => {
      try {
        const users = await client.findAllUsers();
        setUsers(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, [currentUser]);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "User",
  });

  const tempUser = useRef(user);

  const [fields, setFields] = useState({
    username: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  function restore() {
    setUser({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "User",
    });
    setEditing(false);
  }

  const [editing, setEditing] = useState(false);
  const [modifiable, setModifiable] = useState(true);
  const selectUser = async (id) => {
    if (user._id !== id) {
      setEditing(true);
    } else {
      if (editing) {
        restore();
        return;
      } else setEditing(true);
    }
    try {
      const u = await client.findUserById(id);
      tempUser.current = u;
      setModifiable(u.role !== "ADMIN" || u._id === currentUser._id);
      setUser(u);
      setPosition([window.scrollY, window.scrollX]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [[top, left], setPosition] = useState([0, 0]);
  const isValid = (user) =>
    user.username && user.password && user.firstName && user.lastName;

  const updateUser = async () => {
    try {
      if (!isValid(user)) {
        notifyError("Fill all fields");
        return;
      }
      if (user._id === currentUser._id && user.role !== currentUser.role) {
        if (!window.confirm(`Are you sure you want to update yourself to ${user.role}?`)) return;
      }
      if (user._id !== currentUser._id && tempUser.current.role === "ADMIN" && user.role !== "ADMIN") {
        notifyError("Cannot update an admin to a non-admin");
        return;
      }
      const updated = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === updated._id ? updated : u)));
      if (updated._id === currentUser._id) {
        dispatch(setCurrentUser(updated));
      }
      restore();
      notify(`User ${updated.username} updated`);
      window.scrollTo({
        top,
        left,
        behavior: "smooth",
      });
    } catch (err) {
      console.log(err);
      notifyError("Username already exists or user not found");
    }
  };

  const createUser = async () => {
    try {
      if (!isValid(user)) {
        notifyError("Fill all fields");
        return;
      }
      user.role = user.role.toUpperCase();
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
      restore();
      notify(`User ${newUser.username} created`);
    } catch (err) {
      console.log(err);
      notifyError("Username already exists");
    }
  };

  const deleteUser = async (user) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        if (user._id === currentUser._id) {
          notifyError("You cannot delete yourself");
          return;
        }
        if (user.role === "ADMIN") {
          notifyError("You cannot delete an admin");
          return;
        }
        await client.deleteUser(user._id);
        setUsers(users.filter((u) => u._id !== user._id));
        notify(`User ${user.username} deleted`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentUser && currentUser.role === "ADMIN" && (
        <table className="table table-sm table-bordered table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Role</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            <tr>
              <th>Operation</th>
              <th>
                <input
                  value={user.username}
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  disabled={!modifiable}
                />
                <input
                  value={user.password}
                  type="password"
                  className="form-control mt-2"
                  placeholder="Password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  disabled={!modifiable}
                />
              </th>
              <th>
                <input
                  value={user.firstName}
                  className="form-control"
                  placeholder="Firstname"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  disabled={!modifiable}
                />
              </th>
              <th>
                <input
                  value={user.lastName}
                  className="form-control"
                  placeholder="Lastname"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  disabled={!modifiable}
                />
              </th>
              <th>
                <select
                  value={user.role}
                  className="form-select"
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  disabled={!modifiable}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </th>
              <th>
                <button onClick={createUser} className={`${editing && "invisible"}`}>
                  <BsPlusCircleFill className="text-secondary fs-4" />
                </button>
              </th>
              <th>
                <button
                  onClick={updateUser}
                  className={`${(!editing || JSON.stringify(user) === JSON.stringify(tempUser.current)) && "invisible"}`}
                >
                  <BsFillCheckCircleFill className="text-success fs-4" />
                </button>
              </th>
            </tr>

            {/* Search Fields */}
            <tr>
              <th>Filter</th>
              <th>
                <input
                  value={fields.username}
                  className="form-control"
                  placeholder="Search username"
                  onChange={(e) => {
                    setFields({ ...fields, username: e.target.value });
                    restore();
                  }}
                />
              </th>
              <th>
                <input
                  value={fields.firstName}
                  className="form-control"
                  placeholder="Search firstname"
                  onChange={(e) => {
                    setFields({ ...fields, firstName: e.target.value });
                    restore();
                  }}
                />
              </th>
              <th>
                <input
                  value={fields.lastName}
                  className="form-control"
                  placeholder="Search Lastname"
                  onChange={(e) => {
                    setFields({ ...fields, lastName: e.target.value });
                    restore();
                  }}
                />
              </th>
              <th>
                <select
                  value={fields.role}
                  className="form-select"
                  onChange={(e) => {
                    setFields({ ...fields, role: e.target.value });
                    restore();
                  }}
                >
                  <option value="">All</option>
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) => {
                if (!u.username.toLowerCase().includes(fields.username.toLowerCase())) return false;
                if (!u.firstName.toLowerCase().includes(fields.firstName.toLowerCase())) return false;
                if (!u.lastName.toLowerCase().includes(fields.lastName.toLowerCase())) return false;
                if (fields.role === "") return true;
                if (u.role.toUpperCase() !== fields.role.toUpperCase())
                  return false;
                return true;
              })
              .map((u, i) => (
                <tr
                  key={u._id}
                  className={`${
                    editing && user._id === u._id && "table-primary"
                  }`}
                >
                  <th scope="row">{i + 1}</th>
                  <td>
                    <Link to={`/Project/Account/${u._id}`}>{u.username}</Link>
                  </td>
                  <td>{u.firstName}</td>
                  <td>{u.lastName || "N/A"}</td>
                  <td>{u.role}</td>
                  <td>
                    <button onClick={() => selectUser(u._id)}>
                      <BsPencil className="text-primary fs-4" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(u)}>
                      <BsTrash3Fill className="text-danger fs-4" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default UserTable;
