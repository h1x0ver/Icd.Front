import React, {useEffect, useState} from 'react';
import '../../Assets/Css/Home.css'
import axios from "axios";
import {t} from "i18next";
const Golas = () => {
    const [goal, setGoal] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Goals`).then(resp => setGoal(resp.data))
    }, [])

    return (
        <div className='row'>
            {
                goal && goal.map(e => {
                    return (
                        <div key={e.id} className="col-lg-4">
                            <div className="item">
                                <h2>{t(e.title)}</h2>
                                <p>{e.subTitle}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default Golas;