import { Link } from "react-router-dom";
import Nav from "../../Nav";
function HelloWorld() {
  return (
    <div>
      <Link to="/Labs/a1">A1</Link> |<Link to="/Labs/a2">A2</Link> |
      <Link to="/Labs/a3">A3</Link> |<Link to="/hello">Hello</Link> |
      <Link to="/Kanbas">Kanbas</Link>
      <Nav />
      <h1>Hello World!</h1>
    </div>
  );
}
export default HelloWorld;
