import { TypeUser } from "../../../../entities/viewer/model/userSlice";

export type TypeUseFormPofile = {
    name: string;
    email: string;
}

export interface ITypePropsProfileInfo {
    userOld: {
        data: TypeUser,
        token: string
    }
    isLogged: boolean
};