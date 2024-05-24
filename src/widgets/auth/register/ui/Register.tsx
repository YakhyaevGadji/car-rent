import React from "react";
import { useForm } from "react-hook-form";
import { RegisterFeat } from "../../../../features/authFeat";
import { Inputs } from "../../login/model/typesLogin";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { registUser } from "../../../../entities/viewer/model/registSlice";
import "./register.scss";


const Register: React.FC = () => {
    const { user } = useAppSelector((state) => state.regist);
    const dispath = useAppDispatch();

    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm<Inputs>();

    const response = async (data: any) => {
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        dispath(registUser(newData));
    };

    const onSubmit = (data: any) => {
        response(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RegisterFeat register={register}/>
            </form>
        </>
    );
}
 
export default Register;