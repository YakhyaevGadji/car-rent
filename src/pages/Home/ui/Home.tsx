import React from "react";
import { Heading } from "../../../widgets/heading";
import { SliderCar } from "../../../widgets/sliderCar";
import { Advantage } from "../../../widgets/advantage";
import { Faq } from "../../../widgets/faq";

const Home: React.FC = () => {
    return (
        <>
            <Heading/>
            <SliderCar/>
            <Advantage/>
            <Faq/>
        </>
    );
}
 
export default Home;