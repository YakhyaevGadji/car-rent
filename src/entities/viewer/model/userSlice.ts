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
        const user = await instance.post(`/auth`, props);

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

export const userAuthMe = createAsyncThunk('auth/authMe', async (_, { rejectWithValue }) => {
    try {
        const token = sessionStorage.getItem('token');

        const user = await instance.get('/auth_me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return user.data;
    } catch (error: any) {
        if(error.message && error.data.message) {
            return rejectWithValue(error.response.data.message);
        }else {
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

            .addCase(userAuthMe.pending, (state) => {
                state.isLogged = false;
                state.isLoading = true;
            })
            .addCase(userAuthMe.fulfilled, (state, action: PayloadAction<TypeUser>) => {
                state.user = action.payload;
                state.isLogged = true;
                state.isLoading = false;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(userAuthMe.rejected, (state) => {
                state.isLogged = false;
                state.isLoading = false;
            })

    },
});

export default authSlice.reducer;
