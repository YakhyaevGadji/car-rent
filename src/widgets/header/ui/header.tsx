import React from "react";
import ProfileHeader from "./profleHeader/ProfileHeader";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../app/appStore";
import "./header.scss";

export const Header: React.FC = () => {
    const { isLogged, user } = useAppSelector((state) => state.auth);

    console.log(user)

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <NavLink className="header__logo" to="/">RI</NavLink>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/">Home</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/Cars">Cars</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink className="header__list-link" to="/About">About</NavLink>
                        </li>
                    </ul>
                    {isLogged ? <ProfileHeader/> : <NavLink className="header__sign" to="/login">Sign / In</NavLink>}
                </nav>
            </div>
        </header>
    );
}

export default Header;