import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form"

export type TypesModalForm = {
    receipt: TypeSelect | null,
    dateBrith: string,
    price: number[],
    fullName: string,
    rentalReriod: string,
    email: string,
    numberPhone: string,
    messenger: string,
    comment: string
    address: string
};

export type TypeSelect = {
    value: string,
    label: string,
    priceDev: number
}

export interface IPropsModalFrom<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<TypesModalForm>
    setValue: UseFormSetValue<TypesModalForm>
    // errors: FieldErrors<TFieldValues>
}
