import React from "react";
import { useForm } from "react-hook-form";
import { RegisterFeat } from "../../../../features/authFeat";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { registUser } from "../../../../entities/viewer/model/registSlice";
import { AppErrors } from "../model/errors";
import { useNavigate } from "react-router-dom";
import { InputsRegister } from "../model/typesRegister";
import "./register.scss";

const Register: React.FC = (): React.JSX.Element => {
    const { } = useAppSelector((state) => state.regist);
    const navigate = useNavigate();
    const dispath = useAppDispatch();

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<InputsRegister>();

    const response = async (data: InputsRegister) => {
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        if(data.password === data.repeatPassword) {
            dispath(registUser(newData));

            navigate('/');
        }else {
            throw new Error(AppErrors.PasswordNotMatch);
        }        
    };

    const onSubmit = (data: any) => {
        response(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RegisterFeat register={register} errors={errors}/>
        </form>
    );
}
 
export default Register;