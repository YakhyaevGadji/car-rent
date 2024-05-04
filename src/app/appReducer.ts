import { combineReducers } from "@reduxjs/toolkit";
import carsHomeSlice from "../entities/carblock/model/carsHomeSlice";

export const rootReducer = combineReducers({
    homeCars: carsHomeSlice 
});

