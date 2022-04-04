import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper";
import { data } from "../../constants";

const EdPrograms = () => {
    const slides = data.educationItems.map(({ id, link, access, image, title, price }, i) => (
        <SwiperSlide className="slider-educational__slide" key={id}>
            <a href={link} className="slider-educational__image-ibg">
                <img src={image} alt={title} />
            </a>
            <div className="slider-educational__body">
                <a href={link} className="slider-educational__link">
                    {title}
                </a>
                {access ? <div className="slider-educational__access _icon-round-done">Группа Открыта</div> : null}
                <div className="slider-educational__price">От {price} руб.</div>
            </div>
        </SwiperSlide>
    ));

    return (
        <section className="educational">
            <div className="educational__container">
                <h2 className="educational__title title">Образовательные программы</h2>
                <div className="educational__slider slider-educational">
                    <Swiper
                        className="slider-educational__swiper"
                        modules={[Pagination, Keyboard]}
                        pagination={{
                            el: ".slider-educational__pagination",
                            clickable: true,
                        }}
                        observer={true}
                        observeParents={true}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            570: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            860: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1170: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}>
                        {slides}
                    </Swiper>
                    <div className="slider-educational__pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default EdPrograms;
