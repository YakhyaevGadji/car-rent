import React from "react";
import "./filterSort.scss";
import { CarsSort } from "../../../../features/carsSort";

const FilterSort: React.FC = () => {
    return (
        <section className="sort">
            <div className="sort__inner">
                <h1 className="sort__title">Машины</h1>
                <CarsSort/>
            </div>
        </section>
    );
}
 
export default FilterSort;