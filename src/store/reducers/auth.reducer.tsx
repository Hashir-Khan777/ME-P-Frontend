import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, verifyUser } from "../actions/auth.action";

const initialState = {
  loading: false,
  user: {},
};

export default createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload?.user;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload?.user;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(verifyUser.fulfilled, (state, { payload }) => {
      state.user = payload?.user;
    });
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
  reducers: {},
}).reducer;
