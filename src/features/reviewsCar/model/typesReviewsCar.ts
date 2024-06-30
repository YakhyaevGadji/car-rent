import { TypeItems } from "../../../entities/carblock/model/types"
import { TypeUserAction } from "../../../entities/viewer/model/userSlice"

export type TypeInputsReviewsCar = {
    comment: string,
    rating: number | null
}

export interface ITypePropsReviewsCar {
    item: TypeItems,
    user: TypeUserAction
};