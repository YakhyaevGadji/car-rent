import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumStatus } from "../../carblock/model/types";

// export const moda = createAsyncThunk("cars/fetchCars", async () => {
//     const { data } = await instance.get(`/cars`);
//     return data;
//   }
// );

const initialState = {
    receiving: { value: 'ofice', label: 'Взять из офиса', priceDev: 0 },
    date: 1,
    status: EnumStatus.LOADING,
};

const modalCarSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setReceiving(state, action) {
            state.receiving = action.payload;
        },
        setDateModal(state, action: PayloadAction<number>) {
            state.date = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCars.pending, (state) => {
    //             state.status = EnumStatus.LOADING;
    //             state.items = [];
    //         })
    //         .addCase(fetchCars.fulfilled, (state, action) => {
    //             state.items = action.payload;
    //             state.status = EnumStatus.SUCCESS;
    //         })
    //         .addCase(fetchCars.rejected, (state) => {
    //             state.status = EnumStatus.ERROR;
    //             state.items = [];
    //         });
    // },
});

export const { setReceiving, setDateModal } = modalCarSlice.actions;

export default modalCarSlice.reducer;
