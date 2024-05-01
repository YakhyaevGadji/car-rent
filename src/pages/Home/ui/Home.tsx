import React from "react";
import { Heading } from "../../../widgets/heading";
import { SliderCar } from "../../../widgets/sliderCar";
import { Advantage } from "../../../widgets/advantage";

const Home: React.FC = () => {
    return (
        <>
            <Heading/>
            <SliderCar/>
            <Advantage/>
        </>
    );
}
 
export default Home;