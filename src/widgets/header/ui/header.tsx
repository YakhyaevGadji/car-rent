import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";


export const Header: React.FC = () => {
   

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