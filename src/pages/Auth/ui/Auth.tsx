import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../../widgets/header";
import { Login, Register } from "../../../widgets/auth";
import "./auth.scss";

const Auth: React.FC = () => {
    const pathName = useLocation().pathname;

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="form__box">
                    {pathName === '/login' ? <Login/> : pathName === '/register' ? <Register/> : null}
                </div>
            </div>
        </div>
    );
}
 
export default Auth;