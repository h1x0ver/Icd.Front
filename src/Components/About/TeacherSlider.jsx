import React, {useEffect, useState} from 'react';
import '../../Assets/Css/About.css'
import {Swiper, SwiperSlide} from "swiper/react";
import TeacherCard from "./TeacherCard";
import {Navigation, Thumbs} from "swiper";
import axios from "axios";
const TeacherSlider = () => {
    const [activeThumb, setActiveThumb] = useState()
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Teacher`).then(resp => setTeacher(resp.data))
    },[])
    console.log(teacher)
    return (
        <div className='storyReel mt-2'>
            <Swiper
                spaceBetween={1}
                loop={true}
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: activeThumb }}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    768: {
                        slidesPerView: 2,

                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    }
                }}
                slidesPerView={3}
            >
                <div className="row">
                    {
                        teacher.length > 0 ? teacher.map(e => {
                            return(
                                <SwiperSlide>
                                    <div className="col-12">
                                        <TeacherCard
                                            imgSrc={`https://api.icd-academy.com/img/${e.imageName}`}
                                            fname={e.firstname}
                                            lname={e.lastname}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        }):<div></div>
                    }
                </div>
            </Swiper>
        </div>
    );
};
export default TeacherSlider;