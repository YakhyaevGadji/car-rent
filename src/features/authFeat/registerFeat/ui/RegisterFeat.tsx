import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IPropsLogin } from "../model/typesRegisterFeat";
import "./registerFeat.scss";

const RegisterFeat: React.FC<IPropsLogin> = ({register}) => {
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField {...register('name')} fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder="Введите ваше имя"/>
            <TextField {...register('email')} fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Введите ваш email" />
            <TextField {...register('password')} type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Введите ваш пароль" />
            <TextField {...register('repeatPassword')} type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Повторите ваш пароль" />
            <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins', }}>У вас ecть аккаунта? <span className="incitingText"><Link to="/login">Авторизация</Link></span></Typography>
        </>
    );
}
 
export default RegisterFeat;