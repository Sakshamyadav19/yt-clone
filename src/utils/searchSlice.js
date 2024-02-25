import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    addsearch: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addsearch } = searchSlice.actions;
export default searchSlice.reducer;
