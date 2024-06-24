import React from "react";
import ListCars from "../../../widgets/listCars/ui/ListCars";
import topScroll from "../../../shared/utils/topScroll/topScroll";
import { FilterBrand, FilterPrice, FilterSort, FiltersReset } from "../../../widgets/filters";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchFilterCars } from "../../../entities/carblock/model/getFilterCars";
import { Search } from "../../../widgets/searchCars";
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";
import { SingleModal } from "../../../widgets/singleModal";
import { Pagination } from "@mui/material";
import { setPage } from "../../../entities/carblock/model/carsFiltersSlices";
import { EnumStatus } from "../../../entities/carblock/model/types";
import "./cars.scss";

const Cars: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.getFilterCars);
    const { sort, searchCars, price, page } = useAppSelector((state) => state.filters);
    const { showWindow } = useAppSelector((state) => state.getCar);
    const dispatch = useAppDispatch();

    const getCars = async () => {
        dispatch(fetchFilterCars({ sort, searchCars, price, page }));
    };

    const onChangePagination = (_: any, value: number) => {  
        topScroll()   
        dispatch(setPage(value));
    };

    React.useEffect(() => {
        getCars();
    }, [sort, searchCars, price, page]);

    return (
        <>
            <Header/>
                <main>
                    <div className="container">
                        <div className="cars__inner">
                            <aside className="cars__filters">
                                <FilterPrice />
                                <FilterBrand />
                                <FiltersReset />
                            </aside>
                            <div className="cars">
                                <FilterSort />
                                <Search />
                                <ListCars/>
                                <Pagination 
                                    className="cars__pagination" 
                                    onChange={onChangePagination} 
                                    count={status === EnumStatus.SUCCESS ? items.meta.total_pages : 3} 
                                    size="large" 
                                />
                            </div>
                        </div> 
                    </div>
                    {showWindow === 'open' && <SingleModal/>}
                </main>
            <Footer/>
        </>
    );
}

export default Cars;