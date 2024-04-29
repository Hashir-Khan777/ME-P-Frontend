import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpClient from "../../services/http-client";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

export const createPart = createAsyncThunk(
  "part/create",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/part", obj);
      showSuccessToast("Part has been added");
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

export const uploadPartImages = createAsyncThunk(
  "part/images",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/part/images", obj, {
        headers: {
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

export const getParts: any = createAsyncThunk(
  "part/get",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get("/part");
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

export const getPartById: any = createAsyncThunk(
  "part/get/id",
  async (obj: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get(`/part/${obj._id}`);
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
