import React from "react";
import { useForm } from "react-hook-form";
import { RegisterFeat } from "../../../../features/authFeat";
import { Inputs } from "../../login/model/typesLogin";
import { useAppDispatch } from "../../../../app/appStore";
import "./register.scss";

const Register: React.FC = () => {
    const dispath = useAppDispatch();

    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm<Inputs>();

    const response = async (data: any) => {
        console.log(data);
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