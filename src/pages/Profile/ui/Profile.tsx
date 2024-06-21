import React from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../../app/appStore";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ProfileHome, ProfileInfo } from "../../../widgets/profileTabs";
import "./profile.scss";

const Profile: React.FC = (): React.JSX.Element => {
    const { user, isLogged } = useAppSelector((state) => state.auth);

    return (
        <>
            <Header />
            <main className="profile">
                <div className="container">
                    <div className="profile__inner">
                        <div className="profile__box">
                            <div className="profile__data">
                                <Avatar alt={user.data.name} src={user.data.imgUrl || user.data.name} sx={{ width: 56, height: 56 }} />
                                <p>{user.data.name}</p>
                            </div>

                            <ul className="profile__list">
                                <li className="profile__list_item">
                                    <p className="profile__list_title">Профиль</p>
                                </li>
                                <li className="profile__list_item">
                                    <NavLink to="/profile/user" className="profile__list_link">
                                        <PermIdentityIcon sx={{ width: 27, height: 27 }}/>
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="profile__list_item">
                                    <NavLink to="/profile/orders" className="profile__list_link">
                                        <ReceiptLongIcon sx={{ width: 27, height: 27 }}/>
                                        Мои заказы
                                    </NavLink>
                                </li>
                                <li className="profile__list_item">
                                    <NavLink to="/profile/favorites" className="profile__list_link">
                                        <FavoriteBorderIcon sx={{ width: 27, height: 27 }}/>
                                        Избранное
                                    </NavLink>
                                </li>
                                <li className="profile__list_item">
                                    <p className="profile__list_title">Настройки</p>
                                </li>
                                <li className="profile__list_item">
                                    <NavLink to="/profile/info" className="profile__list_link">
                                        <ContactEmergencyIcon sx={{ width: 27, height: 27 }}/>
                                        Личная информация
                                    </NavLink>
                                    <NavLink to="/profile/exid" className="profile__list_link">
                                        <ExitToAppIcon sx={{ width: 27, height: 27 }}/>
                                        Выйти
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="profile__route">
                            <Routes>
                                <Route path="/user" element={<ProfileHome user={user} isLogged={isLogged}/>} />
                                <Route path="/orders" element="Мои заказы" />
                                <Route path="/info" element={<ProfileInfo user={user} isLogged={isLogged}/>} />
                            </Routes>   
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Profile;