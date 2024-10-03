import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { useGetCartByUserIdQuery } from "../api";
const initialState = {
  value: 0,
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    increment: (state) => {
      const userId = localStorage.getItem("userId");

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, getItemCart } =
  cartSlice.actions;

export default cartSlice.reducer;
