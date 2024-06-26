import React from "react";
import { ITypePropsProfileOrders } from "../model/typeProfileOrders";
import "./profileOrders.scss";

const ProfileOrders: React.FC<ITypePropsProfileOrders> = (props): React.JSX.Element => {
    const { user, isLogged } = props;

    const statusObject = {
        processing: 'В процессе',
        canceled: 'Отменен',
        completed: 'Выполнен'
    };

    return (
        <section className="profile-orders">
            <p className="profile-orders__title">Мои заказы</p>
            <ul className="profile-orders__list">
                {isLogged && user.data.applications.map((item, index) => {
                    return (
                        <li key={index} className="profile-orders__item">
                            <p className="profile-orders__status">{statusObject[item.status]}  <span>Дата заявки: {item.dataCreation}</span></p>
                            <p>Дата арены: {item.rentalReriod.split(" - ")[0]}</p>
                            <p>Дата конца аренды: {item.rentalReriod.split(" - ")[1]}</p>
                            <p>Аренда на: {Number(item.rentalReriod.split(" - ")[2])} дней</p>
                            <p>Доставка: {item.receipt?.value === 'ofice' ? `${item.receipt.label}` : 'по городу 100$'}</p>
                            {item.receipt?.value === 'delivery' ? <p>Адрес: {item.address}</p> : ''}
                            <p>Общая цена: {item.price + item.receipt?.priceDev}</p>
                            <p>Машина</p>
                            <div className="profile-orders__car">
                                <img className="profile-orders__img" src={item.imgCar} alt="" />
                                <div className="profile-orders__info">
                                    <p>{item.titleCar}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
 
export default ProfileOrders;