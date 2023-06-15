import React from 'react';
import achive1 from '../../../assets/Achievements/achive1.jpg';
import achive2 from '../../../assets/Achievements/achive2.jpg';
import achive3 from '../../../assets/Achievements/achive3.jpg';
import achive4 from '../../../assets/Achievements/achive4.jpg';
import achive5 from '../../../assets/Achievements/achive5.jpg';
import achive6 from '../../../assets/Achievements/achive6.jpg';
import achive7 from '../../../assets/Achievements/achive7.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Achivement.css";
import { EffectCards, Autoplay } from "swiper";

const Achivement = () => {
    const achievements = [achive1, achive2, achive3, achive4, achive5, achive6, achive7];
    return (
        <div className='mt-5 mb-5'>
            <div>
                <h2 className='text-4xl text-center mt-5 font-semibold'>Our achievement.</h2>
                <p className='text-xl p-2 text-center mt-2'>
                    As a pioneering digital printing company for the past 50 years, our achievements have been remarkable. We have consistently pushed the boundaries of innovation, delivering high-quality prints with exceptional speed and precision. Our commitment to customer satisfaction and cutting-edge technology has established us as a trusted industry leader, setting new standards for digital printing excellence.</p>
            </div>
            <div>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{ delay: 1000 }}
                    className="mySwiper"
                >
                    {achievements.map((achievement, index) => (
                        <SwiperSlide key={index}>
                            <img className='mb-5' src={achievement} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Achivement;