import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../HelloRedux/helloReducer";
import todoReducer1 from "../TodoRedux/TodoReducer";
import counterReducer from "../CounterRedux/counterReducer";
import addReducer from "../AddRedux/addReducer";
import todosReducer from "../todos/todosReducer";
const store = configureStore({
  reducer: {
    helloReducer,
    todoReducer1,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;