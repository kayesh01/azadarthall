import React from 'react';
import flag from '../../../assets/logo/08.jpg';
import certificate from '../../../assets/Achievements/achive6.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="image-container w-1/2 animate-pulse">
                    <img src={flag} className="rounded-lg shadow-2xl w-full h-full" alt='' />
                </div>
                <div className="image-container w-1/2">
                    <img src={certificate} className="rounded-lg shadow-2xl w-full lg:h-[610px]" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;