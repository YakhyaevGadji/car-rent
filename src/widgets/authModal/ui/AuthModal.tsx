import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthFeat } from "../../../features/authFeat";
import { useAppDispatch } from "../../../app/appStore";
import { setPopupAuth } from "../../../entities/viewer/model/userSlice";
import "./authModal.scss";

const AuthModal: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="auth-modal">
            <div className="container">
                <div className="auth-modal__box">
                    <button onClick={() => dispatch(setPopupAuth('closed'))} className="auth-modal__btn">
                        <CloseIcon sx={{ fontSize: 40 }}/>
                    </button>
                    <h1 className="auth-modal__title">Войти</h1>
                    <AuthFeat/>
                    <button className="auth-modal__create">
                        Sign Up
                        <AccountCircleIcon className="auth-modal__create-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default AuthModal;