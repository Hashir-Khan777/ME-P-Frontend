import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category.reducer";
import EquipmentReducer from "./equipment.reducer";
import RentalReducer from "./rentals.reducer";
import PartReducer from "./parts.reducer";
import AuthReducer from "./auth.reducer";
import StoreReducer from "./store.reducer";

export default combineReducers({
  CategoryReducer,
  EquipmentReducer,
  RentalReducer,
  PartReducer,
  AuthReducer,
  StoreReducer,
});
