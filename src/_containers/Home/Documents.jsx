import React from "react";
import { data } from "../../constants";

const Documents = () => {
    const docElements = data.docItems.map(({ id, link, icon, text }) => (
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
                <div className="documents__body">{docElements}</div>
            </div>
        </section>
    );
};

export default Documents;
