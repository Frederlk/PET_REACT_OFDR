import React from "react";

const _PopupSended = () => {
    return (
        <div id="popup_sended" aria-hidden="true" className="popup">
            <div className="popup__wrapper">
                <div className="popup__content">
                    <button data-close type="button" className="popup__close">
                        <span></span>
                    </button>
                    <div className="popup__text">Ваша заявка успешно отправлена!</div>
                </div>
            </div>
        </div>
    );
};

export default _PopupSended;
