import React from "react";
import { Button } from "@mui/material";
import "./filtersReset.scss";

const FiltersReset: React.FC = (): React.JSX.Element => {
    return (
        <section className="filters-reset">
            <p className="brand__title">Сброс фильтров</p>
            <Button fullWidth variant="outlined">Сброс</Button>
        </section>
    );
}
 
export default FiltersReset;