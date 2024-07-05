import React from "react";
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { ITypeUserData } from "../../../../entities/viewer/model/userSlice";
import { NavLink } from "react-router-dom";
import "./profileHome.scss";

const ProfileHome: React.FC<ITypeUserData> = (props): React.JSX.Element => {
    const { user, isLogged} = props;

    return (
        <section className="profile-home">
            <h1 className="profile-home__title">Мой профиль</h1>
            <div className="profile-home__info">
                <div className="profile-home__block">
                    <Link to="/profile/orders" className="profile-home__card">
                        <div className="profile-home__text">
                            <p className="profile-home__text-title">Заказы</p>
                            <span className="profile-home__text-count">{isLogged && user.data.applications.length}</span>
                        </div>
                        <TakeoutDiningIcon sx={{ width: 50, height: 50 }}/>
                    </Link>
                    <Link to="/profile/favorites" className="profile-home__card">
                        <div className="profile-home__text">
                            <p className="profile-home__text-title">Избранное</p>
                            <span className="profile-home__text-count">{isLogged && user.data.favorites.length}</span>
                        </div>
                        <FavoriteIcon sx={{ width: 50, height: 50 }}/>
                    </Link>
                </div>
            </div>
            <div className="profile-home__user">
                <p className="profile-home__user-name">{user.data.name}</p>
                <p className="profile-home__user-phone">Телефо: {user.data.numberPhone}</p>
                <p className="profile-home__user-email">Email: {user.data.email}</p>
                <NavLink to="/profile/info" className="profile-home__user-button">Изменять данные</NavLink>
            </div>
        </section>
    );
}
 
export default ProfileHome;