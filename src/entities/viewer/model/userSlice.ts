import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../shared/utils/axios";
import { EnumStatus } from "../../carblock/model/types";

export type TypeProps = {
    email: string,
    password: string
};

type TypePropsFavoriteUser = {
    id: number,
    user: TypeUserAction
}

export type TypeUser = {
    id: number;
    name: string;
    email: string;
    favorites: number[];
    imgId: number;
    imgUrl: string;
};

export type TypeUserAction = {
    data: TypeUser,
    token: string
};

export interface ITypeUserData {
    user: {
        data: TypeUser,
        token: string
    }
}

interface IInitialState {
    user: TypeUserAction,
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

export const fetchPatchProfile = createAsyncThunk('auth/profile',
    async (
        { id, changedData }: { id: number, changedData: TypeUser},
        { rejectWithValue }
    ) => {
        try {

            const user = await instance.patch(`/users/${id}`, changedData)

            return user.data
        }
        catch (error: any) {
            if (error.message && error.changedData.message) {
                return rejectWithValue(error.response.changedData.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
});

export const favoriteUser = createAsyncThunk("auth/favorite", async (props: TypePropsFavoriteUser, { rejectWithValue }) => {
    try {
        const { id, user } = props;
        
        const modifyArray = async (arr: number[], num: number) => {
            const index = arr.indexOf(num);
            if (index > -1) {
                arr.splice(index, 1);
            } else {
                arr.push(num); 
            }
            return arr;
        };
        

        const favoriteRequest = await instance.patch(`/users/${user.data.id}`, {favorites: []});

        console.log(favoriteRequest);

    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message);
        }
    }
});

const initialState: IInitialState = {
    user: {data: {} as TypeUser, token: ''},
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
            .addCase(authUser.fulfilled, (state, action: PayloadAction<TypeUserAction>) => {
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
                state.user.data = action.payload;
                state.isLogged = true;
                state.isLoading = false;
                state.status = EnumStatus.SUCCESS;
            })
            .addCase(userAuthMe.rejected, (state) => {
                state.isLogged = false;
                state.isLoading = false;
            })

            .addCase(fetchPatchProfile.fulfilled, (state, action) => {
                state.user.data = action.payload
    
                state.isLogged = true
                state.isLoading = false
            })
            .addCase(fetchPatchProfile.pending, (state) => {
                state.isLogged = false
                state.isLoading = true
            })
            .addCase(fetchPatchProfile.rejected, (state) => {
                state.isLogged = false
                state.isLoading = false
            })

    },
});

export default authSlice.reducer;
