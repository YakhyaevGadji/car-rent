import React from "react";
import { ProfileAvatarFeat } from "../../../../features/profileAvatarFeat";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { ITypePropsProfileInfo, TypeUseFormPofile } from "../model/typesProfileInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeDataProfileShema } from "../../../../shared/utils/yup";
import "./profileInfo.scss";

const ProfileInfo: React.FC<ITypePropsProfileInfo> = (props): React.JSX.Element => {
    const { user, isLogged } = props;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TypeUseFormPofile>({
        resolver: yupResolver(ChangeDataProfileShema)
    });

    const onSubmit: SubmitHandler<TypeUseFormPofile> = (data) => console.log(data);

    return (
        <section className="prfile-info">
            <p className="prfile-info__title">Личная информация</p>
            <ProfileAvatarFeat user={user}/>
            <p className="prfile-info__title">Обо мне</p>
            {isLogged && (
                <form onSubmit={handleSubmit(onSubmit)} className="prfile-info__form">
                    <TextField 
                        {...register("name")} 
                        error={!!errors.name}
                        helperText={errors.name?.message ? `${errors.name.message}` : ''}
                        defaultValue={user.data.name} 
                        sx={{ mb: 2 }} 
                        fullWidth 
                        size="small" 
                        label="Имя"
                    />
                    <TextField 
                        {...register("email")} 
                        defaultValue={user.data.email} 
                        sx={{ mb: 2 }}
                        fullWidth 
                        size="small" 
                        label="Email"
                    />
                    <Button 
                    disabled={user.data.email === watch('email')
                    || 
                    user.data.name === watch('name') ? true : false} 
                    type="submit" variant="outlined">Сохранить изменения</Button>
                </form>
            )}
        </section>
    );
}
 
export default ProfileInfo;