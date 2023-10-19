import React from "react";
import { Link } from "react-router-dom";
import "./course_navigation.css";

function CourseNavigation(props) {
  const items = [
    { name: "Home", href: "Home" },
    { name: "Modules", href: "Modules" },
    { name: "Piazza", href: "Piazza" },
    { name: "Zoom Meetings", href: "Zoom" },
    { name: "Assignments", href: "Assignments" },
    { name: "Quizzes", href: "Quizzes" },
    { name: "Grades", href: "Grades" },
    { name: "People", href: "People" },
    { name: "Panopto Video", href: "Panopto" },
    { name: "Discussions", href: "Discussions" },
    { name: "Announcements", href: "Announcements" },
    { name: "Pages", href: "Pages" },
    { name: "Files", href: "Files" },
    { name: "Rubrics", href: "Rubrics" },
    { name: "Outcomes", href: "Outcomes" },
    { name: "Collaborations", href: "Collaborations" },
    { name: "Syllabus", href: "Syllabus" },
    { name: "Progress Reports (EAB Navigate)", href: "Progress" },
    { name: "Settings", href: "Settings" },
  ];
  const { course, loc } = props;
  return (
    <div className="d-flex flex-column secondary-sidebar">
      <span id="courses-sidebar-title" className="ellipsis mb-2">
        {course.number}-{course.name}-{course.startDate}
      </span>
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

export default CourseNavigation;
