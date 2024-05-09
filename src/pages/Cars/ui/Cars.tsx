import React from "react";
import { FilterPrice, FilterSort } from "../../../widgets/filters";
import ListCars from "../../../widgets/listCars/ui/ListCars";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchFilterCars } from "../../../entities/carblock/model/getFilterCars";
import { Search } from "../../../widgets/searchCars";
import "./cars.scss";

type TypeCarsComp = {
    getCars: () => void
}

const Cars: React.FC<TypeCarsComp> = () => {
    const { items, status } = useAppSelector((state) => state.getFilterCars);
    const { sort, searchCars } = useAppSelector((state) => state.filters);
    const dispatch = useAppDispatch();

    const getCars = async () => {
        dispatch(fetchFilterCars({sort, searchCars}));
    };

    React.useEffect(() => {
        getCars()
    }, [sort, searchCars]);

    return (
        <div className="container">
            <div className="cars__inner">
                <aside className="cars__filters">
                    <FilterPrice/>
                </aside>
                <div className="cars">
                    <FilterSort/>
                    <Search/>
                    <ListCars cars={items} status={status} />
                </div>
            </div>
        </div>
    );
}
 
export default Cars;