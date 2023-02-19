import React, {useEffect, useState} from 'react';
import '../../Assets/Css/Home.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import {useTranslation} from "react-i18next";

const SubCard = ({imgSrc, title}) => {
    const navigate = useNavigate()
    const [subCard, setSubCard] = useState([])
    useEffect(() => {
        axios.get('https://api.icd-academy.com/api/Course').then(resp => setSubCard(resp.data))
    }, [])
    const {t} = useTranslation()
    return (
        <>
            {
                subCard.length > 0 ? subCard.map(e => {
                    return (
                        <div onClick={() => navigate('/courses')} data-aos='fade-right' className="box">
                            <img src={`https://api.icd-academy.com/img/${e.imageName}`} alt=""/>
                            <h3>{t(e.courseName)}</h3>
                        </div>
                    )
                }) : <div><Loader/></div>
            }
        </>
    );
};

export default SubCard;