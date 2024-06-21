import React from "react";
import { useForm } from "react-hook-form";
import { RegisterFeat } from "../../../../features/authFeat";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { registUser } from "../../../../entities/viewer/model/userSlice";
import { AppErrors } from "../model/errors";
import { useNavigate } from "react-router-dom";
import { InputsRegister } from "../model/typesRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistShema } from "../../../../shared/utils/yup";
import "./register.scss";

const Register: React.FC = (): React.JSX.Element => {
    const { isLoading } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispath = useAppDispatch();

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<InputsRegister>({
        resolver: yupResolver(RegistShema)
    });

    const response = async (data: InputsRegister) => {
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password,
            imgUrl: '',
            imgId: 0,
            favorites: []
        }

        if(data.password === data.repeatPassword) {
            await dispath(registUser(newData));
            
            navigate('/');
        }else {
            throw new Error(AppErrors.PasswordNotMatch);
        }        
    };

    const onSubmit = (data: InputsRegister) => {
        response(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RegisterFeat register={register} errors={errors} isLoading={isLoading}/>
        </form>
    );
}
 
export default Register;