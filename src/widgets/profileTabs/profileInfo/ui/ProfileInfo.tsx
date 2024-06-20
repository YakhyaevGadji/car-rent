import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { authUser, fetchPatchProfile, ITypeUserData, TypeUser, TypeUserAction } from "../../../../entities/viewer/model/userSlice";
import { Avatar } from "@mui/material";
import { instance } from "../../../../shared/utils/axios";
import { useAppDispatch } from "../../../../app/appStore";
import "./profileInfo.scss";

const ProfileInfo: React.FC<ITypeUserData> = (props): React.JSX.Element => {
    const { user } = props;
    const isLoadingAvatar = user.data.imgUrl ? true : false
    const inputFileRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const buttonFile = async (e: any) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        try {
            if(isLoadingAvatar) {
                await instance.delete(`/uploads/${user.data.imgId}`)
            }else {
                const { data } = await instance.post('/uploads', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        authorization: 'authorization-text'
                    }
                });

                const changedData = {
                    ...user.data,
                    imgUrl: data.url,
                    imgId: data.id
                };

                if(user.data.id === undefined) {
                    return;
                }

                await reloadProfile(user.data.id, changedData);
            }
        } catch (error) {
            
        }
    };

    const reloadProfile = async (id: number, changedData: TypeUser) => {
        try {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('name');

            const userData = await dispatch(fetchPatchProfile({id, changedData}));

            await dispatch(authUser({
                email: userData.payload.email,
                password: userData.payload.password
            }));
        } catch (error) {
            
        }
    };


    return (
        <section className="prfile-info">
            <h1 className="prfile-info__title">Личная информация</h1>
            <div className="prfile-info__personal">
                <Avatar className="prfile-info__avatar" alt={user.data.name} src={user.data.imgUrl} sx={{ width: 100, height: 100 }} />
                <div className="prfile-info__data">
                    <p className="prfile-info__name">Аватарка</p>
                    <p className="prfile-info__text">Для добавления фотографии перетащите её сюда</p>
                    <input ref={inputFileRef} onChange={buttonFile} hidden type="file"/>
                    <button className="prfile-info__button" onClick={() => inputFileRef.current?.click()}>
                        <UploadFileIcon className="prfile-info__icon"/>
                        Выбрать аватар
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default ProfileInfo;