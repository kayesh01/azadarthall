import React from 'react';
import about from '../../assets/About/About-us-ripon-sir-2.jpg';
import Achivement from '../Home/Achivement/Achivement';


const About = () => {
    return (
        <div>
            <h2 className='text-4xl text-center'>About Us</h2>
            <div>
                <img src={about} alt="" />
            </div>
            <Achivement></Achivement>
        </div>
    );
};

export default About;