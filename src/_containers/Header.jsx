import React from "react";
import { Socials } from "../_components";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top top-header">
                    <div className="top-header__logo logo">
                        <a href="#" className="logo__main">
                            OFDR
                        </a>
                        <div className="logo__text">центр профессиональной дистанционной переподготовки кадров</div>
                    </div>

                    <Socials className="top-header__socials" dataDa=".menu__body,900,last" />

                    <div className="top-header__contacts contacts">
                        <div data-da=".menu__body,767.98,last" className="contacts__info">
                            <a href="tel:88000000000" className="contacts__phone _icon-phone">
                                8 800 000-00-00
                            </a>
                            <a href="mailto:email@email.com" className="contacts__mail _icon-mailsymbol">
                                email@email.com
                            </a>
                        </div>
                        <a href="#popup_call" className="contacts__btn button">
                            <span>Заказать звонок</span>
                        </a>
                    </div>

                    <button type="button" className="top-header__icon icon-menu">
                        <span></span>
                    </button>
                </div>
                <div className="header__bottom">
                    <div className="header__menu menu">
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a href="" className="menu__link">
                                        Курсы
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="" className="menu__link">
                                        АТТЕСТАЦИЯ
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="" className="menu__link">
                                        ОХРАНА ТРУДА
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="" className="menu__link">
                                        ПОЖАРНАЯ БЕЗОПАСНОСТЬ
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="" className="menu__link">
                                        СВИДЕТЕЛЬСТВО ДОПОГ
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="" className="menu__link">
                                        ПРАВА НА СПЕЦТЕХНИКУ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
