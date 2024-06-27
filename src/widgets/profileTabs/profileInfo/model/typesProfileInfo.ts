import { TypeUser } from "../../../../entities/viewer/model/userSlice";

export type TypeUseFormPofile = {
    name: string;
    email: string;
}

export interface ITypePropsProfileInfo {
    user: {
        data: TypeUser,
        token: string
    }
    isLogged: boolean
};