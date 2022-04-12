import React from "react";

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__container">
                <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                        <a href="#" className="breadcrumbs__link">
                            Главная
                        </a>
                    </li>
                    <li className="breadcrumbs__item">
                        <a href="#" className="breadcrumbs__link">
                            Аттестация
                        </a>
                    </li>
                    <li className="breadcrumbs__item">
                        <span className="breadcrumbs__link">Аттестация по электробезопасности</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
