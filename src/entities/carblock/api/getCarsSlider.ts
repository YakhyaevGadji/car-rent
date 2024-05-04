import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk("car/fetchCarsStatus", async () => {
    const { data } = await axios.get(
      `https://artemwebsites.ru/api/Cars`
    );
    return data;
  }
);

