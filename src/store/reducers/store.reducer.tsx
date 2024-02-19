import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "../actions/store.action";

const initialState = {
  loading: false,
  store: {},
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
  },
  reducers: {},
}).reducer;
