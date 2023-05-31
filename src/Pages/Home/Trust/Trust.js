import React from 'react';
import abul from '../../../assets/logo/abul-khair-group.png';
import afbl from '../../../assets/logo/afbl.png';
import airtel from '../../../assets/logo/airtel.jpg';
import akij from '../../../assets/logo/akij-group.jpg';
import motors from '../../../assets/logo/akij-motors.png';
import anwar from '../../../assets/logo/anwar-cement-sheet.png';
import bd from '../../../assets/logo/bangladesh-logo.png';
import gp from '../../../assets/logo/grameenphone.png';
import robi from '../../../assets/logo/robi.jpg';
const Trust = () => {
    const slides = [bd, gp, robi, abul, afbl, airtel, akij, motors, anwar];
    return (
        <div>
            <div>
                <p className='text-4xl text-center mt-5 font-semibold'>We work with businesses of any size.</p>
                <p className='text-2xl text-center mt-3'>If they can trust and rely on our products and services, so can you</p>
            </div>
            <div className='flex flex-row h-[100px] w-[149px] my-5'>
                {slides.map((slide, index) => (
                    <img key={index} src={slide} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Trust;