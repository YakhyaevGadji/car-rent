import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { TypeItems } from "../../../entities/carblock/model/types";

interface IPropsPorfileFavsFeat {
    car: TypeItems,
    onClickcar: (event: React.MouseEvent<HTMLLIElement>, car: TypeItems) => void
}

const ProfileFavsFeat: React.FC<IPropsPorfileFavsFeat> = ({car, onClickcar}): React.JSX.Element => {
    return (
        <li onClick={(event) => onClickcar(event, car)} className="profile-favs__item">
            <button className="profile-favs__button"><FavoriteBorderIcon className="profile-favs__icon" sx={{ width: 33, height: 33 }}/></button>
            <img className="car__img" src={car.mainImg} alt="" />
            <p className="profile-favs__title">{car.fullTitle}</p>
            <p className="profile-favs__details">{car.transmission.name[1].value}, {car.engine}л</p>
            <p className="profile-favs__price">{car.price}$</p>
        </li>
    );
}
 
export default ProfileFavsFeat;