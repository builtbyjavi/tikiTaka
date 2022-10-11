import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isEmpty: true,
  cartTotalQuantity: 0,
  cartSubtotal: 0,
  cartItems: [],
  isCheckedOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    incrementItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
      state.cartTotalQuantity++;
    },
    decrementItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity--;
      state.cartTotalQuantity--;
    },
    isEmpty: (state, action) => {
      state.isEmpty = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.cartTotalQuantity += newItem.quantity;
      state.cartSubtotal += newItem.quantity * newItem.price;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem._id
      );
      if (!existingItem) {
        state.cartItems.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          size: newItem.size,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    toggleCheckout: (state) => {
      state.isCheckedOut = !state.isCheckedOut;
    },
    checkOut: (state) => {
      state.isEmpty = true;
      state.cartTotalQuantity = 0;
      state.cartSubtotal = 0;
      state.cartItems = [];
      state.isCheckedOut = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
