import React from 'react';
import about from '../../assets/About/03 Page.jpg';
import Achivement from '../Home/Achivement/Achivement';


const About = () => {
    return (
        <div>
            <h2 className='text-4xl text-center'>About Us</h2>
            <div className='w-4/5 mx-auto'>
                <img src={about} alt="" />
            </div>
            <Achivement></Achivement>
        </div>
    );
};

export default About;