import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  shown: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.shown = !state.shown;
    },
  },
});

const store = configureStore(cartSlice);
export const cartActions = cartSlice.actions;
export default store;
