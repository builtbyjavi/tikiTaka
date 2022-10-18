import { configureStore } from "@reduxjs/toolkit";
import { bgSlice, headerSlice } from "./ui-slice";
import cartSlice from "./cart-slice";
import { dataSlice } from "./data-slice";

const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    cart: cartSlice.reducer,
    bg: bgSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
