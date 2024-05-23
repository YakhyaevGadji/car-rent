import React from "react";
import { FilterBrand, FilterPrice, FilterSort } from "../../../widgets/filters";
import ListCars from "../../../widgets/listCars/ui/ListCars";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchFilterCars } from "../../../entities/carblock/model/getFilterCars";
import { Search } from "../../../widgets/searchCars";
import "./cars.scss";
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";

const Cars: React.FC = () => {
    const { sort, searchCars, price } = useAppSelector((state) => state.filters);
    const dispatch = useAppDispatch();

    const getCars = async () => {
        dispatch(fetchFilterCars({ sort, searchCars, price }));
    };

    React.useEffect(() => {
        getCars()
    }, [sort, searchCars, price]);

    return (
        <>
            <Header/>
                <main>
                    <div className="container">
                        <div className="cars__inner">
                            <aside className="cars__filters">
                                <FilterPrice />
                                <FilterBrand />
                            </aside>
                            <div className="cars">
                                <FilterSort />
                                <Search />
                                <ListCars/>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    );
}

export default Cars;