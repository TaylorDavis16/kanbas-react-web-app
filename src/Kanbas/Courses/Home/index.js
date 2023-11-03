import ModuleList from "../Modules/ModuleList";

function Home({course}) {
    return (
      <div>
        <h2>{course.name} Home</h2>
        <ModuleList course={course}/>
      </div>
    );
  }
  export default Home;  