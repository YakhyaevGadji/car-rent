import React from "react";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IPropsLogin } from "../../../../widgets/auth/login/model/typesLogin";
import { LoadingButton } from "@mui/lab";
import "./loginFeat.scss";

const LoginFeat: React.FC<IPropsLogin> = ({register, errors, isLoading}) => {
    console.log(isLoading);
    return (
        <>
            <Typography className="form__title" variant="h2" fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
            <Typography className="form__subtitle" variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField 
                className="form__email" 
                error={!!errors.email}
                {...register('email')} 
                helperText={errors.email ? `${errors.email.message}` : ''}
                type="email" 
                fullWidth={true} 
                margin='normal' 
                label="Email" 
                variant="outlined" 
                placeholder="Введите ваш email"
            />
            <TextField 
                className="form__password" 
                error={!!errors.password}
                {...register('password')} 
                helperText={errors.password ? `${errors.password.message}` : ''}
                typeof="password" type="password" 
                fullWidth={true} margin='normal' 
                label="Password" 
                variant="outlined" 
                placeholder="Введите ваш пароль"
            />
            <LoadingButton className="form__submit" loading={isLoading} fullWidth type="submit" sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained" >Войти</LoadingButton>
            <Typography className="form__regist" variant="body1" sx={{fontFamily: 'Poppins', }}>У вас нет аккаунта? <Link to="/register">Регистрация</Link></Typography>
        </>
    );
}
 
export default LoginFeat;