import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import * as client from "./client";
import { trimDob } from "../tools/datehandler";
function Search() {
  const currentUser = useSelector((state) => state.projectReducer.currentUser);
  const [users, setUsers] = useState([]);
  const [fields, setFields] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "",
  });
  useEffect(() => {
    if (!currentUser) return;
    const fetchUsers = async () => {
      try {
        const users = await client.findAllUsers();
        setUsers(currentUser.role === "ADMIN" ? users : users.filter((u) => u.role === currentUser.role));
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, [currentUser]);
  if (!currentUser) {
    return (
      <div className="alert alert-danger">
        To use this feature, you need to signin first!
      </div>
    );
  }
  return (
    <div>
        <div className="alert alert-success">
            Hi {currentUser.firstName}, Your role is {currentUser.role}, {currentUser.role === "ADMIN" ? "you can search all users!" : "here are all the users with the same role as you!"}
        </div>
      <table className="table table-sm table-bordered table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">DoB</th>
            <th scope="col">Role</th>
          </tr>

          {/* Search Fields */}
          <tr>
            <th>Filter</th>
            <th>
              <input
                value={fields.username}
                className="form-control"
                placeholder="Search username"
                onChange={(e) =>
                  setFields({ ...fields, username: e.target.value })
                }
              />
            </th>
            <th>
              <input
                value={fields.firstName}
                className="form-control"
                placeholder="Search firstname"
                onChange={(e) =>
                  setFields({ ...fields, firstName: e.target.value })
                }
              />
            </th>
            <th>
              <input
                value={fields.lastName}
                className="form-control"
                placeholder="Search Lastname"
                onChange={(e) =>
                  setFields({ ...fields, lastName: e.target.value })
                }
              />
            </th>
            <th>
                <input
                    value={fields.email}
                    className="form-control"
                    placeholder="Search email"
                    onChange={(e) =>
                        setFields({ ...fields, email: e.target.value })
                    }
                />
            </th>
            <th>
                <input
                    value={fields.dob}
                    className="form-control"
                    placeholder="Search dob"
                    onChange={(e) =>
                        setFields({ ...fields, dob: e.target.value })
                    }
                />
            </th>
            <th>
                <select
                    className="form-select"
                    value={fields.role}
                    onChange={(e) =>
                        setFields({ ...fields, role: e.target.value })
                    }
                >
                    <option value="">All</option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                </select>

            </th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((u) => {
              if (
                !u.username
                  .toLowerCase()
                  .includes(fields.username.toLowerCase())
              )
                return false;
              if (
                !u.firstName
                  .toLowerCase()
                  .includes(fields.firstName.toLowerCase())
              )
                return false;
              if (
                !u.lastName
                  .toLowerCase()
                  .includes(fields.lastName.toLowerCase())
              )
                return false;
                if (
                    !(u.email ?? '')
                        .toLowerCase()
                        .includes(fields.email.toLowerCase())
                )
                    return false;
                if (
                    !trimDob(u.dob)
                        .toLowerCase()
                        .includes(fields.dob.toLowerCase())
                )
                    return false;
                if (fields.role === '') return true;
                if (u.role !== fields.role)
                    return false;

              return true;
            })
            .map((u, i) => (
              <tr key={u._id} className={`${
                currentUser._id === u._id && "table-primary"
              }`}>
                <th scope="row">{i + 1}</th>
                <td>{u.username}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName || "N/A"}</td>
                <td>{u.email}</td>
                <td>{trimDob(u.dob)}</td>
                <td>{u.role}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
