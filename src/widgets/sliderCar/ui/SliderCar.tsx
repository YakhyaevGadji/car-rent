import React from "react";
import { CarBlock } from "../../../entities/index";
import "./sliderCar.scss";
import { TypeItems } from "../../../entities/carblock/model/types";

type TypeSliderProps = {
    cars: TypeItems[]
    status: string
}

const SliderCar: React.FC<TypeSliderProps> = ({cars, status}) => {
    console.log(cars);
    return (
        <section className="slider-car">
            <div className="container">
                <h2 className="slider-car__title">Автомат</h2>
                <ul className="slider-car__list">
                    
                    
                </ul>
            </div>
        </section>
    );
}

export default SliderCar;