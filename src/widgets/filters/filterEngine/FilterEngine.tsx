import React from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useDispatch} from "react-redux";
import {setEngine} from "../../../entities/carblock/model/carsFiltersSlices.ts";
import {useAppSelector} from "../../../app/appStore.ts";
import "./filterEngine.scss";

const FilterEngine: React.FC = () => {
    const {engine} = useAppSelector((state) => state.filters);
    const dispatch = useDispatch();

    return (
        <section className="filter-engine">
            <p className="filter-engine__title">Фильтр по двигателю</p>
            <FormControl>
                <RadioGroup
                    onChange={(e) => dispatch(setEngine(e.target.value))}
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={engine}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="all" control={<Radio/>} label="Все" />
                    <FormControlLabel value="mechanical" control={<Radio />} label="Механическая" />
                    <FormControlLabel value="Automatic" control={<Radio />} label="Автоматическая" />
                </RadioGroup>
            </FormControl>
        </section>
    )
}

export default FilterEngine;

