import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

//! 1
export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

//! 2
export const getCategoryProducts = createAsyncThunk(
  "getcategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
    // !3
  },
});

export default productSlice.reducer;

//! 1 - product detail burda bir id alir. https://fakestoreapi.com/products/1  icin backtick kullanarak, fetch(`https://fakestoreapi.com/products/${id}`) biciminde yazariz. 2 ye hemen gecme...

//! 2 - browser da Category e tikladigimda producTSlice.js icinde export const getCategoryProducts tanimlarim. async (category) degerini alir. burada https://fakestoreapi.com/docs dokumaini inceleyelim. Get products in a specific category kismina bakalim.
//! fetch('https://fakestoreapi.com/products/category/jewelery')
//!             .then(res=>res.json())
//!             .then(json=>console.log(json)) kismina gore api den gelecek kismi ayarlayalim. 3. maddeye gec

//! 3 - getCategoryProducts islemi icin builder .addcase olusuturalim. olusturduktan sonra Products.js ye gidelim...
