import React from "react";
import "./listCars.scss";
import { EnumStatus, TypeItems } from "../../../entities/carblock/model/types";
import { CarBlock } from "../../../entities";
import Skeleton from "../../../shared/ui/skeleton/Skeleton";

type TypeListCarsProps = {
    cars: TypeItems[],
    status: string
};

const ListCars: React.FC<TypeListCarsProps> = ({cars, status}) => {

    const skeleton = [...new Array(15)].map((_, index) => <Skeleton key={index}/>);
    const renderCars = cars.map((car, index) => <CarBlock key={index} car={car}/>)

    return (
        <ul className="cars-list">
            {status === EnumStatus.LOADING ? skeleton : ''}
            {status === EnumStatus.SUCCESS ? renderCars : ''}
        </ul>
    );
}
 
export default ListCars;