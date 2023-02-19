import React, {useEffect, useState} from 'react';
import './Footer.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import axios from "axios";
import Loader from "../Loader/Loader";

const FooterSlider = () => {
    const [activeThumb, setActiveThumb] = useState()
    const [slider, setSlider] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Slider`).then(resp => setSlider(resp.data))
    }, [])

    return (

        <div className='storyReel'>
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: activeThumb }}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    }
                }}
                slidesPerView={5}
            >
                <div className="row">

                    {
                        slider.length > 0 ? slider.map(e => {
                            return(
                              <div key={e.id}>
                                  <SwiperSlide>
                                      <div className="blck-img f-img-cont mt-5">
                                          <img src={`https://api.icd-academy.com/img/${e.imageName}`} alt=""/>

                                      </div>
                                  </SwiperSlide>
                              </div>
                            )
                        }):<div className='w-100 d-flex justify-content-center'><Loader/></div>
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default FooterSlider;