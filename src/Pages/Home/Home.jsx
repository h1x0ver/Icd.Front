import React, {useEffect} from 'react';
import '../../Assets/Css/Home.css'
import SubCard from "../../Components/Home/SubCard";
import CourseSlider from "../../Components/Home/CourseSlider";
import FooterSlider from "../../Components/Footer/FooterSlider";
import Golas from "../../Components/Home/Golas";
import { Parallax } from "react-parallax";
import InfoCard from "../../Components/Home/InfoCard";
import parolaxImage from '../../Assets/Images/paralax.jpg'
import GoalSlider from "../../Components/Home/GoalSlider";
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedPage from "../../Components/Routing/AnimatedPage";
import {useTranslation} from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({duration: 1400});
    }, [])
    return (
          <AnimatedPage>
              <div className=''>
                  <div className="container-scl">
                      <div className="col-12">
                          <div className="col-6 black-phone">
                              <div className="image-text__container">
                                  <h2>ICD Academy</h2>
                                  <p>International Career & Development
                                      Academy</p>
                                  <h3>{t("newEduc")}</h3>
                              </div>
                          </div>
                          <div className="col-8">
                          </div>
                      </div>
                  </div>
                  <section data-aos='zoom-in' className='welcome'>
                      <h2>{t("Welcome To Academy")}</h2>
                      <InfoCard/>
                  </section>
                  <Parallax strength={400}  bgImage={parolaxImage}>
                      <section data-aos='fade-down' className="subjects ">
                          <h1 className="heading">{t("COURSES")}</h1>
                          <div data-aos='' className="box-container">
                              <SubCard/>
                          </div>
                      </section>
                  </Parallax>
                  <section data-aos='zoom-out' className=''>
                      <h1 className="heading">{t("TEACHERS")}</h1>
                      <CourseSlider/>
                  </section>
                  <Parallax strength={-400}   bgImage={parolaxImage}>
                      <section  data-aos='zoom-in' className='centers'>
                          <div className="feat bg-gray">
                              <div className="container">
                                  <div className="row justify-content-center">
                                      <div className="section-head col-sm-12">
                                          <h4>{t("Goals")} </h4>
                                      </div>
                                      <Golas/>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </Parallax>
                  <div  data-aos='zoom-out' className="container-fluid">
                      <GoalSlider/>
                  </div>

                  <div  data-aos='zoom-in' className="container">
                      <div className="text__cont">
                          <h2>{t("Muhit")}</h2>
                          <p>{t("SubMuhit")}</p>
                      </div>
                  </div>
                  <div  data-aos='zoom-out' className="container-fluid mt-5">
                      <FooterSlider/>
                  </div>
              </div>
          </AnimatedPage>
    );
};
export default Home;