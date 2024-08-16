import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, IInitialState, IRequestProps, ITypeFilterRequest } from "./types";
import { instance } from "../../../shared/utils/axios";

export const fetchFilterCars = createAsyncThunk<ITypeFilterRequest, IRequestProps>("cars/fetchFilterCars", async (params) => {
    const { sort, searchCars, price, page, brand, engine } = params;

    const filterBrand = brand !== 'All' ? `brand=${brand}` : '';

    const { data } = await instance.get<ITypeFilterRequest>(`/cars?page=${page}&limit=12&sortBy=${sort.property}&${filterBrand}&fullTitle=*${searchCars}&price[from]=${price[0]}&price[to]=${price[1]}${engine !== 'all' ? `&transmission.name.value=${engine}` : ''}`);

    return data;
});

const initialState: IInitialState = {
    items: {} as ITypeFilterRequest,
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
            })
            .addCase(fetchFilterCars.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(fetchFilterCars.rejected, (state) => {
                state.status = EnumStatus.ERROR;
            })
    },
});

export const { setItems } = getCarsSlice.actions;

export default getCarsSlice.reducer;
