import React from "react";
import { IPropsProfileHeader } from "../../model/typeHeader";
import { Avatar } from "@mui/material";
import "./profileHeader.scss";

const ProfileHeader: React.FC<IPropsProfileHeader> = (props): React.JSX.Element => {
    const {user} = props;
    
    return (
        <div className="profile-header">
            <p className="profile-header__name">{user.data.name}</p>
            <Avatar sx={{ width: 32, height: 32 }}>{user.data.name[0]}</Avatar>
        </div>
    );
}
 
export default ProfileHeader;