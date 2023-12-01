import Nav from "./nav";
import { Provider } from "react-redux";
import store from "./store/store";
import "./tools/notification.css";
import Content from "./content";

function Project() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Content />
        </div>
      </div>
    </Provider>
  );
}
export default Project;
