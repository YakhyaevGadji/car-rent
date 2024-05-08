import React from "react";
import { FilterPrice, FilterSort } from "../../../widgets/filters";
import "./cars.scss";
import { SearchCars } from "../../../widgets/searchCars";
import ListCars from "../../../widgets/listCars/ui/ListCars";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchFilterCars } from "../../../entities/carblock/model/getFilterCars";

const Cars: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.getFilterCars);
    const dispatch = useAppDispatch();

    const getCars = async () => {
        dispatch(fetchFilterCars());
    };

    React.useEffect(() => {
        getCars()
    }, []);

    return (
        <div className="container">
            <div className="cars__inner">
                <aside className="cars__filters">
                    <FilterPrice/>
                </aside>
                <div className="cars">
                    <FilterSort/>
                    <SearchCars/>
                    <ListCars cars={items} status={status} />
                </div>
            </div>
        </div>
    );
}
 
export default Cars;