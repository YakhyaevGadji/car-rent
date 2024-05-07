import React from "react";
import { CarBlock } from "../../../entities/index";
import "./sliderCar.scss";
import { EnumStatus, TypeItems } from "../../../entities/carblock/model/types";
import Skeleton from "../../../shared/ui/skeleton/Skeleton";

type TypeSliderProps = {
    cars: TypeItems[]
    status: string,
    title: string
}

const SliderCar: React.FC<TypeSliderProps> = ({cars, status, title}) => {
    return (
        <section className="slider-car">
            <div className="container">
                <h2 className="slider-car__title">{title}</h2>
                <ul className="slider-car__list">
                    {status === EnumStatus.LOADING ? [...new Array(4)].map((_, index) => <Skeleton key={index}/>)  : ''}
                    {status === EnumStatus.SUCCESS ? cars.map((item, index) => {
                        return <CarBlock key={index} car={item}/>
                    }) : ''}
                </ul>
            </div>
        </section>
    );
}

export default SliderCar;