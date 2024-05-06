import { combineReducers } from "@reduxjs/toolkit";
import carsFiltersSlices from "../entities/carblock/model/carsFiltersSlices";
import carsSlice from "../entities/carblock/model/carsSlice";

export const rootReducer = combineReducers({
    cars: carsSlice,
    filters: carsFiltersSlices
});

