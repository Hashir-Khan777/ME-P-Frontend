import { createSlice } from "@reduxjs/toolkit";
import { createCategory, getCategories } from "../actions/category.action";

const initialState = {
  loading: false,
  category: {},
  categories: [],
};

export default createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.category = payload;
    });
    builder.addCase(createCategory.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.categories = payload?.categories;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
}).reducer;
