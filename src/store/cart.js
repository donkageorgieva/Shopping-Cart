import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  shown: false,
  totalItemsAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.shown = !state.shown;
    },
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex]) {
        state.items[itemIndex].quantity += action.payload.quantity;
        state.items[itemIndex].total += action.payload.total;
        state.totalPrice += state.items[itemIndex].total;
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
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].quantity <= 1) {
        state.items = state.items.filter(
          (currItem) => currItem.id !== action.payload.id
        );
      } else {
        state.items[itemIndex].quantity -= 1;
        state.items[itemIndex].total -= action.payload.price;
      }

      state.totalPrice -= action.payload.total;
      if (state.totalPrice < 0) {
        state.totalPrice = 0;
      }
    },
  },
});

const store = configureStore(cartSlice);
export const cartActions = cartSlice.actions;
export default store;
