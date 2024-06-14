import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../shared/utils/axios";
import { EnumStatus } from "../../carblock/model/types";

type TypeUserRegist = {
    name: string,
    email: string,
    password: string,
}

interface IInitialStateRegist {
    user: {} | TypeUserRegist,
    status: string,
    isLogged: boolean,
    isLoading: boolean
}

export const registUser = createAsyncThunk("regist/registUser", async (props: TypeUserRegist, {rejectWithValue}) => {
    try {
        const user = await instance.post(`/register`, props);
        
        sessionStorage.setItem('token', user.data.token);
        sessionStorage.setItem('name', user.data.data.name);

        return user.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message);
        }
    }
});

const initialState: IInitialStateRegist = {
    user: {},
    status: EnumStatus.LOADING,
    isLogged: false,
    isLoading: false
};

const authSlice = createSlice({
    name: "regist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registUser.pending, (state) => {
                state.isLogged = false;
                state.isLoading = true;
            })
            .addCase(registUser.fulfilled, (state, action: PayloadAction<TypeUserRegist>) => {
                state.user = action.payload;
                state.isLogged = true;
                state.isLoading = false;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(registUser.rejected, (state) => {
                state.isLogged = false;
                state.isLoading = false;
            })
    },
});

export default authSlice.reducer;
