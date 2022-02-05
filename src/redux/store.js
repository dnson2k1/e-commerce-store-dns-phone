import { configureStore } from "@reduxjs/toolkit";

import { cartItemsSlice } from "./shopping-cart/cartItemSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice.reducer,
  },
});
