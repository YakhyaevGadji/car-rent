import { TypeUser } from "../../../../entities/viewer/model/userSlice";

export type TypeUseFormPofile = {
    name: string;
    email: string;
    numberPhone: string
}

export interface ITypePropsProfileInfo {
    userOld: {
        data: TypeUser,
        token: string
    }
};