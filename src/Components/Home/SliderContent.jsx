import React from 'react';
import './slider.css'

const SliderContent = ({img}) => {
    return (
       <div className='story'>
           <img src={img} alt=""/>
       </div>

    );
};

export default SliderContent;