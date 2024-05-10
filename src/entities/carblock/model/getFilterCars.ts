import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, IInitialState, IRequestProps, TypeItems } from "./types";

export const fetchFilterCars = createAsyncThunk<TypeItems[], IRequestProps>("cars/fetchFilterCars", async (params) => {
    const { sort, searchCars, price } = params;

    const { data } = await axios.get<TypeItems[]>(
        `https://e19221c1c0f44f94.mokky.dev/cars?sortBy=${sort.property}&title=${searchCars}*&price[from]=${price[0]}&price[to]=${price[1]}`
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
            })
    },
});

export const { setItems } = getCarsSlice.actions;

export default getCarsSlice.reducer;
