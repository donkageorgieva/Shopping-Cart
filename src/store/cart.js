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
    addToCart(state, action) {
      const chosenItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[chosenItem]) {
        state.items[chosenItem].quantity += action.payload.quantity;
        state.items[chosenItem].total += action.payload.total;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity,
          total: action.payload.price,
        });
      }
    },
  },
});

const store = configureStore(cartSlice);
export const cartActions = cartSlice.actions;
export default store;
