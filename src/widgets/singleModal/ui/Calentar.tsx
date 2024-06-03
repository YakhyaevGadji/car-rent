import { FC } from 'react'
import { DateRange } from "react-date-range";
import { IPropsCalendar } from '../model/typesSingleModal';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const Calendar: FC<IPropsCalendar> = (props: IPropsCalendar): JSX.Element => {
    const {
        editableDateInputs = false,
        locale,
        onChange,
        ranges,
        scroll = false,
        showDateDisplay = false,
        showMonthAndYearPickers = true,
        showPreview = false
    } = props
    return (
        <DateRange
            {...props}
            locale={locale}
            ranges={ranges}
            onChange={onChange}
            editableDateInputs={editableDateInputs}
            scroll={{ enabled: scroll }}
            showDateDisplay={showDateDisplay}
            showMonthAndYearPickers={showMonthAndYearPickers}
            showPreview={showPreview}
        />
    )
}

export default Calendar