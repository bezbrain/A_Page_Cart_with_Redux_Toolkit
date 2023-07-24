import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((each) => each.id !== itemId);
    },
    increaseItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload.id;
      const newCartItem = state.cartItems.find((each) => each.id === itemId);
      if (action.payload.amount === 10) {
        newCartItem.amount = 10;
        return;
      }
      newCartItem.amount = newCartItem.amount + 1;
    },
    decreaseItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      const newCartItem = state.cartItems.find((each) => each.id === itemId);
      newCartItem.amount = newCartItem.amount - 1;
    },
    calculating: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((each) => {
        amount += each.amount;
        total += each.amount * each.price;
      });
      state.amount = amount;
      const roundedTotal = total.toFixed(2);
      state.total = roundedTotal;
    },
  },
});

console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculating,
} = cartSlice.actions;

export default cartSlice.reducer;
