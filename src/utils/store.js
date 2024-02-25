import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import msgSlice from "./msgSlice";

const store = configureStore({
  reducer: {
    menu: appSlice,
    chat: msgSlice,
  },
});

export default store;
