import React from 'react';
import homeinfoimg1 from '../../Assets/Images/istockphoto-947895232-612x612.jpg'
import homeinfoimg2 from '../../Assets/Images/istockphoto-148314935-612x612.jpg'
import homeinfoimg3 from '../../Assets/Images/istockphoto-508454788-612x612.jpg'
import homeinfoimg4 from '../../Assets/Images/istockphoto-982800474-612x612.jpg'
import {useTranslation} from "react-i18next";

const InfoCard = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className='welcome'>
                <div className="welcome-text">
                    <p>{t("Sub Welcome To Academy")}</p>
                </div>
                <div className="welcome-card">
                    <div className="w-card">
                        <img src={homeinfoimg1} alt=""/>
                    </div>
                    <div className="w-card">
                        <img src={homeinfoimg2} alt=""/>
                    </div>
                    <div className="w-card">
                        <img src={homeinfoimg3} alt=""/>
                    </div>
                    <div className="w-card">
                        <img src={homeinfoimg4} alt=""/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default InfoCard;