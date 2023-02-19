import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import './slider.css'
//images:
import img from '../../Assets/Images/istockphoto-1353696064-612x612.jpg'
import axios from "axios";
import Loader from "../Loader/Loader";


const GoalSlider = () => {
    const [activeThumb, setActiveThumb] = useState()
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/StudentSlider`).then(resp => setStudent(resp.data))
    }, [])
    console.log(student)
    return (
        <div className='storyReel'>
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{swiper: activeThumb}}
                breakpoints={{
                    365: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    400: {
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
                {
                    student.length > 0 ? student.map(e => {
                        return(
                            <SwiperSlide>
                                <div className="row">
                                    <div className="img-contents">
                                        <img src={`https://api.icd-academy.com/img/${e.imageName}`} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }):<Loader/>
                }
            </Swiper>
        </div>
    );
};

export default GoalSlider;