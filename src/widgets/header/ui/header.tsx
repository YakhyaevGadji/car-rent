import React from "react";
import ProfileHeader from "./profleHeader/ProfileHeader";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../app/appStore";
import "./header.scss";

export const Header: React.FC = () => {
    const { user, isLogged } = useAppSelector((state) => state.auth);
    const [ toggleBurger, setToggleBurger] = React.useState(false);
    const sessionName = sessionStorage.getItem('name');

    //Удалет и добавляет в body класс при клике на бургер
    const handleToggle = () => {
        if(window.innerWidth < 1024) {
            setToggleBurger(!toggleBurger);

            let bodyClassName = document.body;

            if(bodyClassName.className !== 'lock') {
                bodyClassName.className = 'lock';
            }else {
                bodyClassName.classList.remove('lock');
            }
        }
    }

    return (
        <>
            <header className="header">
                <div className="container inner">
                    <NavLink className="header__logo" to="/">RI</NavLink>
                    <nav className={`header__nav ${toggleBurger ? `header__nav_active` : ''}`}>
                        <ul className="header__list">
                            <li className="header__list-item">
                                <NavLink onClick={handleToggle} className="header__list-link" to="/">Домой</NavLink>
                            </li>
                            <li className="header__list-item">
                                <NavLink onClick={handleToggle} className="header__list-link" to="/Cars">Машины</NavLink>
                            </li>
                            <li className="header__list-item">
                                <NavLink onClick={handleToggle} className="header__list-link" to="/About">О нас</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <button onClick={handleToggle} className={`header__burger ${toggleBurger ? `header__burger--active` : ''}`}>
                        <span></span>
                    </button>
                    {sessionName || isLogged ? <ProfileHeader sessionName={sessionName} user={user}/> :
                        <NavLink className="header__sign" to="/login">Sign / In</NavLink>}
                </div>
            </header>
            <div onClick={handleToggle} className={`header__back ${toggleBurger ? `header__back_active` : ''}`}></div>
        </>
    );
}

export default Header;