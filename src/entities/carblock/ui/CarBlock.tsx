import React from "react";
import "./carBlock.scss";
import { TypeItems } from "../model/types";

type TypeCarProps = {
    car: TypeItems,
}

const CarBlock: React.FC<TypeCarProps> = ({car}) => {
    return (
        <li className="car">
            <img className="car__img" src={car.mainImg} alt="" />
            <p className="car__title">{car.brand} {car.title}</p>
            <p className="car__details">{car.transmission}, {car.engine}л</p>
            <p className="car__price">{car.price}$</p>
        </li>
    );
}
 
export default CarBlock;