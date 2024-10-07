import { createSlice } from "@reduxjs/toolkit";
import data from "../data/Data";
const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    formData: data, // Initially an empty object
  },
  reducers: {
    addData: (state, action) => {
      // Merge the new property into formData without overwriting the entire object
      state.formData = {
        ...state.formData,
        ...action.payload // This will add or update properties in the formData object
      };
    },
  },
});

export const { addData } = formSlice.actions;
export default formSlice.reducer;
