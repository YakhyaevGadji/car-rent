import React from "react";
import "./profileInfo.scss";
import { ITypeUserData } from "../../../../entities/viewer/model/userSlice";

const ProfileInfo: React.FC<ITypeUserData> = (props): React.JSX.Element => {
    const { user } = props;

    return (
        <section className="prfile-info">
            <h1 className="prfile-info__title">Личная информация</h1>
            <div className="prfile-info__about">
                
            </div>
        </section>
    );
}
 
export default ProfileInfo;