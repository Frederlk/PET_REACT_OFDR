import React from "react";
import { format } from "date-fns";

import { data } from "../constants";

const FooterColumn = ({ children, label }) => (
    <div className="footer__column">
        <button type="button" data-spoller className="footer__label">
            {label}
        </button>
        <nav className="footer__body">
            <ul className="footer__list list-footer">{children}</ul>
        </nav>
    </div>
);

const MenuItems = ({ first }) =>
    data.menuItems.map(({ text, link }, i) => {
        const menuItem = (
            <li key={link + i} className="list-footer__item">
                <a href={link} className="list-footer__link">
                    {text}
                </a>
            </li>
        );

        if (first && data.menuItems.length && i < data.menuItems.length / 2) {
            return menuItem;
        } else if (!first && data.menuItems.length && i > data.menuItems.length / 2) {
            return menuItem;
        }
    });

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div data-spollers="767.98" className="footer__top">
                    <FooterColumn label="Страницы с услугами">
                        <MenuItems first />
                    </FooterColumn>
                    <FooterColumn label="Меню сайта">
                        <MenuItems />
                    </FooterColumn>
                    <div className="footer__column">
                        <div className="footer__label">Напишите нам</div>
                        <div className="footer__body">
                            <div className="footer__social-links">
                                <div className="footer__link-wrap">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://web.telegram.org/z/"
                                        className="footer__link _icon-telegram">
                                        OFDR_Telegram
                                    </a>
                                </div>
                                <div className="footer__link-wrap">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.viber.com/ru/"
                                        className="footer__link _icon-viber">
                                        OFDR_Viber
                                    </a>
                                </div>
                                <div className="footer__link-wrap">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.whatsapp.com/?lang=ru"
                                        className="footer__link _icon-whatsapp">
                                        OFDR_WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="footer__info">
                                <div className="footer__info">
                                    <div className="footer__link-wrap">
                                        <a href="tel:88000000000" className="footer__phone _icon-phone">
                                            8 800 000-00-00
                                        </a>
                                    </div>
                                    <div className="footer__link-wrap">
                                        <a href="mailto:email@email.com" className="footer__mail _icon-mailsymbol">
                                            email@email.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="#popup_call" className="footer__btn button">
                                <span>Обратный звонок</span>
                            </a>

                            <a href="#" className="footer__logo">
                                OFDR
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copy">
                <div className="footer__container">Copyright - {format(new Date(), "yyyy")} Все права защищены</div>
            </div>
        </footer>
    );
};

export default Footer;
