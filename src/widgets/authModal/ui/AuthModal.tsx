import React from "react";
import { AuthFeat } from "../../../features/authFeat";
import CloseIcon from '@mui/icons-material/Close';
import "./authModal.scss";
import { useAppDispatch } from "../../../app/appStore";
import { setPopupAuth } from "../../../entities/viewer/model/userSlice";

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
                </div>
            </div>
        </div>
    );
}
 
export default AuthModal;