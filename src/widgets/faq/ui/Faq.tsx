import React from "react";
import questionsData from "../model/questionsData";
import "./faq.scss";

const Faq: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState<string>('');

    const questionsSearch = questionsData.filter((item) => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    return (
        <section className="faq">
            <div className="container">
                <h2 className="faq">F.A.Q</h2>
                <input onChange={(event) => setSearchValue(event.target.value)} className="faq__search" value={searchValue} type="text" placeholder="Нужно ли фофрмлять международные права?" />
                <ul className="faq__list">
                    {questionsSearch.map((item, index) => {
                        return (
                            <li key={index} className="faq__item">
                                <p className="faq__text">{item.title}</p>
                                <img className="faq__icon" src={item.icon} alt="Стрелка" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Faq;