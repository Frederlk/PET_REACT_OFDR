import React from "react";
import { images } from "../../constants";

const MainScreen = () => {
    const bg = images.defaultImages.bg_home;
    const person = images.defaultImages.person;

    return (
        <section className="main-screen">
            <div className="main-screen__container">
                <div className="main-screen__body">
                    <h1 className="main-screen__title title">
                        Оформление допусков, удостоверений всех строительных и рабочих специальностей
                    </h1>
                    <div className="main-screen__text">
                        аттестация ИТР <span>от 2 500 руб</span>
                    </div>
                    <a href="#" className="main-screen__button button button_secondary">
                        Заказать
                    </a>
                </div>
                <div className="main-screen__image">
                    <img src={person} alt="Счастливый строитель" />
                </div>
            </div>
            <div className="main-screen__bg-ibg ">
                <img src={bg} alt="Задний фон" />
            </div>
        </section>
    );
};

export default MainScreen;
