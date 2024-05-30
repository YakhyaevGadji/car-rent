import React from "react";
import "./singleModal.scss";

const SingleModal: React.FC = (): React.JSX.Element => {
    return (
        <div className="modal">
            <div className="container">
                <div className="modal__info">
                    <div className="modal__buttons">
                        <button className="modal"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleModal;