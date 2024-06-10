import React from "react";
import emptyIcon from "../../assets/icons/empty-car-icon.gif";
import "./emptyCar.scss";

const EmptyCar: React.FC = (): React.JSX.Element => {
    return (
        <div className="empty">
            <img className="empty__icon" src={emptyIcon} alt="" />
            <p className="empty__text">Список машин пуст</p>
        </div>
        
    );
}
 
export default EmptyCar;