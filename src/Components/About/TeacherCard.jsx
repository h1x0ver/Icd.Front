import React from 'react';
import '../../Assets/Css/About.css'
const TeacherCard = ({imgSrc, fname, lname}) => {
    return (
        <div className="swiper teachers-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide slide">
                    <div className="image sl-img">
                        <img  src={imgSrc} alt=""/>
                        <div className="share">
                            <a className="fname">{fname}</a>
                            <a className="lname">{lname}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TeacherCard;