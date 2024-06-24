import React from "react";
import { IPropsProfileFavs } from "../model/TypesProfileFavs";
import { ProfileFavsFeat } from "../../../../features/profileFavsFeat";
import { useAppDispatch } from "../../../../app/appStore";
import { favoriteUser } from "../../../../entities/viewer/model/userSlice";
import { TypeItems } from "../../../../entities/carblock/model/types";
import { getAxiosCar, setShowWindow } from "../../../../entities/carblock/model/getCar";
import { useNavigate } from "react-router-dom";
import "./profileFavs.scss";

const ProfileFavs: React.FC<IPropsProfileFavs> = ({user, items}): React.JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const newArray = items.filter((item) => {
        for(let i = 0; i <= user.data.favorites.length; i++) {
            if(item.id === user.data.favorites[i]) {
                return item;
            }
        }
    });
    
    const onClickcar = (event: any, car: TypeItems) => {
        const id = car.id;

        if(event.target.classList.contains('profile-favs__icon')) {
            dispatch(favoriteUser({id, user}));
        }else {
            dispatch(setShowWindow('open'));
            dispatch(getAxiosCar({id}));
            navigate('/');
        }
    };

    return (
        <section className="profile-favs">
            <ul className="profile-favs__list">
                {newArray.map((item) => {
                    return <ProfileFavsFeat key={item.id} car={item} onClickcar={onClickcar}/>
                })}
            </ul>
        </section>
    );
}
 
export default ProfileFavs;