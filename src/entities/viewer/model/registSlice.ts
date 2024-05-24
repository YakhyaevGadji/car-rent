import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../shared/utils/axios";
import { EnumStatus } from "../../carblock/model/types";

export const registUser = createAsyncThunk("regist/registUser", async (props: any) => {
    const { data } = await instance.post(`/register`, props);
    
    return data;
});

const initialState = {
    user: {},
    status: EnumStatus.SUCCESS,
};

const authSlice = createSlice({
    name: "regist",
    initialState,
    reducers: {
        setItems(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registUser.pending, (state) => {
                state.status = EnumStatus.LOADING;
                state.user = {};
            })
            .addCase(registUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(registUser.rejected, (state) => {
                state.status = EnumStatus.ERROR;
                state.user = {};
            });
    },
});

export const { setItems } = authSlice.actions;

export default authSlice.reducer;
