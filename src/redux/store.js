import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { letualApi } from "./api";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    counter: cartReducer,
    [letualApi.reducerPath]: letualApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(letualApi.middleware),
});

console.log(store);

setupListeners(store.dispatch);
