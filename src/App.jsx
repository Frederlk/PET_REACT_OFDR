import { Header, Footer } from "./_containers";
import * as flsFunctions from "./js/files/functions";
import * as flsScroll from "./js/files/scroll/scroll.js";
import { lazy, Suspense, useEffect } from "react";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { Spinner, _PopupCall } from "./_components";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/Home")),
    Attestation = lazy(() => import("./_pages/Attestation")),
    News = lazy(() => import("./_pages/News")),
    Contacts = lazy(() => import("./_pages/Contacts"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        flsFunctions.menuClose();
    }, [pathname]);
    return null;
};

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsFunctions.spollers();
        flsScroll.pageNavigation();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <main className="page">
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="attestations/electric" element={<Attestation />} />
                            <Route path="news" element={<News />} />
                            <Route path="contacts" element={<Contacts />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />

                <_PopupCall />
            </Router>
        </>
    );
};

export default App;
