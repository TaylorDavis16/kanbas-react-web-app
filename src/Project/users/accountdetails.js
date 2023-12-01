import { trimDob, restoreDob } from "../tools/datehandler";
export default function Accountdetails({ account, setAccount, save, disabled, modifiable}) {
  return (
    <div className="mt-3">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-3">Account</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={account.password}
                    className="form-control"
                    id="password"
                    onChange={(e) =>
                      setAccount({...account, password: e.target.value})
                    }
                    required
                    disabled={!modifiable}
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
                        setAccount({...account, firstName: e.target.value})
                    }
                    required
                    disabled={!modifiable}
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
                      setAccount({...account, lastName: e.target.value})
                    }
                    required
                    disabled={!modifiable}
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
                      setAccount({...account, dob: restoreDob(e.target.value)})
                    }
                    required
                    disabled={!modifiable}
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
                      setAccount({...account, email: e.target.value})
                    }
                    required
                    disabled={!modifiable}
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
                      setAccount({...account, role: e.target.value})
                    }
                    disabled={!modifiable}
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={save}
                  disabled={disabled}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
