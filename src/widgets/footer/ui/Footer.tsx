import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">RI</div>
                <ul className="footer__information">
                    <li className="footer__title">Информация</li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/">Home</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/Cars">Cars</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/About">About</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;