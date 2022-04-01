import React from "react";
import { data } from "../constants";
const Garanty = ({ title }) => {
    const garantyItems = data.garantyItems.map(({ id, icon, title, text }, i) => (
        <div key={id} className="garanty__item item-garanty">
            <div className="item-garanty__icon">
                <img src={icon} alt={title} />
            </div>
            <h4 className="item-garanty__title">{title}</h4>
            <div className="item-garanty__text">{text}</div>
        </div>
    ));

    return (
        <section className="garanty">
            <div className="garanty__container">
                {title ? <h2 className="garanty__title title">{title}</h2> : null}
                <div className="garanty__block">{garantyItems}</div>
            </div>
        </section>
    );
};

export default Garanty;
