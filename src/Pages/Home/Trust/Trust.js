import React from 'react';
import abul from '../../../assets/abul-khair-group.png';
import afbl from '../../../assets/afbl.png';
import airtel from '../../../assets/airtel.jpg';
import akij from '../../../assets/akij-group.jpg';
import motors from '../../../assets/akij-motors.png';
import anwar from '../../../assets/anwar-cement-sheet.png';

const Trust = () => {
    const slides = [abul, afbl, airtel, akij, motors, anwar];
    return (
        <div>
            <div>
                <p className='text-4xl text-center mt-5 font-semibold'>We work with businesses of any size.</p>
                <p className='text-2xl text-center mt-3'>If they can trust and rely on our products and services, so can you</p>
            </div>
            <div className='flex flex-row h-[100px] w-[150px] mt-5 mb-5'>
                {slides.map((slide, index) => (
                    <img key={index} src={slide} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Trust;