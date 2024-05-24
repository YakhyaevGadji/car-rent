import React from "react";
import { LoginFeat } from "../../../../features/authFeat";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { authUser } from "../../../../entities/viewer";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../model/typesLogin";

const Login: React.FC = (): React.JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const { user, status } = useAppSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const response = async (data: any) => {
        dispatch(authUser(data));
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        response(data);
    };

    console.log(user);
    
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