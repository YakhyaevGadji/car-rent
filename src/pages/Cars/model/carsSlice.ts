import { createSlice } from "@reduxjs/toolkit"
import { ICarsState } from "./types";

const initialState: ICarsState = {
    cars: []
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars(state, action) {
            state.cars = action.payload
        }
    }
});

