import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { ITypeUserData } from "../../../../entities/viewer/model/userSlice";
import { Avatar } from "@mui/material";
import "./profileInfo.scss";

const ProfileInfo: React.FC<ITypeUserData> = (props): React.JSX.Element => {
    const { user } = props;
    const inputFileRef = React.useRef<HTMLInputElement>(null);

    const buttonFile = (e: any) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        console.log(formData);
    };

    return (
        <section className="prfile-info">
            <h1 className="prfile-info__title">Личная информация</h1>
            <div className="prfile-info__personal">
                <Avatar className="prfile-info__avatar" alt={user.data.name} src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
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