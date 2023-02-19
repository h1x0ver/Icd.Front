import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import '../../Assets/Css/Contact.css'
import img from '../../Assets/Images/contact-us-hand-businessman-holding-mobile-smartphone-with-mail-phone-email-icon-1-scaled.jpg'
import axios from "axios";
import emailjs from '@emailjs/browser';
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedPage from "../../Components/Routing/AnimatedPage";
import {useTranslation} from "react-i18next";
const Contact = () => {
    const [contact, setContact] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Contact`).then(resp => setContact(resp.data))
    }, [])
    useEffect(() => {
        Aos.init({duration: 1300})
    }, [])
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ah0lhll', 'template_qj8zgzx', form.current, 's3k9HcNqbCc25XQgw')
            .then((result) => {
                alert('Sorğunuz uğurla gonderildi!')
            }, (error) => {
                console.log(error.text);
            });
    };
    const {t} = useTranslation()
    return (
        <AnimatedPage>
            <section className="heading-link">
                <h3>{t("CONTACT")}</h3>
                <p><Link to={'/'}><a>{t("HOME")}</a></Link> / {t("CONTACT")} </p>
            </section>
            <section className="contact">
                <h1 className="heading"> {t("Kontaktlar")}</h1>
                {
                    contact && contact.map(e => {
                        return (
                            <div data-aos='fade-right' key={e.id} className="icons-container">
                                <div className="icons">
                                    <i className="fas fa-clock"></i>
                                    <h3>{t("Opening")}:</h3>
                                    <p>{e.openingHourse}</p>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-phone"></i>
                                    <h3>{t("Number")} :</h3>
                                    <p>{e.phone}</p>
                                    <a href="https://wa.me/994502244116" target="_blank" rel="noopener noreferrer">{t("Whatsapp")}</a>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-envelope"></i>
                                    <h3> {t("E-maill")} : </h3>
                                    <p>{e.email}</p>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-map"></i>
                                    <h3>{t("Adress")} :</h3>
                                    <p>{t(e.address)}</p>
                                    <a href="https://goo.gl/maps/3PUBdFvYifoWMsfZ8" target="_blank" rel="noopener noreferrer">{t("Check")}</a>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="row">
                    <div className="row">
                        <div className="image">
                            <img src={img}
                                 alt=""/>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <h3>{t("Teklif")}:</h3>
                            <input type="text" name="user_name" placeholder={t("Ad")} className='box'/>
                            <input type="email" name="user_email" placeholder={t("E-maill")} className='box'/>
                            <input type="text" name='user_number' placeholder={t("Mobil nömrəniz")} className='box'/>
                            <textarea name="message" className="box" placeholder={t("Mesaj yazın")} cols="30"
                                      rows="10"></textarea>
                            <input type="submit" value={t("Mesajı göndərin")} className="btn"/>
                        </form>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Contact;