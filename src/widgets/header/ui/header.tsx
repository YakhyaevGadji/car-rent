import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link className="header__logo" to="/">RI</Link>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link className="header__list-link" to="/">Home</Link>
                        </li>
                        <li className="header__list-item">
                            <Link className="header__list-link" to="/">Cars</Link>
                        </li>
                        <li className="header__list-item">
                            <Link className="header__list-link" to="/">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


