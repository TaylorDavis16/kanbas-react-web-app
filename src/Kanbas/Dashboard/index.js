import db from "../Database";
import "./dashboard.css";
import Card from "./Card";
function Dashboard() {
  const courses = db.courses;
  return (
    <>
      <span id="page-header">
        <h2>Dashboard</h2>
      </span>
      <hr />
      <div className="container-fluid">
        <span id="page-subheader">
          <h4>Published Courses ({courses.length})</h4>
        </span>
        <hr />
        <div
          className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start"
          id="cards-container"
        >
          {courses.map((course) => <Card key={course._id} {...course} />)}
        </div>
      </div>
    </>
  );
}
export default Dashboard;
