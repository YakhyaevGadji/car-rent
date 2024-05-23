import React from "react";
import { LoginFeat } from "../../../../features/authFeat";
import { useForm, SubmitHandler } from "react-hook-form";
import { instance } from "../../../../shared/utils/axios";
import { useAppDispatch } from "../../../../app/appStore";
import { authUser } from "../../../../entities/viewer";
import { useNavigate } from "react-router-dom";
import "./login.scss";

type Inputs = {
    example: string
    exampleRequired: string
}

const Login: React.FC = () => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const response = (data: any) => {
        console.log(data);
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        response(data);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <LoginFeat
                register={register} 
                email={email} 
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
           />
        </form>
    );
}
 
export default Login;