import { TypeItems } from "../../../../entities/carblock/model/types";
import { TypeUserAction } from "../../../../entities/viewer/model/userSlice";

export interface IPropsProfileFavs {
    user: TypeUserAction,
    items: TypeItems[]
};