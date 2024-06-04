import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Tab } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { EnumStatus } from "../../../entities/carblock/model/types";
import { setShowWindow } from "../../../entities/carblock/model/getCar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { ModalForm } from "../../../features/modalForm";
import { SubmitHandler, useForm } from "react-hook-form";
import "./singleModal.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type InputsModal = {
    dateBrith: string,
    receipt: string
};

const SingleModal: React.FC = (): React.JSX.Element => {
    const { item, status } = useAppSelector((state) => state.getCar);
    const [value, setValue] = React.useState<string>('1');
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputsModal>();

    const onSubmit: SubmitHandler<InputsModal> = (data) => {
        console.log(data);
    };

    const onClickForm = () => {
        handleSubmit(onSubmit)();
    };

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    const toggleModal = (event: any) => {
        if (event.target.className === 'modal') {
            dispatch(setShowWindow('closed'));
        }
    };

    return (
        <div onClick={toggleModal} className="modal">
            <div className="container">
                {status === EnumStatus.SUCCESS && (
                    <div className="modal__info">
                        <button onClick={() => dispatch(setShowWindow('closed'))} className="modal__closed">
                            <CloseIcon fontSize="large" />
                        </button>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab className="modal__tab" label="Автомобиль" value="1" />
                                    <Tab label="Бронирование" value="2" />
                                </TabList>
                            </Box>
                            <div className="modal__content">
                                <TabPanel value="1">
                                    <h1 className="modal__title">{item.fullTitle}</h1>
                                    <h2 className="modal__subtitle">Характеристики</h2>
                                    <ul className="modal__character">
                                        <li className="modal__character-item">
                                            <p className="modal__character-title">Коробка передачи:</p>
                                            <h5 className="modal__character-data">{item.transmission}</h5>
                                        </li>
                                        <li className="modal__character-item">
                                            <p className="modal__character-title">Двигатель:</p>
                                            <h5 className="modal__character-data">{item.engine}</h5>
                                        </li>
                                        <li className="modal__character-item">
                                            <p className="modal__character-title">Топливо:</p>
                                            <h5 className="modal__character-data">{item.fuel}</h5>
                                        </li>
                                        <li className="modal__character-item">
                                            <p className="modal__character-title">Год выпуска:</p>
                                            <h5 className="modal__character-data">{item.year}</h5>
                                        </li>
                                    </ul>
                                    <Swiper
                                        slidesPerView={"auto"}
                                        spaceBetween={10}
                                        modules={[Pagination, Keyboard, Navigation]}
                                        className="modal__slider"
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        pagination={{
                                            clickable: true,
                                            type: "fraction",
                                        }}
                                        navigation={true}
                                    >
                                        {item.imgs.map((img, index) => {
                                            return (
                                                <SwiperSlide /*onClick={() => onClickAddParams(index)}*/ key={index}>
                                                    <img className="slider__img" src={img} alt="" />
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </TabPanel>
                                <TabPanel className="modal__box" value="2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <ModalForm register={register}/>
                                    </form>
                                </TabPanel>
                                <div className="modal__result">
                                    <img className="modal__result_img" src={item.mainImg} alt="" />
                                    <p className="modal__result_title">Стоимость</p>
                                    <ul className="modal__reuslt_list">
                                        <li className="modal__result_item">
                                            <p className="modal__result_text">Аренда на 1 день:</p>
                                            <p className="modal__result_total">{item.price}$</p>
                                        </li>
                                        <li className="modal__result_item">
                                            <p className="modal__result_text">Доставка:</p>
                                            <p className="modal__result_total">0$</p>
                                        </li>
                                        <li className="modal__result_global">
                                            <p className="modal__result_text">Итого:</p>
                                            <p className="modal__result_total">{item.price}$</p>
                                        </li>
                                    </ul>
                                    {value === '1' && <Button onClick={() => setValue('2')} variant="contained" fullWidth>Продолжить</Button>}
                                    {value === '2' && <Button onClick={onClickForm} variant="contained" type='submit' fullWidth>Отпарвить</Button>}
                                </div>
                            </div>
                        </TabContext>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SingleModal;