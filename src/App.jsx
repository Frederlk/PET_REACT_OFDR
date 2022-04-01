import { Header, Footer } from "./_containers";
import * as flsFunctions from "./js/files/functions";
import { useEffect, useState } from "react";
import dynamicAdaptive from "./js/libs/dynamic_adapt";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsFunctions.spollers();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <main className="page"></main>
            <Footer />
        </>
    );
};

export default App;
