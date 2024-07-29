import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isActiveSidebar: false,
};

const slice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    authenticatedUser(state, action) {
      state.user = action.payload;
    },
    toggleSidebar(state, action) {
      state.isActiveSidebar = action.payload;
    },
  },
});

export default slice.reducer;

export const { authenticatedUser, toggleSidebar } = slice.actions;
