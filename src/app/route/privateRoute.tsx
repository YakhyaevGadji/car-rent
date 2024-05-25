import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../shared/utils/hooks/useAuth";

const PrivateRoute = () => {
    const auth = useAuth()
    return (
        auth ? <Navigate to="/"/> : <Navigate to="/login" />
    );
};

export default PrivateRoute;