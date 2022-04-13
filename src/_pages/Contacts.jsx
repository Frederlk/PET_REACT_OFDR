import React from "react";
import Helmet from "react-helmet";

import images from "../constants/images";
import { Breadcrumbs, Socials } from "../_components";

const Contacts = () => {
    return (
        <>
            <Helmet>
                <meta name="Contacts" content="Contacts Page" />
                <title>Контакты</title>
            </Helmet>

            <Breadcrumbs />
            <section className="page-contacts">
                <div className="page-contacts__container">
                    <div className="page-contacts__content content-contacts">
                        <h1 className="content-contacts__title title">Контакты</h1>
                        <div className="content-contacts__text">Мы работаем по всей России</div>
                        <div className="content-contacts__links">
                            <a href="tel:88000000000" className="contacts__phone _icon-phone">
                                8 800 000-00-00
                            </a>
                            <a href="mailto:email@email.com" className="contacts__mail _icon-mailsymbol">
                                email@email.com
                            </a>
                        </div>
                        <Socials className="content-contacts__socials" />
                        <div className="content-contacts__qr qr-contacts">
                            <div className="qr-contacts__image">
                                <img src={images.defaultImages.qr} alt="QR код" />
                            </div>
                            <div className="qr-contacts__content">
                                <h3 className="qr-contacts__title">Все наши контакты в этом QR коде</h3>
                                <div className="qr-contacts__text">
                                    Считать QR код Вы можете с помощью специального приложения для IOS или Android
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="#" className="page-contacts__form form-contacts">
                        <h2 className="form-contacts__title">Форма обратной связи</h2>
                        <input
                            autoComplete="off"
                            type="text"
                            name="form[]"
                            data-error="Ошибка"
                            placeholder="Как к Вам обращаться?"
                            className="form-contacts__input input"
                        />
                        <textarea
                            autoComplete="off"
                            type="text"
                            name="form[]"
                            data-error="Ошибка"
                            placeholder="Желаемые документы"
                            className="form-contacts__textarea input"></textarea>
                        <input
                            autoComplete="off"
                            type="text"
                            name="form[]"
                            data-error="Ошибка"
                            placeholder="+7 (__) __ - __ - __"
                            className="form-contacts__input input"
                        />
                        <input
                            autoComplete="off"
                            type="text"
                            name="form[]"
                            data-error="Ошибка"
                            placeholder="Email"
                            className="form-contacts__input input"
                        />
                        <button type="submit" className="form-contacts__button button">
                            Отправить заявку
                        </button>
                    </form>
                    <div className="page-contacts__bg">
                        <img src={images.defaultImages.map} alt="Карта России" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;
