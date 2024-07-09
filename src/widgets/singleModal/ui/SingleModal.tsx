import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Button, Rating, Tab } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { EnumStatus } from "../../../entities/carblock/model/types";
import { setShowWindow } from "../../../entities/carblock/model/getCar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { ModalForm } from "../../../features/modalForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { TypesModalForm } from "../../../features/modalForm/model/typesModalForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormShema } from "../../../shared/utils/yup";
import { fetchPatchProfile } from "../../../entities/viewer/model/userSlice";
import { ReviewsCar } from "../../../features/reviewsCar";
import { TypePropsModal } from "../model/typesSingleModal";
import "./singleModal.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleModal: React.FC<TypePropsModal> = ({messageTop}): React.JSX.Element => {
    const { item, status } = useAppSelector((state) => state.getCar);
    const { user, isLogged } = useAppSelector((state) => state.auth);
    const { receiving, date } = useAppSelector((state) => state.modalCar);
    const [valueButton, setValueButton] = React.useState<string>('1');
    const dispatch = useAppDispatch();

    const orderId = isLogged && user.data.applications.some(id => id.carId === item.id);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<TypesModalForm>({
        resolver: yupResolver(FormShema)
    });

    const onSubmit: SubmitHandler<TypesModalForm> = async (data) => {
        const id = user.data.id;

        if(isLogged) {
            const changedData = {
                ...user.data,
                applications: [...user.data.applications, data],
            }
    
            await dispatch(fetchPatchProfile({ id, changedData }));
            dispatch(setShowWindow("closed"));
            messageTop('success', 'Машина оформлена ожидайте звонка');
        }else {
            dispatch(setShowWindow("closed"));
        }
        
    };

    const onClickForm = () => {
        if(orderId) {
            console.log('Зареган');
            
        }else {
            handleSubmit(onSubmit)();
        }
    };

    const handleChange = (_: any, newValue: string) => {
        setValueButton(newValue);
    };

    const toggleModal = (event: any) => {
        if (event.target.className === 'modal') {
            dispatch(setShowWindow('closed'));
        }
    };

    let booleanInfoCar;

    if (valueButton === '1' || valueButton === '2') {
        booleanInfoCar = true;
    } else {
        booleanInfoCar = false;
    }

    const formatDate = date === 1 ? 'день' : date <= 4 ? 'дня' : 'дней';


    return (
        <div onClick={toggleModal} className="modal">
            <div className="container">
                {status === EnumStatus.SUCCESS && (
                    <div className="modal__info">
                        <button onClick={() => dispatch(setShowWindow('closed'))} className="modal__closed">
                            <CloseIcon fontSize="large" />
                        </button>
                        <TabContext value={valueButton}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab className="modal__tab" label="Автомобиль" value="1" />
                                    <Tab label="Бронирование" value="2" />
                                    <Tab label="Отзывы" value="3" />
                                </TabList>
                            </Box>
                            <div className="modal__content">
                                <TabPanel value="1">
                                    <h1 className="modal__title">{item.fullTitle}</h1>
                                    <h2 className="modal__subtitle">Характеристики</h2>
                                    <ul className="modal__character">
                                        <li className="modal__character-item">
                                            <p className="modal__character-title">Коробка передачи:</p>
                                            <h5 className="modal__character-data">{item.transmission.value}</h5>
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
                                        <ModalForm
                                            orderId={status && orderId}
                                            register={register}
                                            setValue={setValue}
                                            item={item}
                                            errors={errors}
                                        />
                                    </form>
                                </TabPanel>
                                <TabPanel className="modal__box" value="3">
                                    <div>
                                        <ul className="modal__reviews">
                                            {item.reviews.map((review) => {
                                                return (
                                                    <li key={review.additionalId} className="modal__reviews-item">
                                                        <div className="modal__reviews-user">
                                                            <Avatar className="modal__reviews-avatar" src={review.avatar} sx={{ width: 56, height: 56 }}>H</Avatar>
                                                            <div className="modal__reviews-info">
                                                                <p>{review.name}</p>
                                                                <Rating
                                                                    name="simple-controlled"
                                                                    size="small"
                                                                    value={review.rating}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        <p>{review.comment}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        {isLogged && <ReviewsCar item={item} user={user} />}
                                    </div>
                                </TabPanel>
                                {booleanInfoCar && (
                                    <div className="modal__result">
                                        <img className="modal__result_img" src={item.mainImg} alt="" />
                                        <p className="modal__result_title">Стоимость</p>
                                        <ul className="modal__reuslt_list">
                                            <li className="modal__result_item">
                                                <p className="modal__result_text">Аренда на {date} {formatDate}:</p>
                                                <p className="modal__result_total">{item.price}$</p>
                                            </li>
                                            <li className="modal__result_item">
                                                <p className="modal__result_text">Доставка:</p>
                                                <p className="modal__result_total">{receiving.priceDev}$</p>
                                            </li>
                                            <li className="modal__result_global">
                                                <p className="modal__result_text">Итого:</p>
                                                <p className="modal__result_total">{(item.price * date) + receiving.priceDev}$</p>
                                            </li>
                                        </ul>
                                        {valueButton === '1' && <Button onClick={() => setValueButton('2')} variant="contained" fullWidth>Продолжить</Button>}
                                        {valueButton === '2' && <Button onClick={onClickForm} variant="contained" type='submit' fullWidth>{!orderId ? 'Отпарвить' : 'Продлить'}</Button>}
                                    </div>
                                )}
                            </div>
                        </TabContext>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SingleModal;