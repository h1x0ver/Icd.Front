import React from 'react';
import '../../Assets/Css/Home.css'
import {Link} from "react-router-dom";

const courseHomeCard = ({img,courseName}) => {
    return (
        <section className="home-courses">
            <div className="card">
                <div className="card-header">
                    <img
                        className='bg-chng'
                        src={img}
                        alt="шпокк"/>
                </div>
                <div className="card-body-s">
                    <h1>{courseName}</h1>
                </div>
                <div className="card-footer">
                    <Link to='/courses'> <input type="submit" value="More Course" className="btn"/></Link>
                </div>
            </div>

        </section>
    );
};

export default courseHomeCard;