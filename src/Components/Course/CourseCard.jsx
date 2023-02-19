import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../Assets/Css/Courses.css'
import 'react-i18next'
import {useTranslation} from "react-i18next";

const CourseCard = ({imgSrc, title, subTitle,lessonModules,fdata, id}) => {
    const navigate = useNavigate()
    const handleDeatils = (e)=>
    {
        navigate(`/course-details/${e}`)
    }
    const {t} = useTranslation()
    return (
        <div className="box">
            <div className="image">
                <img src={imgSrc} alt=""/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{subTitle}</p>
              <a onClick={()=>handleDeatils(id)} className="btn">{t("Detail")}</a>
                <div className="icons">
                    <span> <i className="fas fa-book"></i>{lessonModules} {t("Modules")}</span>
                    <span> <i className="fas fa-clock"></i>{fdata} {t("Month")}</span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;