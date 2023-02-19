import React, {useState} from 'react';
import Logo from '../../Assets/Images/Logo ICD_White.png'
import style from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link, useNavigate, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import './Header.css'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    function clickLang(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <header className={style.header}>
            <div className='container-fluid'>
                <div className={style.box}>
                    <div onClick={() => navigate('/')} className={style.logo_image}>
                        <img src={Logo} alt='/'/>

                    </div>

                    <ul
                        className={
                            nav ? [style.menu, style.active].join(' ') : [style.menu]
                        }
                    >
                        <li>
                            <NavLink to='/'><a onClick={() => setNav(false)}>{t("HOME")}</a></NavLink>
                        </li>
                        <li>
                            <NavLink to='about'><a onClick={() => setNav(false)}>{t("ABOUT")}</a></NavLink>
                        </li>
                        <li>
                            <NavLink to='courses'><a onClick={() => setNav(false)}>{t("COURSES")}</a></NavLink>
                        </li>
                        <li>
                            <NavLink to='contact'><a onClick={() => setNav(false)}>{t("CONTACT")}</a></NavLink>
                        </li>
                            <div className="dropdown">
                                <button className='language-picker__btn'>{t("Lang")}</button>
                                <div className="dropdown-content">
                                    <a onClick={() => clickLang("az")} value="0">Az</a>
                                    <a onClick={() => clickLang("ru")} value="1">Ru</a>
                                    <a onClick={() => clickLang("en")} value="2">Eng</a>
                                </div>
                            </div>


                    </ul>

                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;