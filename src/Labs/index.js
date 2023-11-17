import { Route, Routes, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import HelloWorld from "./a3/HelloWorld";
import Kanbas from "../Kanbas";
import store from "./a4/ReduxExamples/store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";

function Labs() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a4" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
          <Route path="a5" element={<Assignment5 />} />
          <Route path="hello" element={<HelloWorld />} />
          <Route path="kanbas" element={<Kanbas />} />
        </Routes>
      </Provider>
    </div>
  );
}
export default Labs;
