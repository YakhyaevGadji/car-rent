import React from "react";
import "./carsSort.scss";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { setSort, TypeSort } from "../../../entities/carblock/model/carsFiltersSlices";
import { listSort } from "../model/listSort";

const CarsSort: React.FC = () => {
    const sort = useAppSelector((state) => state.filters.sort);
    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();

    const onCliclSort = () => {
        setOpen(!open);
    }

    const clickItemList = (item: TypeSort) => {
        dispatch(setSort(item));
        setOpen(false);
    }

    return (
        <div className="cars-sort">
            <p onClick={onCliclSort} className="cars-sort__text">Сортировать по: <span className="cars-sort__value">{sort.title}</span></p>
            {open && (
                <ul className="cars-sort__list">
                    {listSort.map((item, index) => {
                        return <p key={index} onClick={() => clickItemList(item)} className={`cars-sort__item ${sort.property === item.property ? `cars-sort__item--active` : ``}`}>{item.title}</p>
                    })}
                </ul>
            )}
        </div>
    );
}

export default CarsSort;