import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IPropsRegister } from "../../../../widgets/auth/register/model/typesRegister";
import "./registerFeat.scss";

const RegisterFeat: React.FC<IPropsRegister> = ({register, errors}) => {
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField 
                error={!!errors.name}
                {...register('name')} 
                helperText={errors.name ? `${errors.name.message}` : ''}
                fullWidth={true} 
                margin='normal' 
                label="Имя" 
                variant="outlined" 
                placeholder="Введите ваше имя"
            />
            <TextField 
                error={!!errors.email}
                {...register('email')} 
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true}
                margin='normal' 
                label="Email" 
                variant="outlined" 
                placeholder="Введите ваш email" 
            />
            <TextField 
                error={!!errors.password}
                {...register('password')} 
                helperText={errors.password ? `${errors.password.message}` : ''}
                type="password" 
                fullWidth={true} 
                margin='normal' 
                label="Password" 
                variant="outlined" 
                placeholder="Введите ваш пароль" 
            />
            <TextField 
                error={!!errors.repeatPassword}
                {...register('repeatPassword')} 
                helperText={errors.repeatPassword ? `${errors.repeatPassword.message}` : ''}
                type="password" 
                fullWidth={true} 
                margin='normal' 
                label="Password" 
                variant="outlined" 
                placeholder="Повторите ваш пароль" 
            />
            <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins', }}>У вас ecть аккаунта? <span className="incitingText"><Link to="/login">Авторизация</Link></span></Typography>
        </>
    );
}
 
export default RegisterFeat;