import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export type TypesModalForm = {
    receipt: string,
    dateBrith: string
};

export type TypeSelect = {
    value: string,
    label: string
}

export interface IPropsModalFrom<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<TypesModalForm>
    // errors: FieldErrors<TFieldValues>
}
