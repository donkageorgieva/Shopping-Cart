import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import { uiActions } from "./ui-slice";
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
    replaceCart(state, action) {
      state.totalItemsAmount = action.payload.totalItemsAmount;
      state.totalPrice = action.payload.totalItemsAmount;
      state.items = action.payload.items;
    },
    toggleCart(state) {
      state.shown = !state.shown;
    },
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex]) {
        state.items[itemIndex].quantity++;
        state.items[itemIndex].total += action.payload.price;
        state.totalPrice += action.payload.price;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity,
          total: action.payload.price,
        });
      }
      state.totalItemsAmount++;
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
        state.items[itemIndex].quantity--;
        state.items[itemIndex].total -= action.payload.price;
      }
      state.totalItemsAmount--;
      state.totalPrice -= action.payload.total;
      if (state.totalPrice < 0) {
        state.totalPrice = 0;
      }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});
export const cartActions = cartSlice.actions;
export default store;
