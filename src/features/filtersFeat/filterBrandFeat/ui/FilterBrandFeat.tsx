import React from "react";
import "./filterBrandFeat.scss";
import { brandList } from "../model/brandlist";

interface IFilterBrand {
    dispatch: (value: string) => void,
    brand: string
}

const FilterBrandFeat: React.FC<IFilterBrand> = ({dispatch, brand}) => {

    const renderBrands = brandList.map((item, index) => {
        return (
            <li 
                key={index} 
                onClick={() => dispatch(item)} 
                className={`brand__item ${brand === item ? `brand__item--active` : ``}`}
            >
                {item}
            </li>
        );
    });

    return (
        <ul className="brand__list">
            {renderBrands}
        </ul>
    );
}
 
export default FilterBrandFeat;