import React from "react";

const Form = () => {
    return (
        <section className="product-page__form form-product">
            <div className="form-product__container">
                <h3 className="form-product__title">Удостоверение по безопасности</h3>
                <form action="#" className="form-product__form">
                    <div className="form-product__top">
                        <div className="form-product__item">
                            <div className="form-product__label">Ф.И.О. полностью</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item">
                            <div className="form-product__label">Название должности/профессии</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item">
                            <div className="form-product__label">Если Вы работаете укажите место работы</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item">
                            <div className="form-product__label">Группа электробезопасности (2,3,4,5)</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item">
                            <div className="form-product__label">Причина проверки (первичная или очередная)</div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item">
                            <div className="form-product__label">
                                Укажите дату выдачи удостоверения, которую прописать в удостоверении
                            </div>
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                    </div>
                    <div className="form-product__line"></div>
                    <div className="form-product__bottom">
                        <div className="form-product__item form-product__item_short-1">
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                placeholder="+7 (__) __ - __ - __"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item form-product__item_short-2">
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                placeholder="Email"
                                data-error="Ошибка"
                                className="form-product__input input"
                            />
                        </div>
                        <div className="form-product__item form-product__item_long">
                            <textarea
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                placeholder="Адрес доставки готовых документов (город, адрес, номер телефона, ФИО)"
                                data-error="Ошибка"
                                className="form-product__input input"></textarea>
                        </div>
                        <button type="submit" className="form-product__button button">
                            Отправить заявку
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;
