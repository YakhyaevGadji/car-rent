import { createSlice } from "@reduxjs/toolkit"

type TypeCars = {
    id: number,
    mainImg: string
    transmission: string,
    engine: string,
    year: number,
    title: string,
    price: number,
    category: string,
    numberPlaces: number,
    imgs: string[],
    brand: string,
    status: string
}

interface ICarsState {
    cars: TypeCars[]
};

const initialState: ICarsState = {
    cars: []
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars(state, action) {
            state.cars = action.payload
        }
    }
});

