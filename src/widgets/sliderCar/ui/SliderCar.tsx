import React from "react";
import { CarBlock } from "../../../entities/index";
import "./sliderCar.scss";

const SliderCar: React.FC = () => {
    return (
        <section className="slider-car">
            <div className="container">
                <h2 className="slider-car__title">Автомат</h2>
                <ul className="slider-car__list">
                    <CarBlock />
                    <CarBlock />
                    <CarBlock />
                    <CarBlock />
                </ul>
            </div>
        </section>
    );
}

export default SliderCar;