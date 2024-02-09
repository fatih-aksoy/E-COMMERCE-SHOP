import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

// !
export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    //! 1
  },
});

//! 1. maddeye hemen gitme

//! 1 - AddtoCart islemi icin NavbarRight.jsx den buraya geldik. carts:cartSlice i import edecegiz. NavbarRight.jsx e geri don.
