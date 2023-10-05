import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faDesktop,
  faBook,
  faCalendarDays,
  faInbox,
  faClock,
  faPhotoFilm,
  faCircleQuestion,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="resources/neu.png" alt="Kanbas Logo" />
      </div>
      <Navbar expand="md" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link
              eventKey="account"
              onClick={(e) => {
                e.preventDefault();
                setShowAccountMenu(!showAccountMenu);
              }}
            >
              <FontAwesomeIcon icon={faUserCircle} /> <span>Account</span>
            </Nav.Link>

            <Nav.Link eventKey="dashboard">
              <FontAwesomeIcon icon={faDesktop} /> <span>Dashboard</span>
            </Nav.Link>

            <Nav.Link eventKey="Courses">
              <FontAwesomeIcon icon={faBook} /> <span>Courses</span>
            </Nav.Link>

            <Nav.Link eventKey="Calendar"> 
              <FontAwesomeIcon icon={faCalendarDays} /> <span>Calendar</span>
            </Nav.Link>

            <Nav.Link eventKey="Inbox">
              <FontAwesomeIcon icon={faInbox} /> <span>Inbox</span>
            </Nav.Link>

            <Nav.Link eventKey="History">
              <FontAwesomeIcon icon={faClock} /> <span>History</span>
            </Nav.Link>

            <Nav.Link eventKey="Studio">
              <FontAwesomeIcon icon={faPhotoFilm} /> <span>Studio</span>
            </Nav.Link>

            <Nav.Link eventKey="help">
              <FontAwesomeIcon icon={faCircleQuestion} /> <span>Help</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showAccountMenu && <h1>hi</h1>}
    </div>
  );
}
export default Sidebar;
