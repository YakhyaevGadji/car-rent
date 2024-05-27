import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export type InputsLogin = {
    email: string,
    password: string
}

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<InputsLogin>
    errors: FieldErrors<TFieldValues>
}