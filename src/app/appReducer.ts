import { combineReducers } from "@reduxjs/toolkit";
import carsHomeSlice from "../entities/carblock/model/carsHomeSlice";
import carsFiltersSlices from "../entities/carblock/model/carsFiltersSlices";

export const rootReducer = combineReducers({
    homeCars: carsHomeSlice,
    filters: carsFiltersSlices
});

