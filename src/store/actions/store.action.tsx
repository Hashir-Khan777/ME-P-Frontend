import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpClient from "../../services/http-client";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const createStore: any = createAsyncThunk(
  "store/create",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/store", obj, {
        headers: { Authorization: `Bearer ${cookies.get("_user")}` },
      });
      showSuccessToast("Store has been added");
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

export const uploadImage: any = createAsyncThunk(
  "store/upload/image",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/store/upload/screenshot", obj, {
        headers: {
          Authorization: `Bearer ${cookies.get("_user")}`,
          "Content-Type": "multipart/form-data",
        },
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

export const getStores: any = createAsyncThunk(
  "store/get",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get("/store", {
        headers: { Authorization: `Bearer ${cookies.get("_user")}` },
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

export const approveStore: any = createAsyncThunk(
  "store/approve",
  async (obj: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.put(`/store/approve/${obj._id}`, {
        headers: { Authorization: `Bearer ${cookies.get("_user")}` },
      });
      showSuccessToast("Store approve successfully");
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

export const getStoreByUserId: any = createAsyncThunk(
  "store/user",
  async (obj: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get(`/store/user/${obj._id}`, {
        headers: { Authorization: `Bearer ${cookies.get("_user")}` },
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
