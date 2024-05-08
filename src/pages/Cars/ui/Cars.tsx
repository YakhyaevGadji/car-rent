import React from "react";
import { FilterSort } from "../../../widgets/filters";
import "./cars.scss";
import { SearchCars } from "../../../widgets/searchCars";
import ListCars from "../../../widgets/listCars/ui/ListCars";

const Cars: React.FC = () => {
    return (
        <div className="container">
            <aside className="cars__filters">

            </aside>
            <div className="cars">
                <FilterSort/>
                <SearchCars/>
                <ListCars/>
            </div>
        </div>
    );
}
 
export default Cars;