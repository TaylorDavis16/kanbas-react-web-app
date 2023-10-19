import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router";
import "./sidebar.css";
const links = [
  { name: "Account", icon: "fa-regular fa-circle-user fa-2x" },
  { name: "Dashboard", icon: "fa-solid fa-gauge-high fa-2x" },
  { name: "Courses", icon: "fa-solid fa-book fa-2x" },
  { name: "Calendar", icon: "fa-regular fa-calendar-days fa-2x" },
  { name: "Inbox", icon: "fa-solid fa-inbox fa-2x" },
  { name: "History", icon: "fa-regular fa-clock fa-2x" },
  { name: "Studio", icon: "fa-solid fa-desktop fa-2x" },
  { name: "Commons", icon: "fa-solid fa-right-from-bracket fa-2x" },
  { name: "Help", icon: "fa-regular fa-circle-question fa-2x" },
];
function KanbasNavigation() {
  const location = useLocation();
  let name, paths = location.pathname.split("/");
  if (paths.length > 2) {
    name = paths[2];
  }
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center flex-grow-1 text-white bg-dark m-0"
      id="nav"
    >
      <a
        href="/Kanbas"
        className="d-flex align-items-center mb-md-0 text-white text-decoration-none"
      >
        <img
          width="85"
          height="85"
          src="/resources/NEU1.png"
          alt="Northeastern University Logo"
        />
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map((link) => (
          <Link
            to={`/Kanbas/${link.name}`}
            className={`nav-link ${link.name === name && "active"}`}
            key={link.name}
          >
            <li className="nav-item">
              <div className="d-flex flex-column align-items-center">
                <span id={`${link.name === "Account" && "account-icon"}`}>
                  <i className={link.icon}></i>
                </span>
                <div className="nav-item-text">{link.name}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
