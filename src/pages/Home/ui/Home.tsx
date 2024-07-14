import React from "react";
import { Heading } from "../../../widgets/heading";
import { SliderCar } from "../../../widgets/sliderCar";
import { Advantage } from "../../../widgets/advantage";
import { Faq } from "../../../widgets/faq";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchCars } from "../../../entities/carblock/model/carsSlice";
import { SingleModal } from "../../../widgets/singleModal";
import { iTypePropsHomePage } from "../model/TypeHomePage";

const Home: React.FC<iTypePropsHomePage> = ({contextHolder, messageTop}) => {
    const { items, status } = useAppSelector((state) => state.cars);
    const { showWindow } = useAppSelector((state) => state.getCar);
    const dispatch = useAppDispatch();

    const getCars = () => {
        dispatch(fetchCars());
    }

    React.useEffect(() => {
        getCars();
    }, []);

    const carsAuto = items.filter((item) => item.transmission.value === 'Automatic');
    const carsMechanical = items.filter((item) => item.transmission.value === 'mechanical');

    return (
        <>
            {contextHolder}
            <Heading/>
            <SliderCar cars={carsAuto} status={status} title={'Автомат'}/>
            <SliderCar cars={carsMechanical} status={status} title={'Механика'}/>
            <Advantage/>
            <Faq/>
            {showWindow === 'open' && <SingleModal messageTop={messageTop}/>}
        </>
        
    );
}
 
export default Home;