import React, {useEffect, useState} from 'react';
import Card from "./CourseHomeCard";
import '../../Assets/Css/Home.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import axios from "axios";
import Loader from "../Loader/Loader";

const CourSlider = () => {
    const [activeThumb, setActiveThumb] = useState()
    const [course, setCourse] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Course`).then(resp => setCourse(resp.data))
    }, [])
    console.log(course)
    return (
        <div className='storyReel mt-2'>
            <Swiper
                spaceBetween={0}
                loop={true}
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{swiper: activeThumb}}
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
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    400:{
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }}
                slidesPerView={3}
            >
                <div className="container">
                    {
                        course.length > 0 ? course.map(e => {
                            return (
                                <SwiperSlide>
                                    <div  className="row">
                                        <div key={e.id} className="col-lg-12 d-flex justify-content-center">
                                           <Card

                                            img={`https://api.icd-academy.com/img/${e.imageName}`}
                                            courseName={e.courseName}
                                           />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }) : <div className='d-flex w-100 justify-content'><Loader/></div>
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default CourSlider;