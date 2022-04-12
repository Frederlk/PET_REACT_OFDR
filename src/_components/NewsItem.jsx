import React from "react";

const NewsItem = ({ data, className }) => {
    return (
        <article className={`${className} news-item`}>
            <a href={data?.link} className="news-item__image-ibg">
                <img src={data?.image} alt={data?.title} />
            </a>
            <div className="news-item__body">
                <div className="news-item__date">{data?.date}</div>
                <a href={data?.link} className="news-item__title">
                    {data?.title}
                </a>
                <p className="news-item__text">{data?.text.substring(0, 64) + "..."}</p>
            </div>
        </article>
    );
};

export default NewsItem;
