import React from "react";
import { Button } from "@mui/material";
import "./filtersReset.scss";
import {useAppDispatch} from "../../../../app/appStore.ts";
import {reset} from "../../../../entities/carblock/model/carsFiltersSlices.ts";

const FiltersReset: React.FC = (): React.JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <section className="filters-reset">
            <p className="brand__title">Сброс фильтров</p>
            <Button onClick={() => dispatch(reset())} fullWidth variant="outlined">Сброс</Button>
        </section>
    );
}
 
export default FiltersReset;