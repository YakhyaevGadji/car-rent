import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { TypeItems } from "../../../entities/carblock/model/types";

export type TypesModalForm = {
    receipt: TypeSelect,
    dateBrith: string,
    price: number,
    fullName: string,
    rentalReriod: string,
    email: string,
    numberPhone: string,
    messenger: string,
    comment: string
    address: string | null,
    status: 'processing' | 'canceled' | 'completed',
    dataCreation: string,
    titleCar: string,
    imgCar: string
};

export type TypeSelect = {
    value: string,
    label: string,
    priceDev: number
}

export interface IPropsModalFrom<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<TypesModalForm>
    setValue: UseFormSetValue<TypesModalForm>
    item: TypeItems
    errors: FieldErrors<TFieldValues>
}
