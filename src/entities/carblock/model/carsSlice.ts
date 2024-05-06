import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, IInitialState } from "./types";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    const { data } = await axios.get(
      `https://662f8db343b6a7dce30fe386.mockapi.io/cars`
    );
    return data;
  }
);

const initialState: IInitialState = {
    items: [],
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
