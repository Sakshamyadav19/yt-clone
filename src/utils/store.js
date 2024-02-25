import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import msgSlice from "./msgSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    menu: appSlice,
    search: searchSlice,
    chat: msgSlice,
  },
});

export default store;
