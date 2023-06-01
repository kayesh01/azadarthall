import React from 'react';
import achive1 from '../../../assets/Achievements/achive1.jpg';
import achive2 from '../../../assets/Achievements/achive2.jpg';
import achive3 from '../../../assets/Achievements/achive3.jpg';
import achive4 from '../../../assets/Achievements/achive4.jpg';
import achive5 from '../../../assets/Achievements/achive5.jpg';
import achive6 from '../../../assets/Achievements/achive6.jpg';
import achive7 from '../../../assets/Achievements/achive7.jpg';

const Achivement = () => {
    const achievements = [achive1, achive2, achive3, achive4, achive5, achive6, achive7];
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center mt-5 font-semibold'>Our achievement.</h2>
                <p className='text-xl p-2 text-center mt-2'>
                    As a pioneering digital printing company for the past 50 years, our achievements have been remarkable. We have consistently pushed the boundaries of innovation, delivering high-quality prints with exceptional speed and precision. Our commitment to customer satisfaction and cutting-edge technology has established us as a trusted industry leader, setting new standards for digital printing excellence.</p>
            </div>
            <div className='flex flex-row flex-auto h-[250px] w-[200px] mt-5 mb-5'>
                {achievements.map((achievement, index) => (
                    <img className='mr-1 ms-3' key={index} src={achievement} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Achivement;