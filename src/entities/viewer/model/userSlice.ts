import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../shared/utils/axios";
import { EnumStatus } from "../../carblock/model/types";

export const authUser = createAsyncThunk("auth/authUser", async (props: any) => {
    const { data } = await instance.post(`/auth`, props);
    return data;
});

const initialState = {
    user: {},
    status: EnumStatus.SUCCESS,
    popupAuth: 'closed',
    popupRegist: 'closed'
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setItems(state, action) {
            state.user = action.payload;
        },
        setPopupAuth(state, action: PayloadAction<string>) {
            state.popupAuth = action.payload;
        },
        setPopupRegist(state, action: PayloadAction<string>) {
            state.popupRegist = action.payload
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.status = EnumStatus.LOADING;
                state.user = {};
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(authUser.rejected, (state) => {
                state.status = EnumStatus.ERROR;
                state.user = {};
            });
    },
});

export const { setItems, setPopupAuth, setPopupRegist } = authSlice.actions;

export default authSlice.reducer;
