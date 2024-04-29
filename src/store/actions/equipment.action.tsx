import { createAsyncThunk } from "@reduxjs/toolkit";
import HttpClient from "../../services/http-client";
import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

export const createEquipment = createAsyncThunk(
  "equipment/create",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/equipment", obj);
      showSuccessToast("Equipment has been added");
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

export const uploadEquipmentImages = createAsyncThunk(
  "equipment/images",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.post("/equipment/images", obj, {
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

export const getEquipments: any = createAsyncThunk(
  "equipment/get",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get("/equipment");
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

export const getEquipmentById: any = createAsyncThunk(
  "equipment/get/id",
  async (obj: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await HttpClient.get(`/equipment/${obj._id}`);
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
