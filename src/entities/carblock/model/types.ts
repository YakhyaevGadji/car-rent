
export type TypeItems = {
    id: number,
    brand: string,
    category: string,
    engine: number,
    imgs: string[],
    mainImg: string,
    numberPlaces: number,
    price: number,
    fullTitle: string,
    status: string,
    transmission: string,
    fuel: string,
    year: number,
}

export enum EnumStatus {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface IInitialState {
    items: TypeItems[],
    status: EnumStatus.LOADING | EnumStatus.SUCCESS | EnumStatus.ERROR
}

export interface IRequestProps {
    sort: {
        title: string,
        property: string
    }
    searchCars: string,
    price: number[]
}