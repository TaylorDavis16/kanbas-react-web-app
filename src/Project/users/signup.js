import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify, notifyError } from "../tools/notifications";
import {trimDob, restoreDob} from "../tools/datehandler";
function Signup() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: new Date().toISOString(),
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const Signup = async () => {
    try {
      if (
        !account.username ||
        !account.password ||
        !account.firstName ||
        !account.lastName ||
        !account.email
      ) {
        return;
      }
      await client.signup(account);
      navigate("/Project/Home");
      notify("Account created successfully");
    } catch (error) {
      console.log(error);
      notifyError("Username already exists");
      return;
    }
  };
  return (
    <div className="mt-3">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-3">Signup</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={(e) =>
                      setAccount({ ...account, username: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    value={account.password}
                    className="form-control"
                    id="password"
                    onChange={(e) =>
                      setAccount({ ...account, password: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={account.firstName}
                    className="form-control"
                    id="firstName"
                    onChange={(e) =>
                      setAccount({ ...account, firstName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={account.lastName}
                    className="form-control"
                    id="lastName"
                    onChange={(e) =>
                      setAccount({ ...account, lastName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={trimDob(account.dob)}
                    className="form-control"
                    id="dob"
                    onChange={(e) =>
                      setAccount({
                        ...account,
                        dob: restoreDob(e.target.value),
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    value={account.email}
                    className="form-control"
                    id="email"
                    onChange={(e) =>
                      setAccount({ ...account, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    id="role"
                    className="form-select"
                    value={account.role}
                    onChange={(e) =>
                      setAccount({ ...account, role: e.target.value })
                    }
                  >
                    <option value="USER">User</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={Signup}
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
