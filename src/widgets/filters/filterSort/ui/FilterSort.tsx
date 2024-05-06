import React from "react";
import "./filterSort.scss";
import CarsSort from "../../../../features/carsSort/ui/CarsSort";

const FilterSort: React.FC = () => {
    return (
        <section className="sort">
            <div className="sort__inner container">
                <h1 className="sort__title">Машины</h1>
                <CarsSort/>
            </div>
        </section>
    );
}
 
export default FilterSort;