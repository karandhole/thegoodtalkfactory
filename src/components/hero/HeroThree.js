import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";

export default class HeroThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider main-slider-three">
                    <Swiper 
                        loop={true}
                        slidesPerView={1}
                        effect="fade"
                        autoplay={{delay:   5000}}
                        modules={[EffectFade, Pagination, Navigation]}
                        pagination={{
                            el: "#main-slider-pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#main-slider__swiper-button-next",
                            prevEl: "#main-slider__swiper-button-prev"
                        }}
                        className="swiper-container thm-swiper__slider">

                        <div className="swiper-wrapper">

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/bg.jpg)'}}></div>
                                <div className="main-slider__three-map">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-three-map.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                                <h2>"Live Your Story By Building Conversations And Transforming Lives"</h2>
                                               
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/hero.jpg)'}}></div>
                                <div className="main-slider__three-map">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-three-map.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                                <h2> "Everyone Has a Story And Every Story Is Worth Experiencing"<br/><br/>  </h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/bg5.jpg)'}}></div>
                                <div className="main-slider__three-map">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-three-map.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                            <h2>"We Are HERE to HEAR You" <br/><br/></h2>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                        </div>

                        <div className="swiper-pagination" id="main-slider-pagination"></div>
                        <div className="main-slider__nav-three">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                                <i className="fa fa-long-arrow-alt-left"></i>
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </div>
                        </div>

                    </Swiper>
                </section>
            </>
        )
    }
}