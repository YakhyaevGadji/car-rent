
export type TypeReviewsCar = {
    comment: string;
    rating: any;
    additionalId: number;
    avatar: string;
    name: string
}

export type TypeCarEngine = {
    label: string;
    value: string;
}

export type TypeTransmissionCar = {
    name: TypeCarEngine[]
};

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
    transmission: TypeTransmissionCar,
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
    page: number,
    brand: string,
    engine: string
}