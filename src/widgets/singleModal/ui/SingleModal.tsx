import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Tab } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { EnumStatus } from "../../../entities/carblock/model/types";
import "./singleModal.scss";
import { setShowWindow } from "../../../entities/carblock/model/getCar";

const SingleModal: React.FC = (): React.JSX.Element => {
    const { item, status } = useAppSelector((state) => state.getCar);
    const [value, setValue] = React.useState('1');
    const dispatch = useAppDispatch();

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="modal">
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
                            <TabPanel value="1">
                                <h1 className="modal__title">{item.fullTitle}</h1>
                                <h2 className="modal__subtitle">Характеристики</h2>
                                <ul className="modal__characteristics">
                                    <li></li>
                                </ul>
                            </TabPanel>
                        </TabContext>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SingleModal;