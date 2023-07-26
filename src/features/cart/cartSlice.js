import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showModal } from "../modal/modalSlice";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(showModal());

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
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
