import React from "react";
import { CarBlock } from "../../../entities/index";
import { EnumStatus, TypeItems } from "../../../entities/carblock/model/types";
import Skeleton from "../../../shared/ui/skeleton/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./sliderCar.scss";

type TypeSliderProps = {
    cars: TypeItems[];
    status: string;
    title: string;
};

const SliderCar: React.FC<TypeSliderProps> = ({ cars, status, title }) => {
    const skeleton = [...new Array(4)].map((_, index) => (
        <SwiperSlide key={index}><Skeleton/></SwiperSlide> 
    ));
    const renderCars = cars.map((car) => (
        <SwiperSlide key={car.id}><CarBlock car={car} /></SwiperSlide> 
    ));

    return (
        <section className="slider-car">
            <div className="container">
                <h2 className="slider-car__title">{title}</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    cssMode={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="slider-car__list"
                >            
                    {status === EnumStatus.LOADING ? skeleton : ''}
                    {status === EnumStatus.SUCCESS ? renderCars : ''}
                </Swiper>
            </div>
        </section>
    );
};

export default SliderCar;
