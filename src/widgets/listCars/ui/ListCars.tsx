import React from "react";
import "./listCars.scss";
import { EnumStatus } from "../../../entities/carblock/model/types";
import { CarBlock } from "../../../entities/carblock";
import Skeleton from "../../../shared/ui/skeleton/Skeleton";
import { useAppSelector } from "../../../app/appStore";

const ListCars: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.getFilterCars);

    const skeleton = [...new Array(15)].map((_, index) => <Skeleton key={index}/>);
    const renderCars = items.map((car, index) => <CarBlock key={index} car={car}/>)

    return (
        <ul className="cars-list">
            {status === EnumStatus.LOADING ? skeleton : ''}
            {status === EnumStatus.SUCCESS ? renderCars : ''}
        </ul>
    );
}
 
export default ListCars;