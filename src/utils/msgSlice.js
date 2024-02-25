import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
  name: "msgSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMsg: (state, action) => {
      state.messages.splice(20, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMsg } = msgSlice.actions;
export default msgSlice.reducer;
