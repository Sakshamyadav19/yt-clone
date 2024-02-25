import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: false,
  reducers: {
    togglemenu: (state) => {
      return !state;
    },
  },
});

export const { togglemenu } = appSlice.actions;

export default appSlice.reducer;
