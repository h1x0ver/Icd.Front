import React, {useEffect, useState} from 'react';
import '../../Assets/Css/Courses.css'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import AnimatedPage from "../../Components/Routing/AnimatedPage";
import {useTranslation} from "react-i18next";

const CourseDetails = () => {
    const {id} = useParams()
    const [coursedt, setCoursedt] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Course/${id}`).then(resp => setCoursedt(resp.data))
    }, [])
    console.log(coursedt)
    const navigate = useNavigate()
    const {t} = useTranslation()
    return (
        <AnimatedPage>
            <div className="container">
                {
                    coursedt&&(
                        <div  className='cards w-100'>
                            <a onClick={() => navigate('/courses')} className='cards__btn'>{t("Go Back")}</a>
                            <div className='card-header'>
                                <div className='d-flex'>
                                    <div className='headerImage me-4 mb-3'>
                                        <img src={`https://api.icd-academy.com/img/${coursedt.imageName}`} alt=""/>
                                    </div>
                                    <h1 className='c-t'>{t(coursedt.courseName)}</h1>
                                </div>
                                <div className='mb-5'>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='body_infos row'>
                                    <div className='works col-lg-12  col-sm-12'>
                                        <h3 className='mb-3 ms-1'>{t("WhatsL")}</h3>
                                        <p className='mt-4 ms-4'>{t(coursedt.learnMaterial)}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </AnimatedPage>

    );
};

export default CourseDetails;