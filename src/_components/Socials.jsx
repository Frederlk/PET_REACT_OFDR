import React from "react";

const Socials = ({ className, dataDa }) => {
    return (
        <div data-da={dataDa} className={`${className} socials`}>
            <a
                href="https://www.whatsapp.com/?lang=ru"
                target="_blank"
                rel="noreferrer"
                className="socials__item _icon-whatsapp">
                <span className="visually-hidden">Ссылка на whatsapp</span>
            </a>
            <a
                href="https://www.viber.com/ru/"
                target="_blank"
                rel="noreferrer"
                className="socials__item _icon-viber">
                <span className="visually-hidden">Ссылка на viber</span>
            </a>
            <a
                href="https://web.telegram.org/z/"
                target="_blank"
                rel="noreferrer"
                className="socials__item _icon-telegram">
                <span className="visually-hidden">Ссылка на telegram</span>
            </a>
        </div>
    );
};

export default Socials;
