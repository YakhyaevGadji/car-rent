import React from "react";
import "./carsSort.scss";

const CarsSort: React.FC = ({sort}) => {
    return (
        <div className="cars-sort">
            <p className="cars-sort__text">Сортировать по: <span className="cars-sort__value">{sort.title}</span></p>
        </div>
    );
}
 
export default CarsSort;