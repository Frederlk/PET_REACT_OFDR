import React from "react";
import { Keyboard, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../constants";

const Examples = () => {
    const slides = data.exampleSlider.map(({ image, alt }, i) => (
        <SwiperSlide className="examples__slide" key={alt + i}>
            <img src={image} alt={alt} />
        </SwiperSlide>
    ));
    return (
        <>
            <section className="examples">
                <div className="examples__container">
                    <h2 className="examples__title title">Примеры допусков и сертификатов</h2>
                    <div className="examples__slider">
                        <Swiper
                            className="examples__swiper"
                            modules={[Navigation, Keyboard, Autoplay]}
                            autoplay
                            loop
                            speed={800}
                            navigation={{
                                prevEl: ".examples__nav-item_prev",
                                nextEl: ".examples__nav-item_next",
                            }}
                            observer={true}
                            observeParents={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15,
                                },
                                479.98: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                650: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                991.98: {
                                    slidesPerView: 4,
                                    spaceBetween: 35,
                                },
                            }}>
                            {slides}
                        </Swiper>
                        <div className="examples__navigation">
                            <button type="button" className="examples__nav-item examples__nav-item_prev _icon-arrow"></button>
                            <button type="button" className="examples__nav-item examples__nav-item_next _icon-arrow"></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Examples;
