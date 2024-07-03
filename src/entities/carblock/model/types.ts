
export type TypeReviewsCar = {
    comment: string;
    rating: number;
    additionalId: number;
    avatar: string;
    name: string
}

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
    reviews: TypeReviewsCar[]
}

export enum EnumStatus {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface ITypeFilterRequest {
    items: TypeItems[],
    meta: Record<string, number>
}

export interface ITypeInitialState {
    items: TypeItems[],
    status: EnumStatus.LOADING | EnumStatus.SUCCESS | EnumStatus.ERROR
} 

export interface IInitialState {
    items: ITypeFilterRequest,
    status: EnumStatus.LOADING | EnumStatus.SUCCESS | EnumStatus.ERROR
}

export interface IRequestProps {
    sort: {
        title: string,
        property: string
    }
    searchCars: string,
    price: number[],
    page: number
}