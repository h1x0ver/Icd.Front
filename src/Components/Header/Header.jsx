import React from 'react';
import './Header.css'
import logo from '../../Assets/Images/WhatsApp Image 2022-10-18 at 12.16.49 (1).png'
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="header">
            <a className="logo"> <Link to='/'> <img src={logo} alt=""/> Academy</Link></a>
            <nav className="navbar">
                <div id="close-navbar" className="fas fa-times"></div>
                <Link to='/'> <a>ana səhifə</a></Link>
                <Link to='/about'><a>Haqqimizda</a></Link>
                <Link to='/courses'><a>Ixtisaslar</a></Link>
                <Link to='/contact'><a>Əlaqə</a></Link>
            </nav>
            <div className="icons">

                <div className="dropdown">
                    <div id="account-btn" className="dropbtn fas fa-user">
                        <div className="dropdown-content">
                            <a onClick={() => navigate('/login')}>Login</a>
                            <a onClick={() => navigate('/register')}>Register</a>
                        </div>
                    </div>
                </div>

                <div id='menu-btn' className="header__hamburger__wrapper" onClick={()=>{}}>
                    <div>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="header__hamburger__body">
                        <ul>
                            <li><Link to='/'>ana səhifə</Link></li>
                            <li><Link to='/about'>Haqqimizda </Link></li>
                            <li><Link to='/contact'>Elaqe</Link></li>
                            <li><Link to='/register'>Registrasiya</Link></li>
                            <li><Link to='/login'>Giris</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;