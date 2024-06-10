import React from "react";
import Skeleton from "../../../shared/ui/skeleton/Skeleton";
import EmptyCar from "../../../shared/ui/empty/EmptyCar";
import { EnumStatus } from "../../../entities/carblock/model/types";
import { CarBlock } from "../../../entities/carblock";
import { useAppSelector } from "../../../app/appStore";
import "./listCars.scss";

const ListCars: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.getFilterCars);

    const skeleton = [...new Array(15)].map((_, index) => <Skeleton key={index}/>);
    const renderCars = items.map((car, index) => <CarBlock key={index} car={car}/>);
    const emptyCar = items.length === 0 ? true : false;

    return (
        <ul className={`${emptyCar ? 'cars-list_block' : 'cars-list'}`}>
            {status === EnumStatus.LOADING ? skeleton : ''}
            {status === EnumStatus.SUCCESS ? renderCars : ''}
            {status === EnumStatus.SUCCESS && emptyCar ? <EmptyCar/> : ''}
        </ul>
    );
}
 
export default ListCars;