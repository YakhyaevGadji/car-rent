import React from "react";
import "./filterSort.scss";
import CarsSort from "../../../../features/carsSort/ui/CarsSort";
import { useAppSelector } from "../../../../app/appStore";

const FilterSort: React.FC = () => {
    const sort = useAppSelector((state) => state.filters.sort);

    return (
        <section className="sort">
            <div className="sort__inner container">
                <h1 className="sort__title">Машины</h1>
                <CarsSort sort={sort}/>
            </div>
        </section>
    );
}
 
export default FilterSort;