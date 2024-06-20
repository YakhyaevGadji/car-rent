import { TypeUserAction } from "../../../entities/viewer/model/userSlice";

export interface IPropsProfileHeader {
    user: TypeUserAction,
    sessionName: string | null
}