import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getSearchProducts = createAsyncThunk(
  "searchproducts",
  async (keyword) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);
//!
//! search filter islemi TEST
// const filteredData = data.filter((item) =>
//   item.title.toLowerCase().includes(getSearchProducts.trim().toLowerCase)
// );

// console.log(filteredData);

// const searchSlice = createSlice({
//   name: "search",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getSearchProducts.pending, (state, action) => {
//       state.productsStatus = STATUS.LOADING;
//     });
//   },
// });

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getSearchProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    })
  },
});





export default searchSlice.reducer;

//! SEARCH KISMI TAMAMLANMADI !!!!.....
