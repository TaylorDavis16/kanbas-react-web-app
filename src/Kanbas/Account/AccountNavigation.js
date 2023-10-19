import React from "react";
import { Link } from "react-router-dom";

function AccountNavigation(props) {
  const items = [
    { name: "Notifications", href: "Notifications" },
    { name: "Profile", href: "Profile" },
    { name: "Files", href: "Files" },
    { name: "Settings", href: "Settings" },
    { name: "ePortfolios", href: "ePortfolios" },
    { name: "Shared Content", href: "Shared" },
    { name: "The Hub", href: "Hub" },
    { name: "Qwickly Course Tools", href: "CourseTools" },
    { name: "Global Announcements", href: "Panopto" },
    { name: "Discussions", href: "Discussions" },
    { name: "Announcements", href: "GAnnouncements" },
  ];
  const { loc } = props;
  return (
    <div className="d-flex flex-column secondary-sidebar">
      <ul>
        {items.map((item) => (
          <li className={item.href === loc ? "selected" : ""} key={item.name}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountNavigation;
