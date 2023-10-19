import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
function Labs() {
 return(
  <div>
    <a href="/labs/a1">A1</a> |
    <a href="/labs/a2">A2</a> |
   <Link to="/Labs/a3">A3</Link> |
   <Link to="/hello">Hello</Link> |
   <Link to="/Kanbas">Kanbas</Link>
   <Nav/>
   <Assignment3/>
  </div>
 )
}
export default Labs;
