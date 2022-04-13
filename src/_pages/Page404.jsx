import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <>
            <Helmet>
                <meta name="404" content="Error 404" />
                <title>Error 404</title>
            </Helmet>

            <div className="page404">
                <div className="page404__container">
                    <div className="page404__title title">ОШИБКА 404</div>
                    <div className="page404__subtitle">Вы потерялись?</div>
                    <Link to="/" className="page404__button button button_outline">
                        На главную
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Page404;
