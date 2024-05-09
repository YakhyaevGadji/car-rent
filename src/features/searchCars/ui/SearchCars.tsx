import React from "react";
import { TypeSearchProps } from "../model/searchTypes";
import "./searchCars.scss";
import debounce from 'lodash.debounce';

const SearchCars: React.FC<TypeSearchProps> = ({dispatch}) => {
    const [inputValue, setInputValue] = React.useState<string>("");

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(str);
        }, 400),
        [],
    )

    const onChangeInput = (value: string) => {
        setInputValue(value);
        updateSearchValue(value);
    };

    return <input 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeInput(event.target.value)} 
        className="search__input" 
        type="text" 
        value={inputValue} 
        placeholder="Merced..." 
    />;
}
 
export default SearchCars;