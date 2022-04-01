import React from "react";
import { data } from "../../constants";

const Documents = () => {
    const docElemnts = data.docItems.map(({ id, link, icon, text }, i) => (
        <a key={id} href={link} className="documents__item">
            <div className="documents__icon">
                <img src={icon} alt={text} />
            </div>
            <h4 className="documents__text">{text}</h4>
        </a>
    ));

    return (
        <section className="documents">
            <div className="documents__container">
                <h2 className="documents__title title">Какие документы хотите оформить?</h2>
                <div className="documents__body">{docElemnts}</div>
            </div>
        </section>
    );
};

export default Documents;
