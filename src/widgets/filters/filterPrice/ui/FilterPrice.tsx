import { Slider } from "@mui/material";
import React from "react";
import debounce from "lodash.debounce";
import {useAppDispatch, useAppSelector} from "../../../../app/appStore";
import { setPrice } from "../../../../entities/carblock/model/carsFiltersSlices";
import "./filterPrice.scss";

const FilterPrice: React.FC = () => {
    const {price} = useAppSelector((state) => state.filters);
    const [value1, setValue1] = React.useState<number[]>([10, 90]);
    const dispatch = useAppDispatch();
    const minDistance = 10;

    const handleChange1 = (_: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([
                Math.min(newValue[0], value1[1] - minDistance),
                value1[1],
            ]);
        } else {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance),
            ]);
        }

        updatePriceValue(newValue);
    };

    const updatePriceValue = React.useCallback(
        debounce((value) => {
            dispatch(setPrice(value));
        }, 500),
        []
    );

    React.useEffect(() => {
        setValue1(price);
    }, [price]);

    return (
        <section className="price">
            <p className="price__title">Фильтр по цене</p>
            <div className="price__inputs-block">
                <input className="price__input" type="number" disabled value={value1[0]} />
                <span>-</span>
                <input className="price__input" type="number" disabled value={value1[1]} />
            </div>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange1}
                // min={10}
                // max={10000}
                valueLabelDisplay="auto"
                disableSwap
                sx={{
                    color: "#49d0ff",
                }}
            />
        </section>
    );
};

export default FilterPrice;
