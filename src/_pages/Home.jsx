import React from "react";
import { Garanty } from "../_components";
import { MainScreen, Documents, EdPrograms, Examples, News } from "../_containers";

const Home = () => {
    return (
        <>
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
