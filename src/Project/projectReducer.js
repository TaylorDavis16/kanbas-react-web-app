import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = projectSlice.actions;
export default projectSlice.reducer;
