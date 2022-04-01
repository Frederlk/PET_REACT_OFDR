import { Header, Footer } from "./_containers";
import * as flsFunctions from "./js/files/functions";
import { useEffect, useState } from "react";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { _PopupCall } from "./_components";
import { Home } from "./_pages";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsFunctions.spollers();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <main className="page">
                <Home />
            </main>
            <Footer />
            <_PopupCall />
        </>
    );
};

export default App;
