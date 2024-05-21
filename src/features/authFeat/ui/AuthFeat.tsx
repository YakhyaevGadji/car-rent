import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, TextField } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { authUser } from "../../../entities/viewer";
import { EnumStatus } from "../../../entities/carblock/model/types";
import "./authFeat.scss";

const AuthFeat: React.FC = () => {
    const [activePass, setActivePass] = React.useState<boolean>(false);
    const [emailValue, setEmailValue] = React.useState<string>("");
    const [passwordValue, setPasswordValue] = React.useState<string>("");
    const { user, status } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const response = async (data: any) => {
        // dispatch(authUser(data));
    };

    const onSubmitFrom = (data: any) => {
        response(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitFrom)} className="form">
            <TextField 
                {...register('email', {required: "Пожалуйста заполните поле", minLength: {value: 1, message: "Минимум 8 символов"}})}
                fullWidth
                onChange={(event) => setEmailValue(event.target.value)}
                value={emailValue}
                type="email"
                margin='normal' 
                label="Email" 
                variant="outlined" 
                placeholder="Введите ваше Email" 
            />
            <div className="form__pass-block">
                <TextField 
                    {...register('password', {required: true})}
                    onChange={(event) => setPasswordValue(event.target.value)}
                    className="form__password"
                    type={activePass ? 'text' : 'password'}
                    fullWidth
                    value={passwordValue}
                    margin='normal' 
                    label="Password" 
                    variant="outlined" 
                    placeholder="Введите пароль" 
                />

                {activePass ? <VisibilityIcon onClick={() => setActivePass(!activePass)} className="form__icon"/> 
                : 
                <VisibilityOffIcon onClick={() => setActivePass(!activePass)} className="form__icon"/>
                }
            </div>
            {status === EnumStatus.SUCCESS && <Button className="form__btn" type="submit" variant="contained">Войти</Button>}
            {status === EnumStatus.LOADING && <LoadingButton className="form__btn" loading loadingIndicator="Loading…" variant="outlined">Fetch data</LoadingButton>}
            {status === EnumStatus.ERROR && <Button className="form__btn" type="submit" variant="contained">Войти</Button>}   
        </form>
    );
}

export default AuthFeat;