import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import adminReducer from "./features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    admin: adminReducer,
  },
});
