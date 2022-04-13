import React from "react";
import Helmet from "react-helmet";
import { Garanty } from "../_components";
import { MainScreen, Documents, EdPrograms, Examples, News } from "../_containers";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta name="Home" content="Home Page" />
                <title>Главная</title>
            </Helmet>

            <MainScreen />
            <Documents />
            <Garanty />
            <EdPrograms />
            <Examples />
            <News />
        </>
    );
};

export default Home;
