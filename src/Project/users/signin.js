import * as client from "./client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify, notifyError } from "../tools/notifications";
import { setCurrentUser } from "../projectReducer";
import Cookies from "js-cookie";
function Signin() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const signin = async () => {
    try {
      if (!credentials.username || !credentials.password) {
        return;
      }
      const user = await client.signin(credentials);
      notify("Signed in successfully");
      dispatch(setCurrentUser(user));
      Cookies.set("userId", user._id);
    } catch (error) {
      console.log(error);
      notifyError("Invalid credentials");
      return;
    }
  };

  const signout = async () => {
    try {
      await client.signout(currentUser._id);
      dispatch(setCurrentUser(null));
      notify("Signed out successfully");
      Cookies.remove("userId");
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = useSelector((state) => state.projectReducer.currentUser);

  if (currentUser) {
    return (
      <>
        <div className="alert alert-success">
          Hello, {currentUser.username}. Your role is {currentUser.role}!{" "}
          {currentUser.role === "ADMIN"
            ? "You can manage all users!"
            : "If you want to see all other user details, you need to be an administrator!"}
        </div>
        <button className="btn btn-danger" onClick={signout}>
          Signout
        </button>
      </>
    );
  }
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title mb-3">Signin</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      username: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={signin}
              >
                Signin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
