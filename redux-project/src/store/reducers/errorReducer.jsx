import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayed: false,
  message: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    displayError: (state, action) => {
      state.isDisplayed = true;
      state.message = action.payload;
    },
    closeError: (state) => {
      state.isDisplayed = false;
      state.message = "";
    },
  },
});

export const { displayError, closeError } = errorSlice.actions;

export default errorSlice.reducer;
