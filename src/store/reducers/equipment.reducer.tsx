import { createSlice } from "@reduxjs/toolkit";
import {
  createEquipment,
  getEquipments,
  uploadEquipmentImages,
} from "../actions/equipment.action";

const initialState = {
  loading: false,
  equipment: {},
  equipments: [],
  images: [],
};

export default createSlice({
  name: "equipment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createEquipment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createEquipment.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.equipment = payload;
    });
    builder.addCase(createEquipment.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getEquipments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEquipments.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.equipments = payload?.equipments;
    });
    builder.addCase(getEquipments.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(uploadEquipmentImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadEquipmentImages.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.images = payload;
    });
    builder.addCase(uploadEquipmentImages.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
}).reducer;
