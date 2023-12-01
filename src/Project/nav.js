import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const tabs = ["Home", "Search", "Signin", "Signup", "Account", "Users"];

function Nav() {
  const location = useLocation();
  const currentTab = location.pathname.split("/")[2];
  useEffect(() => {
    console.log(currentTab);
    // if (!tabs.includes(currentTab)) {
    //   window.location.href = "/Project/Home";
    // }
  }, [currentTab]);
  const currentUser = useSelector((state) => state.projectReducer.currentUser);
  return (
    <>
      <nav className="alert alert-secondary nav flex-column nav-pills nav-fill mb-auto" style={{height:"100vh"}}>
        <ul className="nav nav-pills flex-column">
          {tabs.map((tab) => tab !== "Users" || (currentUser && currentUser.role === "ADMIN") ? (
            <li className="nav-item" key={tab}>
              <Link
                className={`nav-item nav-link ${tab === currentTab && "active"}`}
                id={tab}
                data-toggle="pill"
                to={`/Project/${tab}`}
                role="tab"
                aria-controls={tab}
                aria-selected={tab === currentTab}
              >
                {tab}
              </Link>
            </li>
          ) : <li className="nav-item" key={tab}></ li>)}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
