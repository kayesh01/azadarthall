import React from 'react';
import pic1 from '../../../assets/strengths/pic1.jpg';
import pic2 from '../../../assets/strengths/pic2.jpg';
import pic3 from '../../../assets/strengths/pic3.jpg';
import pic4 from '../../../assets/strengths/pic4.jpg';
import pic5 from '../../../assets/strengths/pic5.jpg';
import pic6 from '../../../assets/strengths/pic6.jpg';

const Strength = () => {
    const pictures = [pic1, pic2, pic3, pic4, pic5, pic6];
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center mt-5 font-semibold'>Our Strength.</h2>
                <p className='text-xl p-2 text-center mt-2'>
                    As a leading digital printing solutions and service company, we pride ourselves on our exceptional strengths that set us apart from the competition. First and foremost, our cutting-edge technology and state-of-the-art equipment enable us to deliver high-quality prints with unparalleled precision and speed. Additionally, our team of experienced professionals possesses in-depth knowledge and expertise in the digital printing industry, ensuring that we meet and exceed our clients' expectations. We also offer a wide range of customized solutions tailored to the unique needs of each client, providing them with a seamless and hassle-free printing experience. Finally, our commitment to outstanding customer service and prompt delivery ensures that our clients receive the utmost satisfaction.</p>
            </div>
            <div className='flex flex-row flex-auto h-[250px] w-[200px] mt-5 mb-5'>
                {pictures.map((picture, index) => (
                    <img className='mr-3 ms-3' key={index} src={picture} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Strength;