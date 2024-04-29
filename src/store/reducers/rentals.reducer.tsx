import { createSlice } from "@reduxjs/toolkit";
import {
  createRental,
  getRentalById,
  getRentals,
  uploadRentalImages,
} from "../actions/rentals.action";

const initialState = {
  loading: false,
  rental: {},
  rentals: [],
  images: [],
};

export default createSlice({
  name: "rental",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createRental.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createRental.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.rental = payload;
    });
    builder.addCase(createRental.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getRentals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRentals.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.rentals = payload?.rentals;
    });
    builder.addCase(getRentals.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(uploadRentalImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadRentalImages.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.images = payload;
    });
    builder.addCase(uploadRentalImages.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getRentalById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRentalById.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.rental = payload;
    });
    builder.addCase(getRentalById.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
}).reducer;
