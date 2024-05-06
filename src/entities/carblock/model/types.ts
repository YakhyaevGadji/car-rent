
type TypeItems = {
    id: number,
    brand: string,
    category: string,
    engine: string,
    imgs: string[],
    mainImg: string,
    numberPlaces: number,
    price: number,
    status: string,
    title: string,
    transmission: string,
    year: number
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