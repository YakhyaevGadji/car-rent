import React from "react";
import ListCars from "../../../widgets/listCars/ui/ListCars";
import { FilterBrand, FilterPrice, FilterSort } from "../../../widgets/filters";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchFilterCars } from "../../../entities/carblock/model/getFilterCars";
import { Search } from "../../../widgets/searchCars";
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";
import { SingleModal } from "../../../widgets/singleModal";
import "./cars.scss";

const Cars: React.FC = () => {
    const { sort, searchCars, price } = useAppSelector((state) => state.filters);
    const { showWindow } = useAppSelector((state) => state.getCar);
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
                    {showWindow === 'closed' && <SingleModal/>}
                </main>
            <Footer/>
        </>
    );
}

export default Cars;