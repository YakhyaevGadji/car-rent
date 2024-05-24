import { combineReducers } from "@reduxjs/toolkit";
import carsFiltersSlices from "../entities/carblock/model/carsFiltersSlices";
import carsSlice from "../entities/carblock/model/carsSlice";
import getFilterCars from "../entities/carblock/model/getFilterCars";
import getCar from "../entities/carblock/model/getCar";
import { userSlice } from "../entities/viewer";
import registSlice from "../entities/viewer/model/registSlice";

export const rootReducer = combineReducers({
    cars: carsSlice,
    filters: carsFiltersSlices,
    getFilterCars: getFilterCars,
    getCar: getCar,
    auth: userSlice,
    regist: registSlice
});

