import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../projectReducer";


const store = configureStore({
  reducer: {
    projectReducer: projectReducer
  }
});

export default store;