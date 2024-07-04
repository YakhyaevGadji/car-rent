import React from "react";
import { ProfileAvatarFeat } from "../../../../features/profileAvatarFeat";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { ITypePropsProfileInfo, TypeUseFormPofile } from "../model/typesProfileInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeDataProfileShema } from "../../../../shared/utils/yup";
import { useAppDispatch } from "../../../../app/appStore";
import { authUser, fetchPatchProfile } from "../../../../entities/viewer/model/userSlice";
import "./profileInfo.scss";

const ProfileInfo: React.FC<ITypePropsProfileInfo> = (props): React.JSX.Element => {
    const { userOld, isLogged } = props;
    const [changeBoolean, setChangeBoolean] = React.useState(true);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeUseFormPofile>({
        resolver: yupResolver(ChangeDataProfileShema)
    });

    const onSubmit: SubmitHandler<TypeUseFormPofile> = async (data) => {
        const id = userOld.data.id;

        sessionStorage.removeItem('name');
        sessionStorage.removeItem('remove');

        const changedData = {
            ...userOld.data,
            email: data.email,
            name: data.name
        }

        const userData = await dispatch(fetchPatchProfile({id, changedData}));


        await dispatch(authUser({
            password: userData.payload.password,
            email: userData.payload.email
        }));
    };

    return (
        <section className="prfile-info">
            <p className="prfile-info__title">Личная информация</p>
            <ProfileAvatarFeat user={userOld}/>
            <p className="prfile-info__title">Обо мне</p>
            {isLogged && (
                <form onSubmit={handleSubmit(onSubmit)} className="prfile-info__form">
                    <TextField 
                        {...register("name")} 
                        onChange={() => setChangeBoolean(false)}
                        error={!!errors.name}
                        helperText={errors.name?.message ? `${errors.name.message}` : ''}
                        defaultValue={userOld.data.name} 
                        sx={{ mb: 2 }} 
                        fullWidth 
                        size="small" 
                        label="Имя"
                    />
                    <TextField 
                        {...register("email")} 
                        onChange={() => setChangeBoolean(false)}
                        defaultValue={userOld.data.email} 
                        error={!!errors.email}
                        helperText={errors.email?.message ? `${errors.email.message}` : ''}
                        sx={{ mb: 2 }}
                        fullWidth 
                        size="small" 
                        label="Email"
                    />
                    <Button disabled={changeBoolean} type="submit" variant="outlined">Сохранить изменения</Button>
                </form>
            )}
        </section>
    );
}
 
export default ProfileInfo;