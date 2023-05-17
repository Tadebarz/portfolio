import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';


const Works = () => {
    return (
        <>
            <div className="container" id="works">
                <div className="row">
                    <div className="col-12 header">
                        <h1 className="mb-3 mt-5 titulos-secciones">Mis proyectos :)</h1>
                        <br></br>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={1.3}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper_container works"
                        >
                            <SwiperSlide>
                                <h4>1</h4>
                                <img src="./image/noimage.jpg"  style={{ height: '100%', width:'100%'  }} alt="slide_image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <h4>2</h4>
                                <img src="./image/noimage.jpg" style={{ height: '100%', width:'100%' }} alt="slide_image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <h4>3</h4>
                                <img src="./image/noimage.jpg" style={{ height: '100%', width:'100%' }} alt="slide_image" />

                            </SwiperSlide>
                            <SwiperSlide>
                                <h4>Titulo4</h4>
                                <img src="./image/noimage.jpg" style={{ height: '100%', width:'100%' }} alt="slide_image" />
                            </SwiperSlide>


                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow">
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Works;