import React from "react";
import "./carBlock.scss";
import { TypeItems } from "../model/types";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { getAxiosCar, setShowWindow } from "../model/getCar";

type TypeCarProps = {
    car: TypeItems,
}

const CarBlock: React.FC<TypeCarProps> = ({car}) => {
    const { item } = useAppSelector((state) => state.getCar);
    const dispatch = useAppDispatch();

    const onClickcar = () => {
        const id = car.id;

        dispatch(setShowWindow('open'));
        dispatch(getAxiosCar({id}));
    };

    return (
        <>
            <li onClick={onClickcar} className="car">
                <img className="car__img" src={car.mainImg} alt="" />
                <p className="car__title">{car.fullTitle}</p>
                <p className="car__details">{car.transmission}, {car.engine}л</p>
                <p className="car__price">{car.price}$</p>
            </li>
        </>
    );
}
 
export default CarBlock;