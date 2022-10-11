import { createSlice } from "@reduxjs/toolkit";

const initialBgState = { darkBg: false };
export const bgSlice = createSlice({
  name: "bg",
  initialState: initialBgState,
  reducers: {
    isDarkBg: (state, action) => {
      state.darkBg = action.payload;
    },
  },
});

const initialHeaderState = { showCart: false };
export const headerSlice = createSlice({
  name: "header",
  initialState: initialHeaderState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const headerActions = headerSlice.actions;
export const bgActions = bgSlice.actions;
