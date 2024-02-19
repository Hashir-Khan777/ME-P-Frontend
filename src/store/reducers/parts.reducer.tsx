import { createSlice } from "@reduxjs/toolkit";
import {
  createPart,
  getParts,
  uploadPartImages,
} from "../actions/parts.action";

const initialState = {
  loading: false,
  part: {},
  parts: [],
  images: [],
};

export default createSlice({
  name: "part",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createPart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPart.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.part = payload;
    });
    builder.addCase(createPart.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getParts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getParts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.parts = payload?.parts;
    });
    builder.addCase(getParts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(uploadPartImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadPartImages.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.images = payload;
    });
    builder.addCase(uploadPartImages.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
}).reducer;
