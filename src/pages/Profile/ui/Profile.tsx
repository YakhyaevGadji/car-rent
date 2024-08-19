import { FC, lazy, Suspense, useEffect } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import exitProfile from "../../../shared/hooks/profileExit.ts";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { EnumStatus } from "../../../entities/carblock/model/types";
import { fetchCars } from "../../../entities/carblock/model/carsSlice";
import "./profile.scss";


const ProfileHome = lazy(() => import('../../../widgets/profileTabs/profileHome/ui/ProfileHome'));
const ProfileOrders = lazy(() => import('../../../widgets/profileTabs/profileOrders/ui/ProfileOrders'));
const ProfileFavs = lazy(() => import('../../../widgets/profileTabs/profileFavs/ui/ProfileFavs'));
const ProfileInfo = lazy(() => import('../../../widgets/profileTabs/profileInfo/ui/ProfileInfo'));

const Profile: FC = () => {
    const { user, isLogged } = useAppSelector((state) => state.auth);
    const { items, status } = useAppSelector((state) => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    const checkStatus = !!(isLogged && status === EnumStatus.SUCCESS);

    return (
        <div className="profile">
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
                                    <PermIdentityIcon sx={{ width: 27, height: 27 }} />
                                    Главная
                                </NavLink>
                            </li>
                            <li className="profile__list_item">
                                <NavLink to="/profile/orders" className="profile__list_link">
                                    <ReceiptLongIcon sx={{ width: 27, height: 27 }} />
                                    Мои заказы
                                </NavLink>
                            </li>
                            <li className="profile__list_item">
                                <NavLink to="/profile/favorites" className="profile__list_link">
                                    <FavoriteBorderIcon sx={{ width: 27, height: 27 }} />
                                    Избранное
                                </NavLink>
                            </li>
                            <li className="profile__list_item">
                                <p className="profile__list_title">Настройки</p>
                            </li>
                            <li className="profile__list_item">
                                <NavLink to="/profile/info" className="profile__list_link">
                                    <ContactEmergencyIcon sx={{ width: 27, height: 27 }} />
                                    Личная информация
                                </NavLink>
                                <button onClick={exitProfile} className="profile__list_link">
                                    <ExitToAppIcon sx={{ width: 27, height: 27 }} />
                                    Выйти
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="profile__route">
                        <Routes>
                            <Route path="/user" element={<Suspense fallback="Loading...">
                                <ProfileHome user={user} isLogged={isLogged} />
                            </Suspense>} />
                            <Route path="/orders" element={<Suspense fallback="Loading...">
                                <ProfileOrders user={user} isLogged={isLogged} />
                            </Suspense>} />
                            <Route path="/favorites" element={<Suspense fallback="Loading...">
                                {checkStatus && <ProfileFavs user={user} items={items} />}
                            </Suspense>} />
                            <Route path="/info" element={<Suspense fallback="Loading...">
                                    {isLogged && <ProfileInfo userOld={user} />}
                                </Suspense>
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;