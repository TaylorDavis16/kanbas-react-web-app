import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import searchReducer from "../Courses/Assignments/searchReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    searchReducer,
  }
});

export default store;