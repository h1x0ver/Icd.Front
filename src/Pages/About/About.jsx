import React, {useEffect, useState} from 'react';
import '../../Assets/Css/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from "axios";
import {Link} from "react-router-dom";
import AnimatedPage from "../../Components/Routing/AnimatedPage";
import {useTranslation} from "react-i18next";
const About = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/About`).then(resp => setAbout(resp.data))
    }, [])
    useEffect(() => {
        Aos.init({duration: 1400})
    }, [])
    const { t } = useTranslation();

    return (
        <AnimatedPage>
            <section className="heading-link">
                <h3>{t("ABOUT")}</h3>
                <p><Link to={'/'}><a>{t("HOME")}</a></Link> / {t("ABOUT")} </p>
            </section>
            {
                about.length > 0 ? about.map(e => {
                  return(

                      <section data-aos='fade-up' className="about">
                          <div className="image">
                              <img src={`https://api.icd-academy.com/img/${e.imageName}`} alt=""/>
                          </div>

                          <div className="content">
                              <h3 className="about-title">{t(e.title)}</h3>
                              <p>{t(e.subTitle)}</p>

                          </div>

                      </section>
                  )
                }):<div></div>
            }

        </AnimatedPage>
    );
};

export default About;