import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
