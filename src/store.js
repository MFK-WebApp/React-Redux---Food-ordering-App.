import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../src/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
