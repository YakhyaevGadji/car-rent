import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, IInitialState, IRequestProps, TypeItems } from "./types";
import { instance } from "../../../shared/utils/axios";

export const fetchFilterCars = createAsyncThunk<TypeItems[], IRequestProps>("cars/fetchFilterCars", async (params) => {
    const { sort, searchCars, price } = params;

    const { data } = await instance.get<TypeItems[]>(`/cars?sortBy=${sort.property}&title=${searchCars}*&price[from]=${price[0]}&price[to]=${price[1]}`);

    return data;
});

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
