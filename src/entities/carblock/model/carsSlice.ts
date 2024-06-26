import { createSlice } from "@reduxjs/toolkit";

import {createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, ITypeInitialState, TypeItems } from "./types";
import { instance } from "../../../shared/utils/axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    const { data } = await instance.get(`/cars`);

    return data;
  }
);

const initialState: ITypeInitialState = {
    items: [] as TypeItems[],
    status: EnumStatus.LOADING,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.status = EnumStatus.LOADING;
                state.items = [];
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(fetchCars.rejected, (state) => {
                state.status = EnumStatus.ERROR;
                state.items = [];
            });
    },
});

export const { setItems } = carsSlice.actions;

export default carsSlice.reducer;
