import React from "react";
import PrivateRoute from "./route/privateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cars } from "../pages/Cars";
import { useAppDispatch } from "./appStore";
import { Auth } from "../pages/Auth";
import { useAuth } from "../shared/utils/hooks/useAuth";
import { userAuthMe } from "../entities/viewer/model/userSlice";
import { Profile } from "../pages/Profile";
import "./styles/normalize.css";
import "./styles/index.scss";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const auth = useAuth();

    React.useEffect(() => {
        if(auth) {
            dispatch(userAuthMe());
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cars" element={<Cars/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/register" element={<Auth/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/profile/*" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;