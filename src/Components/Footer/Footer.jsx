import React from 'react';
import './Footer.css'
import Logo from '../../Assets/Images/Logo ICD_White.png'
import {useNavigate} from "react-router-dom";
import footerIamge from '../../Assets/Images/footer.jpg'
import {useTranslation} from "react-i18next";


const Footer = () => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <img className='fot-logo' src={Logo} alt="salam"/>
                    <p>{t("FooterTitle")}</p>
                    <div className="share">
                        <a href='https://www.facebook.com/icd.bakuaz/' target='_blank' rel="noopener noreferrer" className="fab fa-facebook-f"></a>
                        <a href='https://twitter.com/Academy_ICD' target='_blank' rel="noopener noreferrer" className="fab fa-twitter"></a>
                        <a href='https://instagram.com/icd.baku?igshid=YmMyMTA2M2Y=' target='_blank' rel="noopener noreferrer" className="fab fa-instagram"></a>
                        <a href='https://wa.me/994502244116' target='_blank' rel="noopener noreferrer" className="fab fa-whatsapp"></a>
                        <a className="fab fa-youtube"></a>
                    </div>
                </div>

                <div className="box">
                    <h3>{t("TRANSITIONS")}</h3>
                    <a onClick={() => navigate('/')} className="link">{t("HOME")}</a>
                    <a onClick={() => navigate('/about')} className="link">{t("ABOUT")}</a>
                    <a onClick={() => navigate('/courses')} className="link">{t("COURSES")}</a>
                    <a onClick={() => navigate('/contact')} className="link">{t("CONTACT")}</a>
                </div>

                <div className="box">
                    <h3>{t("COURSES")}</h3>
                    <a onClick={() => navigate('/courses')} className="link">{t("Accounting")}</a>
                    <a onClick={() => navigate('/courses')} className="link">{t("Supply")}</a>
                    <a onClick={() => navigate('/courses')} className="link">{t("Human resources")}</a>
                    <a onClick={() => navigate('/courses')} className="link">{t("Professional sales")}</a>
                    <a onClick={() => navigate('/courses')} className="link">{t("İnformasiya texnologiyaları")}</a>
                </div>

                <div className="box">
                    <img className='footer-image' src={footerIamge} alt=""/>
                </div>
            </div>
            <div className="credit">Created by <span>ICD Academy web development department </span></div>
            <div className='privacy'>{t("Security")}</div>
        </section>
    );
};

export default Footer;