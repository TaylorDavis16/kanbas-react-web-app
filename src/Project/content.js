import Home from "./users/home";
import Search from "./users/search";
import Account from "./users/account";
import Signin from "./users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./users/signup";
import UserTable from "./users/userTable";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./projectReducer";
import Cookies from "js-cookie";
import * as client from "./users/client";
import NotFoundPage from "../404Page";
function Content() {
  const dispatch = useRef(useDispatch());

  useEffect(() => {
    const userId = Cookies.get("userId");

    if (!userId) return;
    const seeIfUserIsLoggedIn = async () => {
      try {
        const user = await client.userloggedIn(userId);
        dispatch.current(setCurrentUser(user));
      } catch (error) {
        console.log(error);
      }
    };
    seeIfUserIsLoggedIn();
  }, []);
  return (
    <div className="container-fluid mt-4">
      <Routes>
        <Route index element={<Navigate to="/Project/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Account/:userId" element={<Account />} />
        <Route path="/Users" element={<UserTable />} />
        <Route path="*" element={<NotFoundPage homeLink="/Project"/>} />
      </Routes>
    </div>
  );
}

export default Content;
