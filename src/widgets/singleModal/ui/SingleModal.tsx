import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Select from 'react-select';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Popover, Tab } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { EnumStatus } from "../../../entities/carblock/model/types";
import { setShowWindow } from "../../../entities/carblock/model/getCar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { ru } from "date-fns/locale";
import { RangeKeyDict } from "react-date-range";
import { addDays, differenceInDays, format, subDays } from "date-fns";
import { Range } from "react-date-range";
import "./singleModal.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Calendar from "./Calentar";

type TypeSelect = {
    value: string,
    label: string
}

const options = [
    { value: 'ofice', label: 'Взять из офиса' },
    { value: 'delivery', label: 'Доставка по городу + 100$' }
];

const SingleModal: React.FC = (): React.JSX.Element => {
    const { item, status } = useAppSelector((state) => state.getCar);
    const [value, setValue] = React.useState<string>('1');
    const [selectedOption, setSelectedOption] = React.useState<TypeSelect | null>(options[0]);
    const [valueDatePicker, setValueDatePicker] = React.useState<Date | undefined>(new Date());
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const [valueDateRangePicker, setValueDateRangePicker] = React.useState<Range[] | undefined>([
        {
            startDate: subDays(new Date(), 7),
            endDate: addDays(new Date(), 0),
            key: "selection",
        },
    ]);
    const dispatch = useAppDispatch();


    const formattedValueDatePicker = valueDatePicker ? format(valueDatePicker, "dd.MM.yyyy", { locale: ru }) : "";

    const formattedValueDateRangePickerStartDate = valueDateRangePicker?.[0].startDate
        ? format(valueDateRangePicker[0].startDate, "dd.MM.yyyy", { locale: ru })
        : "";
    const formattedValueDateRangePickerEndDate = valueDateRangePicker?.[0].endDate
        ? format(valueDateRangePicker[0].endDate, "dd.MM.yyyy", { locale: ru })
        : "";

    const daysCount = valueDateRangePicker?.[0].startDate && valueDateRangePicker?.[0].endDate ?
        differenceInDays(valueDateRangePicker[0].endDate, valueDateRangePicker[0].startDate) + 1 :
        0;

    const handleChangeValueDateRangePicker = React.useCallback((ranges: RangeKeyDict) => {
        const { selection } = ranges;
        setValueDateRangePicker([selection]);
    }, []);

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    const toggleModal = (event: any) => {
        if (event.target.className === 'modal') {
            dispatch(setShowWindow('closed'));
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const idPop = open ? 'simple-popover' : undefined;

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
                                    <form>
                                        <p className="modal__box-title">Получение</p>
                                        <Select
                                            className="modal__box-deli"
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                            placeholder={options[0].label}
                                        />
                                        <p className="modal__box-title">Дата аренды</p>

                                        <Popover
                                            id={idPop}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <Calendar
                                                editableDateInputs={true}
                                                locale={ru}
                                                minDate={addDays(new Date(), 0)}
                                                onChange={handleChangeValueDateRangePicker}
                                                ranges={valueDateRangePicker}
                                                showDateDisplay={true}
                                                showPreview={true}
                                            />
                                        </Popover>
                                        <div className="button-blue singlepage__date-btn" onClick={handleClick} aria-describedby={idPop}  >
                                            <CalendarTodayIcon className='singlepage__date-svg' />
                                            <div className="singlepage__date-info">
                                                <div className="singlepage__date-heading">Даты аренды</div>
                                                <div className="singlepage__date-col">
                                                    {formattedValueDateRangePickerStartDate}
                                                    —
                                                    {formattedValueDateRangePickerEndDate}
                                                    <span className="singlepage__date-days">{daysCount} дней</span>
                                                </div>
                                            </div>
                                        </div>
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