import React from "react";
import { Button, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import "./authFeat.scss";

const AuthFeat: React.FC = () => {
    const [activePass, setActivePass] = React.useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const onSubmitFrom = (data: any) => { // Change type
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitFrom)} className="form">
            <TextField 
                {...register('email', {required: "Пожалуйста заполните поле", minLength: {value: 15, message: "Минимум 8 символов"}})}
                fullWidth
                type="email"
                margin='normal' 
                label="Email" 
                variant="outlined" 
                placeholder="Введите ваше Email" 
            />
            <div className="form__pass-block">
                <TextField 
                    {...register('password', {required: true, minLength: 10})}
                    className="form__password"
                    type={activePass ? 'text' : 'password'}
                    fullWidth
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
            <Button className="form__btn" type="submit" variant="contained">Войти</Button>
        </form>
    );
}

export default AuthFeat;