import React from 'react';
import '../../Assets/Css/Home.css'
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const CourseSliderCard = ({img,name, surname, id}) => {
    const  navigate = useNavigate()
    const handleDeatils = (e) => {
        navigate(`/teacher-details/${e}`)
    }
    const {t} = useTranslation()
    return (
        <section className="home-courses">
                  <div className="card">
                      <div className="card-header">
                          <img
                              className='bg-chng'
                              src={img}
                              alt="шпокк"/>
                      </div>
                      <div className="card-body-s">
                          <h1>{name}</h1>
                          <h1>{surname}</h1>
                      </div>
                      <a onClick={()=>handleDeatils(id)} className="btn">{t("Detail")}</a>
                  </div>
        </section>
    );
};

export default CourseSliderCard;