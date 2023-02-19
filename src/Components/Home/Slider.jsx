import React from 'react';
import {SwiperSlide, Swiper} from "swiper/react";
import SliderContent from "./SliderContent";
import './slider.css'

const Slider = () => {
    return (

        <div className='storyReel mt-2'>
            <Swiper
                spaceBetween={0}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },

                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    1300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }


                }}
                slidesPerView={1}
            >
                <div className="row">
                    <SwiperSlide>
                        <div className="col-12">
                            <SliderContent
                                img='https://www.clickview.co.uk/wp-content/uploads/sites/3/AU-blog-teaching-strategies-_Help-with-Online-Learning.jpg'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <SliderContent
                                img='https://er.educause.edu/-/media/images/blogs/2020/8/er20_3206_706x394_blog.jpg'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <SliderContent
                                img='https://wallpaperaccess.com/full/138728.jpg'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-12">
                            <SliderContent
                                img='https://wallpaperaccess.com/full/138728.jpg'
                            />
                        </div>
                    </SwiperSlide>

                </div>
            </Swiper>


        </div>
    );
};

export default Slider;