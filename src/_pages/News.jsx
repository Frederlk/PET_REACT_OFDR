import React, { useEffect, useState } from "react";
import { data } from "../constants";
import { Breadcrumbs, NewsItem } from "../_components";
import ReactPaginate from "react-paginate";
import Helmet from "react-helmet";

function PaginatedItems({ itemsPerPage }) {
    const [newsData, setNewsData] = useState(data.newsItems.slice());
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setNewsData(newsData.sort((a, b) => b.date - a.date));
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(newsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(newsData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % newsData.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="news-page__block">
                {currentItems && currentItems.map((item) => <NewsItem key={item.id} className="news-page__item" data={item} />)}
            </div>
            <ReactPaginate
                className="news-page__paggination pagging"
                pageLinkClassName="pagging__item"
                breakClassName="pagging__item"
                activeLinkClassName="_active"
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={3}
                pageCount={pageCount}
                previousLabel={null}
                nextLabel={null}
            />
        </>
    );
}

const News = () => (
    <>
        <Helmet>
            <meta name="News" content="News Page" />
            <title>Новости</title>
        </Helmet>

        <Breadcrumbs />
        <section className="news-page">
            <div className="news-page__container">
                <h1 className="news-page__title title">Новости</h1>
                <PaginatedItems itemsPerPage={8} />
            </div>
        </section>
    </>
);

export default News;
