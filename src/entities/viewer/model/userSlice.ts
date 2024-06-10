import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../shared/utils/axios";
import { EnumStatus } from "../../carblock/model/types";

export type TypeProps = {
    email: string,
    password: string
};

type TypeUser = {
    id: number,
    name: string,
    email: string
};

interface IInitialState {
    user: {} | TypeUser,
    status: string,
    isLogged: boolean,
    isLoading: boolean
};

export const authUser = createAsyncThunk("auth/authUser", async (props: TypeProps, { rejectWithValue }) => {
    try {
        const { data } = await instance.post(`/auth`, props);
        return data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message);
        }
    }
});

const initialState: IInitialState = {
    user: {},
    status: EnumStatus.LOADING,
    isLogged: false,
    isLoading: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.isLogged = false;
                state.isLoading = true;
            })
            .addCase(authUser.fulfilled, (state, action: PayloadAction<TypeUser>) => {
                state.user = action.payload;
                state.isLogged = true;
                state.isLoading = false;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(authUser.rejected, (state) => {
                state.isLogged = false;
                state.isLoading = false;
            })

    },
});

export default authSlice.reducer;
