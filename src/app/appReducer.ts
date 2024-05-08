import { combineReducers } from "@reduxjs/toolkit";
import carsFiltersSlices from "../entities/carblock/model/carsFiltersSlices";
import carsSlice from "../entities/carblock/model/carsSlice";
import getFilterCars from "../entities/carblock/model/getFilterCars";

export const rootReducer = combineReducers({
    cars: carsSlice,
    filters: carsFiltersSlices,
    getFilterCars: getFilterCars
});

