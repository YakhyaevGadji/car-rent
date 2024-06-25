import React from "react";
import { ITypeUserData } from "../../../../entities/viewer/model/userSlice";
import { ProfileAvatarFeat } from "../../../../features/profileAvatarFeat";
import "./profileInfo.scss";

const ProfileInfo: React.FC<ITypeUserData> = (props): React.JSX.Element => {
    const { user } = props;
   
    return (
        <section className="prfile-info">
            <p className="prfile-info__title">Личная информация</p>
            <ProfileAvatarFeat user={user}/>
            <p className="prfile-info__title">Обо мне</p>
            <form>

            </form>
        </section>
    );
}
 
export default ProfileInfo;