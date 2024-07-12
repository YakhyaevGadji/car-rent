import React from "react";
import ProfileHeader from "./profleHeader/ProfileHeader";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../app/appStore";
import "./header.scss";

export const Header: React.FC = () => {
    const { user, isLogged } = useAppSelector((state) => state.auth);
    const [ toggleBurger, setToggleBurger] = React.useState(false);
    const sessionName = sessionStorage.getItem('name');

    return (
        <header className="header">
            <div className="container inner">
                <NavLink className="header__logo" to="/">RI</NavLink>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/">Домой</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/Cars">Машины</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/About">О нас</NavLink>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => setToggleBurger(!toggleBurger)} className={`header__burger ${toggleBurger && `header__burger--active`}`}>
                    <span></span>
                </button>
                {sessionName || isLogged ? <ProfileHeader sessionName={sessionName} user={user}/> : <NavLink className="header__sign" to="/login">Sign / In</NavLink>}
            </div>
        </header>
    );
}

export default Header;