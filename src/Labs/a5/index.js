import EncodingParametersInURLs from "./EncodingParametersInURLs";
import SimpleAPIExamples from "./SimpleAPIExamples";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href="https://kanbas-node-server-n1ky.onrender.com/a5/welcome"
           className="list-group-item">
          Welcome
        </a>
      </div>
      <SimpleAPIExamples />
      <hr />
      <EncodingParametersInURLs />
      <hr />
      <WorkingWithObjects />
      <hr />
      <WorkingWithArrays />
      <hr />
    </div>
  );
}
export default Assignment5;
