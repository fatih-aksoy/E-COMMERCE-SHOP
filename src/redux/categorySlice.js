import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

//! 2
export const getCategories = createAsyncThunk("category", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = response.json();
  return data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  //! 1
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;

//! 1 -  biz burda static veri degil api kullanicaz. api cekerken create async thunk yapisini kullanicez ve extra reducers yapisini kullanicam.

//! 2 - api islemleri icin create async thunk islemleri yapacagiz.
