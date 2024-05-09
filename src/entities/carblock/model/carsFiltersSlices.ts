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
    searchCars: ""
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<TypeSort>) {
            state.sort = action.payload
        },
        setSearchCars(state, action: PayloadAction<string>) {
            state.searchCars = action.payload
        }
    },
});

export const { setSort, setSearchCars } = filterSlice.actions;

export default filterSlice.reducer;
