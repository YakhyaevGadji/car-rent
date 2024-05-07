import React from "react";
import "./carBlock.scss";
import { TypeItems } from "../model/types";

type TypeCarProps = {
    car: TypeItems,
}

const CarBlock: React.FC<TypeCarProps> = ({car}) => {
    
    return (
        <li className="car">
            <img className="car__img" src="https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/041/378/original/MG-ZS-2020-red_(1).jpg?1680090691" alt="" />
            <p className="car__title">{car.brand} {car.title}</p>
            <p className="car__details">Автомат, 1.5л</p>
            <p className="car__price">{car.price}$</p>
        </li>
    );
}
 
export default CarBlock;