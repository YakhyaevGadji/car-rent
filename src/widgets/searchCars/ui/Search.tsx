import React from "react";
import { useAppDispatch } from "../../../app/appStore";
import { setSearchCars } from "../../../entities/carblock/model/carsFiltersSlices";
import { SearchCars } from "../../../features/searchCars";
import "./searchCars.scss";

const Search: React.FC = () => {
    const dispatch = useAppDispatch();

    return <SearchCars dispatch={(value) => dispatch(setSearchCars(value))}/>
}
 
export default Search;