import React from "react";

const NewsItem = ({ data, className }) => {
    const { link, date, image, title, text } = data;

    return (
        <article className={`${className} news-item`}>
            <a href={link} className="news-item__image">
                <img src={image} alt={title} />
            </a>
            <div className="news-item__body">
                <div className="news-item__date">{date}</div>
                <a href={link} className="news-item__title">
                    {title}
                </a>
                <p className="news-item__text">{text.substring(0, 64) + "..."}</p>
            </div>
        </article>
    );
};

export default NewsItem;
