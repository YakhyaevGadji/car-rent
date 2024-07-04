import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TypeSort = {
    title: string,
    property: string
}

const initialState = {
    sort: {
        title: "По умолчанию",
        property: "",
    },
    searchCars: "",
    price: [10, 100],
    brand: "All",
    page: 1
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<TypeSort>) {
            state.sort = action.payload;
        },
        setSearchCars(state, action: PayloadAction<string>) {
            state.searchCars = action.payload;
        },
        setPrice(state, action: PayloadAction<number[]>) {
            state.price = action.payload;
        },
        setbrand(state, action: PayloadAction<string>) {
            state.brand = action.payload
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        }
    },
});

export const { setSort, setSearchCars, setPrice, setbrand, setPage } = filterSlice.actions;

export default filterSlice.reducer;
