import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../api/getCarsSlider";

const initialState = {
    items: [],
    status: "loading",
    currentPage: 1,
  };
  
  const carHomeSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
      setItems(state, action) {
        state.items = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCars.pending, (state) => {
          state.status = "loading";
          state.items = [];
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = "success";
        })
        .addCase(fetchCars.rejected, (state) => {
          state.status = "error";
          state.items = [];
        });
    },
  });
  
  export const { setItems } = carHomeSlice.actions;
  
  export default carHomeSlice.reducer;
  