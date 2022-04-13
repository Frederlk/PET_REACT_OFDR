import React, { useEffect, useState } from "react";
import { Socials } from "../_components";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
    const [otherHeader, setOtherHeader] = useState(null);
    const { pathname } = useLocation();
    useEffect(() => {
        pathname !== "/" ? setOtherHeader("header_other") : setOtherHeader(null);
    }, [pathname]);

    return (
        <header className={`header ${otherHeader}`}>
            <div className="header__container">
                <div className="header__top top-header">
                    <div className="top-header__logo logo">
                        <Link to="/" className="logo__main">
                            OFDR
                        </Link>
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
                        <a href="#popup_call" data-popup="#popup_call" className="contacts__btn button">
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
                                    <NavLink to="/attestations/electric" className="menu__link">
                                        АТТЕСТАЦИЯ
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/news" className="menu__link">
                                        НОВОСТИ
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/courses" className="menu__link">
                                        Курсы
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/fire" className="menu__link">
                                        ПОЖАРНАЯ БЕЗОПАСНОСТЬ
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/dopog" className="menu__link">
                                        СВИДЕТЕЛЬСТВО ДОПОГ
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/contacts" className="menu__link">
                                        КОНТАКТЫ
                                    </NavLink>
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
