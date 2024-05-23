import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../../app/appStore";
import { setPopupAuth } from "../../../entities/viewer/model/userSlice";
import "./header.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    const dispath = useAppDispatch();

    const onCliclSignIn = () => {
        dispath(setPopupAuth('open'));
    }

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
                    <NavLink className="header__sign" to="/login">Sign / In</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;