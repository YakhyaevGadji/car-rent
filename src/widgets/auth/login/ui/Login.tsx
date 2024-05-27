import React from "react";
import { LoginFeat } from "../../../../features/authFeat";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { authUser } from "../../../../entities/viewer";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../model/typesLogin";

const Login: React.FC = (): React.JSX.Element => {
    const { user, status, isLogged } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    React.useEffect(() => {
        if(isLogged) {
            navigate('/');
        }
    }, [isLogged]);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await dispatch(authUser(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LoginFeat
                register={register} 
            />
        </form>
    );
}
 
export default Login;