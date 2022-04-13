import React from "react";
import Helmet from "react-helmet";
import { Breadcrumbs } from "../_components";
import { Content } from "../_containers";

const Attestation = () => {
    return (
        <>
            <Helmet>
                <meta name="Attestation" content="Attestation Page" />
                <title>Аттестация</title>
            </Helmet>

            <Breadcrumbs />
            <Content />
        </>
    );
};

export default Attestation;
