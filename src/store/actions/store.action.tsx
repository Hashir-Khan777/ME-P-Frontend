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
