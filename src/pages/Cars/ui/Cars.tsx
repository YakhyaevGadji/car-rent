import React from "react";
import { FilterSort } from "../../../widgets/filters";
import "./cars.scss";

const Cars: React.FC = () => {
    return (
        <div className="container">
            <aside className="cars__filters">

            </aside>
            <div className="cars">
                <div className="cars__sort">
                    <FilterSort/>
                </div>
            </div>
        </div>
    );
}
 
export default Cars;