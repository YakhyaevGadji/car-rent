import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnumStatus, TypeItems, TypeReviewsCar } from "./types";
import { instance } from "../../../shared/utils/axios";

type TypeProps = {
    id: number;
    changeData: TypeReviewsCar[]
}

interface IinitialState {
    item: TypeItems,
    status: EnumStatus.LOADING | EnumStatus.SUCCESS | EnumStatus.ERROR,
    showWindow: string
}

export const getAxiosCar = createAsyncThunk<TypeItems, TypeProps>("car/fetchFilterCar", async ({id}) => {
    const { data } = await instance.get<TypeItems>(`/cars/${id}`);

    return data as TypeItems;
});

export const patchCar = createAsyncThunk<TypeItems, TypeProps>("car/patchCar", async ({id, changeData}) => {
    const { data } = await instance.patch<TypeItems>(`/cars/${id}`, {reviews: changeData});

    return data as TypeItems;
});

const initialState: IinitialState = {
    item: {} as TypeItems,
    status: EnumStatus.LOADING,
    showWindow: 'closed'
};

const getCarSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TypeItems>) {
            state.item = action.payload;
        },
        setShowWindow(state, action: PayloadAction<string>) {
            state.showWindow = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAxiosCar.pending, (state) => {
                state.status = EnumStatus.LOADING;
            })
            .addCase(getAxiosCar.fulfilled, (state, action) => {
                state.item = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(getAxiosCar.rejected, (state) => {
                state.status = EnumStatus.ERROR;
            })

            .addCase(patchCar.pending, (state) => {
                state.status = EnumStatus.LOADING;
            })
            .addCase(patchCar.fulfilled, (state, action) => {
                state.item = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(patchCar.rejected, (state) => {
                state.status = EnumStatus.ERROR;
            })
    },
});

export const { setItems, setShowWindow } = getCarSlice.actions;

export default getCarSlice.reducer;
