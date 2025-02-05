import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slices/FromDataSlice";
const store = configureStore({
  reducer: {
    formSlice,
  },
});
export default store;
