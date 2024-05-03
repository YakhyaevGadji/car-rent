import React from "react";
import { icons } from "../../../shared/assets";
import "./advantage.scss";

const Advantage: React.FC = () => {
    return (
        <section className="advantage">
            <div className="container">
                <h2 className="advantage__title">Преимущество</h2>
                <ul className="advantage__list">
                    <li className="advantage__item">
                        <img className="advantage__img" src={icons.agreementIcon} alt="Договор" />
                        <h3 className="advantage__subtitle">Без мелкого шрифта</h3>
                        <p className="advantage__paragraph">Все условия и все цены мы держим на виду. Никаких скрытых платежей, сборов, налогов. Вы сразу видите конечную цену, которая не изменится, пока вы оформляете заказ.</p>
                    </li>
                    <li className="advantage__item">
                        <img className="advantage__img" src={icons.depoIcon} alt="Цена" />
                        <h3 className="advantage__subtitle">Низкие депозиты</h3>
                        <p className="advantage__paragraph">В международных прокатах депозиты достигают нескольких тысяч евро, которые блокируются на карте клиента. У нас депозиты, в среднем, 300 евро, а есть машины и без депозита.</p>
                    </li>
                    <li className="advantage__item">
                        <img className="advantage__img" src={icons.likeIcon} alt="Оценка" />
                        <h3 className="advantage__subtitle">Честная оценка повреждений</h3>
                        <p className="advantage__paragraph">Мы оцениваем повреждения в присутствии клиента. Наши цены в 2-3 раза ниже, чем у международных прокатов. И мы никогда не списываем деньги с карты клиента после сдачи автомобиля.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
 
export default Advantage;