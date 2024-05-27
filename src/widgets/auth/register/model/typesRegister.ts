import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export type InputsRegister = {
    name: string,
    email: string,
    password: string
    repeatPassword: string
};

export interface IPropsRegister<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<InputsRegister>
    errors: FieldErrors<TFieldValues>
}

