import React from "react";
import Select from 'react-select';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Popover, TextField } from "@mui/material";
import { Calendar } from "../../../widgets/singleModal";
import { addDays, differenceInDays, format, setDate, subDays } from "date-fns";
import { ru } from "date-fns/locale";
import { RangeKeyDict } from "react-date-range";
import { Range } from "react-date-range";
import { IPropsModalFrom } from "../model/typesModalForm";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { setDateModal, setReceiving } from "../../../entities/modalCar/model/modalCarSlice";
import "./modalForm.scss";

const options = [
    { value: 'ofice', label: 'Взять из офиса', priceDev: 0 },
    { value: 'delivery', label: 'Доставка по городу + 100$', priceDev: 100 }
];

const ModalForm: React.FC<IPropsModalFrom> = ({ register, setValue, item, errors }): React.JSX.Element => {
    const { receiving } = useAppSelector((state) => state.modalCar);
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    // const [valueDatePicker, setValueDatePicker] = React.useState<Date | undefined>(new Date());
    const [valueDateRangePicker, setValueDateRangePicker] = React.useState<Range[] | undefined>([
        {
            startDate: subDays(new Date(), 0),
            endDate: addDays(new Date(), 0),
            key: "selection",
        },
    ]);
    const newData = new Date();
    const dispatch = useAppDispatch();

    const formatDate = (date: any) => {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
    
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
    
        return `${day} ${month} ${year}`;
    }


    // const formattedValueDatePicker = valueDatePicker ? format(valueDatePicker, "dd.MM.yyyy", { locale: ru }) : "";

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

    dispatch(setDateModal(daysCount));

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const date = `${formattedValueDateRangePickerStartDate} - ${formattedValueDateRangePickerEndDate} - ${daysCount}`;

    const dateCreate = formatDate(newData)

    setValue("receipt", receiving);
    setValue("rentalReriod", date);
    setValue("messenger", "whatsapp");
    setValue("status", "processing");
    setValue("dataCreation", dateCreate);
    setValue("titleCar", item.fullTitle);
    setValue("imgCar", item.mainImg);
    setValue("price", item.price * daysCount);

    const open = Boolean(anchorEl);
    const idPop = open ? 'simple-popover' : undefined;

    return (
        <>
            <p className="form__modal-title">Получение</p>
            <Select
                className="modal__box-deli"
                defaultValue={receiving}
                onChange={(value) => dispatch(setReceiving(value))}
                options={options}
                placeholder={options[0].label}
            />

            {receiving.value === 'delivery' && (
                <TextField
                    error={receiving.value === 'delivery' && !!errors.address}
                    helperText={errors.address?.message ? `${errors.address.message}` : ''}
                    {...register('address')}
                    className="form__modal-addres"  
                    type="text"
                    fullWidth={true}
                    label="Введите Адрес"
                    variant="outlined"
                />
            )} 

            <p className="form__modal-title">Дата аренды</p>

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
                    {...register('rentalReriod')}
                    editableDateInputs={true}
                    locale={ru}
                    minDate={addDays(new Date(), 0)}
                    onChange={handleChangeValueDateRangePicker}
                    ranges={valueDateRangePicker}
                    showDateDisplay={true}
                    showPreview={true}
                />
            </Popover>
            <div className="form__date" onClick={handleClick} aria-describedby={idPop}  >
                <CalendarTodayIcon className='from__icon' />
                <div className="form__modal-info">
                    <div className="singlepage__date-heading">Даты аренды</div>
                    <div className="singlepage__date-col">
                        {formattedValueDateRangePickerStartDate}
                        —
                        {formattedValueDateRangePickerEndDate}
                        <span className="singlepage__date-days"> {daysCount} дней</span>
                    </div>
                </div>
            </div>
            <p className="form__modal-title form__modal-lastitle">Данные основного водителя</p>
            <ul className="form__modal-list">
                <li className="form__modal-item">
                    <p className="form__modal-subtitle">Имя и фамилия</p>
                    <TextField
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message ? `${errors.fullName.message}` : ''}
                        {...register('fullName')}
                        className="form__modal-name"
                        type="text"
                        fullWidth={true}
                        label="Имя и фамилия"
                        variant="outlined"
                    />
                </li>
                <li className="form__modal-item">
                    <p className="form__modal-subtitle">Дата рождения</p>
                    <TextField
                        {...register('dateBrith')}
                        className="form__modal-name"
                        type="text"
                        fullWidth={true}
                        label="Дата рождения"
                        variant="outlined"
                    />
                </li>
                <li className="form__modal-item">
                    <p className="form__modal-subtitle">Почта</p>
                    <TextField
                        {...register('email')}
                        className="form__modal-name"
                        type="email"
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                    />
                </li>
                <li className="form__modal-item">
                    <p className="form__modal-subtitle">Номер телефона</p>
                    <TextField
                        {...register('numberPhone')}
                        className="form__modal-name"
                        type="phone"
                        fullWidth={true}
                        label="+90..."
                        variant="outlined"
                    />
                </li>
            </ul>
            <p className="form__modal-title form__modal-lastitle">Куда вам написать?</p>
            <FormControl>
                <RadioGroup
                    onChange={(e) => setValue("messenger", e.target.value)}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="whatsapp"
                    name="radio-buttons-group"
                >
                    <div>
                        <FormControlLabel value="whatsapp" control={<Radio />} label="Whatsapp" />
                        <FormControlLabel value="telegram" control={<Radio />} label="Telegram" />
                    </div>
                </RadioGroup>
                <textarea {...register('comment')} className="form__modal-textarea" placeholder="Комментарий"></textarea>
            </FormControl>
        </>
    );
}

export default ModalForm;