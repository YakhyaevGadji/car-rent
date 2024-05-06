import React from "react";
import { Heading } from "../../../widgets/heading";
import { SliderCar } from "../../../widgets/sliderCar";
import { Advantage } from "../../../widgets/advantage";
import { Faq } from "../../../widgets/faq";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchCars } from "../../../entities/carblock/model/carsSlice";

const Home: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.cars);
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
            <SliderCar cars={items} status={status}/>
            <Advantage/>
            <Faq/>
        </>
    );
}
 
export default Home;