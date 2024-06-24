import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { TypeItems } from "../model/types";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { getAxiosCar, setShowWindow } from "../model/getCar";
import { favoriteUser } from "../../viewer/model/userSlice";
import "./carBlock.scss";

type TypeCarProps = {
    car: TypeItems,
}

const CarBlock: React.FC<TypeCarProps> = ({car}) => {
    const { isLogged, user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    let favorites;

    if(isLogged) {
        favorites = user.data.favorites.find((item) => item === car.id);
    }

    const onClickcar = (event: any) => {
        const id = car.id;

        if(event.target.classList.contains('car__icon')) {
            dispatch(favoriteUser({id, user}));
            
        }else {
            dispatch(setShowWindow('open'));
            dispatch(getAxiosCar({id}));
        }
    };

    return (
        <>
            <li onClick={onClickcar} className="car">
                {isLogged ? <div ><FavoriteBorderIcon  
                    sx={{ width: 33, height: 33 }} 
                    className={`car__icon ${favorites ? 'car__icon--active' : ''}`}
                    /></div> : ''}
                <img className="car__img" src={car.mainImg} alt="" />
                <p className="car__title">{car.fullTitle}</p>
                <p className="car__details">{car.transmission}, {car.engine}л</p>
                <p className="car__price">{car.price}$</p>
            </li>
        </>
    );
}
 
export default CarBlock;