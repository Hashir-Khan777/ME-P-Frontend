import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpClient from "../../services/http-client";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

export const createRental = createAsyncThunk(
  "rental/create",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/rental", obj);
      showSuccessToast("Rental has been added");
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

export const uploadRentalImages = createAsyncThunk(
  "rental/images",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/rental/images", obj, {
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

export const getRentals = createAsyncThunk(
  "rental/get",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get("/rental");
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

export const getRentalById = createAsyncThunk(
  "rental/get/id",
  async (obj: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get(`/rental/${obj._id}`);
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
