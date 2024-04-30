import React from "react";
import "./carBlock.scss";

const CarBlock: React.FC = () => {
    return (
        <li className="car">
            <img className="car__img" src="https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/041/378/original/MG-ZS-2020-red_(1).jpg?1680090691" alt="" />
            <h3 className="car__title">KIA k5</h3>
        </li>
    );
}
 
export default CarBlock;