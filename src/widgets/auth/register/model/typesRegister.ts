import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form"

export type InputsRegister = {
    name: string,
    email: string,
    password: string
    repeatPassword: string,
    numberPhone: string,
    date: string
};

export interface IPropsRegister<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<InputsRegister>
    isLoading: boolean
    errors: FieldErrors<TFieldValues>,
}

