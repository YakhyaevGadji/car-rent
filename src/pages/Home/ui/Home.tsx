import React from "react";
import { Heading } from "../../../widgets/heading";
import { SliderCar } from "../../../widgets/sliderCar";
import { Advantage } from "../../../widgets/advantage";
import { Faq } from "../../../widgets/faq";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchCars } from "../../../entities/carblock/model/carsSlice";

const Home: React.FC = () => {
    const { items } = useAppSelector((state) => state.cars);
    const dispatch = useAppDispatch();

    const getCars = () => {
        dispatch(fetchCars());
    }

    React.useEffect(() => {
        getCars();
    }, []);

    return (
        <>
            <Heading/>
            <SliderCar cars={items}/>
            <Advantage/>
            <Faq/>
        </>
    );
}
 
export default Home;