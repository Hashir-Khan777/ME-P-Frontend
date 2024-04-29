import { createSlice } from "@reduxjs/toolkit";
import {
  approveStore,
  createStore,
  getStoreByUserId,
  getStores,
  uploadImage,
} from "../actions/store.action";

const initialState = {
  loading: false,
  store: {},
  stores: [],
  paymentScreenShot: "",
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
    builder.addCase(uploadImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadImage.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.paymentScreenShot = payload;
    });
    builder.addCase(uploadImage.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(approveStore.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(approveStore.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(approveStore.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getStoreByUserId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStoreByUserId.fulfilled, (state, { payload }) => {
      state.store = payload;
      state.loading = false;
    });
    builder.addCase(getStoreByUserId.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
}).reducer;
