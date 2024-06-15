import React from "react";
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import "./profileHome.scss";

const ProfileHome: React.FC = (): React.JSX.Element => {
    return (
        <section className="profile-home">
            <h1 className="profile-home__title">Мой профиль</h1>
            <div className="profile-home__info">
                <div className="profile-home__block">
                    <Link to="/profile/orders" className="profile-home__card">
                        <div className="profile-home__text">
                            <p className="profile-home__text-title">Заказы</p>
                            <span className="profile-home__text-count">0</span>
                        </div>
                        <TakeoutDiningIcon sx={{ width: 50, height: 50 }}/>
                    </Link>
                    <Link to="/profile/favorites" className="profile-home__card">
                        <div className="profile-home__text">
                            <p className="profile-home__text-title">Избранное</p>
                            <span className="profile-home__text-count">0</span>
                        </div>
                        <FavoriteIcon sx={{ width: 50, height: 50 }}/>
                    </Link>
                </div>
            </div>
        </section>
    );
}
 
export default ProfileHome;