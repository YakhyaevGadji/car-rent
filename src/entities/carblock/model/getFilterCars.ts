import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, IInitialState } from "./types";

export const fetchFilterCars = createAsyncThunk("cars/fetchFilterCars", async () => {
    const { data } = await axios.get(
        `https://e19221c1c0f44f94.mokky.dev/cars`
    );
    return data;
}
);

const initialState: IInitialState = {
    items: [],
    status: EnumStatus.LOADING,
};

const getCarsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterCars.pending, (state) => {
                state.status = EnumStatus.LOADING;
                state.items = [];
            })
            .addCase(fetchFilterCars.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(fetchFilterCars.rejected, (state) => {
                state.status = EnumStatus.ERROR;
                state.items = [];
            });
    },
});

export const { setItems } = getCarsSlice.actions;

export default getCarsSlice.reducer;
