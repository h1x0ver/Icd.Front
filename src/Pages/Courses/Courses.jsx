import React, {useEffect, useState} from 'react';
import '../../Assets/Css/Courses.css'
import {Link} from "react-router-dom";
import CourseCard from "../../Components/Course/CourseCard";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedPage from "../../Components/Routing/AnimatedPage";
import {useTranslation} from "react-i18next";

const Courses = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Course`).then(resp => setCourse(resp.data))
    }, [])
    useEffect(() => {
        Aos.init({duration: 1300})
    }, [])
    const { t } = useTranslation();


    return (<AnimatedPage>
            <section className="heading-link">
                <h3>{t("COURSES")}</h3>
                <p><Link to={'/'}><a>{t("HOME")}</a></Link> / {t("COURSES")}</p>
            </section>
            <section data-aos='fade-up' className="courses">
                <h1 className="heading mb-5"> {t("COURSES")} </h1>
                <div  className="box-container mt-5">
                    {
                        course.length>0 ? course.map(e => {
                            return(
                                <div key={e.id}>
                                    <CourseCard
                                        imgSrc={`https://api.icd-academy.com/img/${e.imageName}`}
                                        title={t(e.courseName)}
                                        lessonModules={e.modules}
                                        id={e.id}
                                        fdata={e.month}
                                    />
                                </div>
                            )
                        }):<div className='w-100 d-flex justify-content-center'><Loader/></div>
                    }

                </div>
            </section>
        </AnimatedPage>
    );
};

export default Courses;