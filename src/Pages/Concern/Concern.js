import React from 'react';
import concern1 from '../../assets/Concerns/proprietor-introduce.jpg';
import concern2 from '../../assets/Concerns/3.jpg';
import concern3 from '../../assets/Concerns/Page_165.jpg';
import concern4 from '../../assets/Concerns/page-162.jpg';



const Concern = () => {
    const concerns = [concern1, concern4, concern3, concern2];
    return (
        <div>
            <h2 className='text-center text-4xl'>Sister Concerns</h2>
            <div className='mt-5'>
                {concerns.map((concern, index) => (
                    <img className='mx-auto mb-2' key={index} src={concern} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Concern;