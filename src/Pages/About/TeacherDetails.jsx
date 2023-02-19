import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useTranslation} from "react-i18next";

const TeacherDetails = () => {
    const {id} = useParams()
    const [teacherdt, setTeacherdt] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Teacher/${id}`).then(resp => setTeacherdt(resp.data))
    }, [])
    const navigate = useNavigate()
    const {t} = useTranslation()
    return (
        <div className="container">
            {
                teacherdt&&(
                    <div className='cards w-100'>
                        <a onClick={() => navigate('/')} className='cards__btn'>{t("Go Back")}</a>
                        <div className='card-header'>
                            <div className='d-flex'>
                                <div className='headerImage  me-4 mb-3'>
                                    <img src={`https://api.icd-academy.com/img/${teacherdt.imageName}`} alt=""/>
                                </div>
                                <h1 className='me-3'>{t(teacherdt.firstname)}</h1>
                                <h1 className=''>{t(teacherdt.lastname)}</h1>

                            </div>
                            <div className='mb-5'>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='body_infos row'>
                                <div className='works col-lg-12 col-sm-12'>
                                    <h3 className='mb-3 ms-1'>{t("TeacherDetail")}</h3>
                                    <p className='mt-4 ms-4'>{t(teacherdt.info)}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
};



export default TeacherDetails;