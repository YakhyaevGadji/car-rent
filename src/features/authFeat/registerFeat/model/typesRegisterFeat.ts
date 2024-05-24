import { FieldValues, UseFormRegister } from "react-hook-form"

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<TFieldValues>
}