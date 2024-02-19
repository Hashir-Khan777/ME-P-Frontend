import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpClient from "../../services/http-client";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";
import Cookies from "universal-cookie";

const date = new Date();
const cookies = new Cookies();

export const login: any = createAsyncThunk(
  "auth/login",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/auth/login", obj);
      const expires = new Date(date.setDate(date.getDate() + 30));
      cookies.set("_user", data.token, {
        path: "/",
        secure: true,
        expires,
      });
      showSuccessToast("Login Sucessfully");
      return data;
    } catch (err: any) {
      showErrorToast(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const register: any = createAsyncThunk(
  "auth/register",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/auth/register", obj);
      const expires = new Date(date.setDate(date.getDate() + 30));
      cookies.set("_user", data.token, {
        path: "/",
        secure: true,
        expires,
      });
      return data;
    } catch (err: any) {
      showErrorToast(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const logout: any = createAsyncThunk(
  "auth/logout",
  (obj, { dispatch }) => {
    cookies.remove("_user", {
      path: "/",
      secure: true,
    });
    showSuccessToast("Logout successfully");
    return {};
  }
);

export const verifyUser: any = createAsyncThunk(
  "auth/verify",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get("/auth/verify", {
        headers: { Authorization: `Bearer ${cookies.get("_user")}` },
      });
      return data;
    } catch (err: any) {
      dispatch(logout());
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);
