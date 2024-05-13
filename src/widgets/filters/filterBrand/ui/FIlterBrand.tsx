import React from "react";
import "./filterBrand.scss";
import { FilterBrandFeat } from "../../../../features/filtersFeat";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { setbrand } from "../../../../entities/carblock/model/carsFiltersSlices";

const FilterBrand: React.FC = () => {
    const { brand } = useAppSelector((state) => state.filters);
    const dispatch = useAppDispatch();

    return (
        <section className="brand">
            <p className="brand__title">Фильтр по маркам</p>
            <FilterBrandFeat dispatch={(brand) => dispatch(setbrand(brand))} brand={brand}/>
        </section>
    );
}
 
export default FilterBrand;