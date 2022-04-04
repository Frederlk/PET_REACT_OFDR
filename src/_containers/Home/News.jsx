import React from "react";
import { images, data } from "../../constants";

import { NewsItem } from "../../_components";

const News = () => {
    return (
        <section className="news">
            <div className="news__container">
                <h2 className="news__title title">Новости и акции</h2>
                <div className="news__body">
                    <div className="news__action action-news">
                        <div className="action-news__content">
                            <h3 className="action-news__title">
                                Получи в подарок удостоверение абсолютно <span>бесплатно</span>
                            </h3>
                            <p className="action-news__text">
                                каждое 5-е удостоверение мы выдаем в подарок. Акция рассчитана на единовременное оформление от 5 и
                                более удостоверений
                            </p>
                        </div>
                        <div className="action-news__image">
                            <img src={images.docsImages.docs05} alt="Удостоверение" />
                        </div>
                        <div className="action-news__bg-ibg">
                            <img src={images.defaultImages.bg_action} alt="Задний Фон" />
                        </div>
                    </div>
                    <div className="news__latest latest-news">
                        <NewsItem className="latest-news__item" data={data.newsItems[0]} />
                    </div>
                </div>
                <a href="#" className="news__more button button_outline">
                    ВСЕ НОВОСТИ
                </a>
            </div>
        </section>
    );
};

export default News;
