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

export interface ICarsState {
    cars: TypeCars[]
};