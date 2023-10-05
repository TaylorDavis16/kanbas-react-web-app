import logo from "./logo.svg";
import { Link} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <a href="/labs/a1/index.html">Assignment 1</a>
      <a href="/labs/a2/index.html">Assignment 2</a>
      <Link to="/kanbas">Kanbas</Link>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"x
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
