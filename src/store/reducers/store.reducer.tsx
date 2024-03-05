import { createSlice } from "@reduxjs/toolkit";
import { createStore, getStores } from "../actions/store.action";

const initialState = {
  loading: false,
  store: {},
  stores: [],
};

export default createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createStore.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStore.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.store = payload;
    });
    builder.addCase(createStore.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getStores.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStores.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.stores = payload;
    });
    builder.addCase(getStores.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
}).reducer;
