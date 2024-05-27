import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {createAsyncThunk } from "@reduxjs/toolkit";
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
    isLogged: boolean
};

export const authUser = createAsyncThunk("auth/authUser", async (props: TypeProps) => {
    const { data } = await instance.post(`/auth`, props);
    
    return data;
});

const initialState: IInitialState = {
    user: {},
    status: EnumStatus.LOADING,
    isLogged: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TypeUser>) {
            state.user = action.payload;
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.user = {};
                state.status = EnumStatus.LOADING;
                state.isLogged = false;
            })
            .addCase(authUser.fulfilled, (state, action: PayloadAction<TypeUser>) => {
                state.user = action.payload;
                state.isLogged = true;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(authUser.rejected, (state) => {
                state.user = {};
                state.status = EnumStatus.ERROR;
                state.isLogged = false;
            });
    },
});

export const { setItems } = authSlice.actions;

export default authSlice.reducer;
