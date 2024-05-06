import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TypeSort = {
    title: string,
    property: string
}

const initialState = {
    sort: {
        title: "По умолчанию",
        property: "default",
    },
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<TypeSort>) {
            state.sort = action.payload
        }
    },
});

export const { setSort } = filterSlice.actions;

export default filterSlice.reducer;
