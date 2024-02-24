import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: true,
  reducers: {
    togglemenu: (state) => {
      return !state;
    },
  },
});

export const { togglemenu } = appSlice.actions;

export default appSlice.reducer;
