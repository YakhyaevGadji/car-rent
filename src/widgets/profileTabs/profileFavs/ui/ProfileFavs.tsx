import React from "react";
import { useAppSelector } from "../../../../app/appStore";
import { IPropsProfileFavs } from "../model/TypesProfileFavs";
import "./profileFavs.scss";

const ProfileFavs: React.FC<IPropsProfileFavs> = ({user}): React.JSX.Element => {
    const { items } = useAppSelector((state) => state.cars);

    console.log(items, user);

    return (
        <section className="profile-favs">
            <ul className="profile-favs__list">
                Favorites
            </ul>
        </section>
    );
}
 
export default ProfileFavs;