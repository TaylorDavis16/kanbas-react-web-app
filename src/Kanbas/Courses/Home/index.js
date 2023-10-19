import ModuleList from "../Modules/ModuleList";

function Home(props) {
    const {course, modules} = props;
    return (
      <div>
        <h2>{course.name} Home</h2>
        <ModuleList modules={modules} />
      </div>
    );
  }
  export default Home;  