import React from 'react';
import concern1 from '../../assets/Concerns/proprietor-introduce.jpg';
import concern2 from '../../assets/Concerns/1.jpg';
import concern3 from '../../assets/Concerns/2.jpg';
import concern4 from '../../assets/Concerns/3.jpg';
import concern6 from '../../assets/Concerns/5.jpg';
import concern7 from '../../assets/Concerns/6.jpg';



const Concern = () => {
    return (
        <div>
            <h2 className='text-center text-4xl'>Sister Concerns</h2>
            <div className='ms-[120px] mt-5'>
                <img className='mb-5 ms-5' src={concern1} alt="" srcset="" />
                <img className='mb-5 ms-5' src={concern2} alt="" srcset="" />
                <img className='mb-5 ms-5' src={concern3} alt="" srcset="" />
                <img className='mb-5 ms-5' src={concern4} alt="" srcset="" />
                <img className='mb-5 ms-5' src={concern6} alt="" srcset="" />
                <img className='mb-5 ms-5' src={concern7} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Concern;