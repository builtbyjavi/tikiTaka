import { createSlice } from "@reduxjs/toolkit";

const initialDataState = { images: [], products: [], isLoading: false };
export const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
