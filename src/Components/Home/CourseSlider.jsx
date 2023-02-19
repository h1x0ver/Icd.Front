import React, {useEffect, useState} from 'react';
import CourseSlideraCard from "./CourseSlideraCard";
import '../../Assets/Css/Home.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import axios from "axios";
import Loader from "../Loader/Loader";
import {useTranslation} from "react-i18next";

const CourseSlider = () => {
    const [activeThumb, setActiveThumb] = useState()
    const [course, setCourse] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Teacher`).then(resp => setCourse(resp.data))
    }, [])
    console.log(course)
    const {t} = useTranslation()
    return (
        <div className='container mt-2'>
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
                        spaceBetween: 5,
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
                                            <CourseSlideraCard
                                                img={`https://api.icd-academy.com/img/${e.imageName}`}
                                                name={t(e.firstname)}
                                                surname={t(e.lastname)}
                                                id={e.id}
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
export default CourseSlider;