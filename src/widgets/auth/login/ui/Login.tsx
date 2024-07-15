import React from "react";
import { LoginFeat } from "../../../../features/authFeat";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { authUser } from "../../../../entities/viewer";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginShema } from "../../../../shared/utils/yup";
import { InputsLogin } from "../model/typesLogin";
 
const Login: React.FC = (): React.JSX.Element => {
    const { isLogged, isLoading } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<InputsLogin>({
        resolver: yupResolver(LoginShema)
    });

    React.useEffect(() => {
        if(isLogged) {
            navigate('/');
        }
    }, [isLogged]);

    const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
        try {
            const result = await dispatch(authUser(data));

            if(result.meta.requestStatus === 'rejected') {
                setError('email', {message: ''});
                setError('password', {message: ''})
            }else if(result.meta.requestStatus === 'fulfilled') {
                navigate('/');
            }
        } catch (error) {
            return error;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LoginFeat
                register={register} 
                errors={errors}
                isLoading={isLoading}
            />
        </form>
    );
}
 
export default Login;