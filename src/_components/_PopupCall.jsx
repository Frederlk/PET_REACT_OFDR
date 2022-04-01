import React from "react";

const _PopupCall = () => {
    return (
        <div id="popup_call" aria-hidden="true" className="popup">
            <div className="popup__wrapper">
                <div className="popup__content">
                    <button data-close type="button" className="popup__close">
                        <span></span>
                    </button>
                    <div className="popup__text">Оставте ваши данные и вскоре мы с вами свяжемся!</div>
                    <form action="#" className="popup__form form-popup">
                        <div className="form-popup__row">
                            <div className="form-popup__label">Ф.И.О. полностью</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="popup_call_name"
                                data-error="Ошибка"
                                placeholder="Введите ваше имя"
                                className="form-popup__input input"
                            />
                        </div>
                        <div className="form-popup__row">
                            <div className="form-popup__label">Номер телефона</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="popup_call_phone"
                                data-error="Ошибка"
                                placeholder="Введите ваш номер телефона"
                                className="form-popup__input input"
                            />
                        </div>
                        <button type="submit" className="form-popup__button button">
                            Оставить заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default _PopupCall;
