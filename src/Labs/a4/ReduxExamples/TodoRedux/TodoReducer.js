import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Add a new todo to the list
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      // Remove a todo by its index
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
const todoReducer1 = todoSlice.reducer;
export default todoReducer1;
