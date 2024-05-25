import { useAppSelector } from "../../../app/appStore"

export const useAuth = () => {
    const {isLogged} = useAppSelector((state) => state.auth);
    
    return isLogged
}