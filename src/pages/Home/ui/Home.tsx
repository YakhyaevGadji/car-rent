import React from "react";
import { Heading } from "../../../widgets/heading";
import { SliderCar } from "../../../widgets/sliderCar";
import { Advantage } from "../../../widgets/advantage";
import { Faq } from "../../../widgets/faq";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchCars } from "../../../entities/carblock/model/carsSlice";
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";
import { SingleModal } from "../../../widgets/singleModal";

const Home: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.cars);
    const { showWindow } = useAppSelector((state) => state.getCar);
    const dispatch = useAppDispatch();

    const getCars = () => {
        dispatch(fetchCars());
    }

    React.useEffect(() => {
        getCars();
    }, []);

    const carsAuto = items.filter((item) => item.transmission === 'Автоматическая');
    const carsMechanical = items.filter((item) => item.transmission === 'Механическая');

    return (
        <>
            <Header/>
            <main>
                <Heading/>
                <SliderCar cars={carsAuto} status={status} title={'Автомат'}/>
                <SliderCar cars={carsMechanical} status={status} title={'Механика'}/>
                <Advantage/>
                <Faq/>
                {showWindow === 'open' && <SingleModal/>}
            </main>
            <Footer/>
        </>
        
    );
}
 
export default Home;