import React from "react";
import { images } from "../../constants";
import { Garanty } from "../../_components";
import Form from "./Form";

const Content = () => {
    return (
        <>
            <div className="product-page">
                <div className="product-page__container">
                    <section className="product-page__banner banner-product">
                        <div className="banner-product__content">
                            <div className="banner-product__pricing pricing-banner">
                                <div className="pricing-banner__item">
                                    <div className="pricing-banner__label">Стоимость аттестации</div>
                                    <div className="pricing-banner__price">3000 ₽</div>
                                </div>
                                <div className="pricing-banner__item">
                                    <div className="pricing-banner__label">
                                        Оформление <span>1 день</span>
                                    </div>
                                </div>
                                <div className="pricing-banner__item">
                                    <div className="pricing-banner__label">Срок действия</div>
                                    <div className="pricing-banner__label">
                                        I, II, III, IV группы <span>1 год</span>
                                    </div>
                                    <div className="pricing-banner__label">
                                        V группа 1 или <span>3 года</span>
                                    </div>
                                </div>
                                <a href="" className="pricing-banner__button button button_secondary">
                                    Заказать
                                </a>
                            </div>
                            <div className="banner-product__headers">
                                <h1 className="banner-product__title title title_big">Аттестация по электробезопасности</h1>
                                <p className="banner-product__subtitle">
                                    На все группы допуска до и свыше 1000В с отметкой ГосТехНадзора. Вместе с удостоверением Вы
                                    получаете протокол экзаменационной комиссии РосТехНадзора.
                                </p>
                            </div>
                            <div className="banner-product__image">
                                <img src={images.docsImages.docs05} alt="Аттестация по электробезопасности" />
                            </div>
                        </div>
                        <div className="banner-product__bg-ibg">
                            <img src={images.defaultImages.bg_secondary} alt="Задний фон" />
                        </div>
                    </section>

                    <section className="product-page__info info-product">
                        <div>
                            Обучение по электробезопасности персонала - обязательное условие для предприятий, чьи сотрудники
                            работают с электричеством и электрическим оборудованием.
                        </div>
                        <div>
                            <h2>Кому необходимо проходить обучение?</h2>
                            <p>
                                Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и вэб-дизайне. Lorem Ipsum
                                является стандартной &quot;рыбой&quot; для текстов на латинице с начала XVI века. В то время некий
                                безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                                распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
                                перешагнул в электронный дизайн.
                            </p>
                        </div>
                        <div>
                            <h3>Таким образом, повышение квалификации обязаны проходить:</h3>
                            <ul>
                                <li>Сотрудники, впервые поступающим на работу, связанную с обслуживанием электрооборудования;</li>
                                <li>Работники, не проходившие проверки знаний 3 года и более;</li>
                                <li>Сотрудники, претендующие на повышение группы допуска;</li>
                                <li>
                                    Неэлектротехнический персонал, деятельность которого прямо или косвенно связана с
                                    обслуживанием установок.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <Garanty title="Какие гарантии вы получаете?" />
                <Form />
            </div>
        </>
    );
};

export default Content;
