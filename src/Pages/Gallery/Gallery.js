import React from 'react';
import gallery1 from '../../assets/Gallery/1.jpg';
import gallery2 from '../../assets/Gallery/2.jpg';
import gallery3 from '../../assets/Gallery/3.jpg';
import gallery4 from '../../assets/Gallery/4.jpg';
import gallery5 from '../../assets/Gallery/5.jpg';

const Gallery = () => {
    return (
        <div>
            <div className='ms-[120px]'>
                <img className='ms-5 mb-3' src={gallery1} alt="" />
                <img className='ms-5 mb-3' src={gallery2} alt="" />
                <img className='ms-5 mb-3' src={gallery3} alt="" />
                <img className='ms-5 mb-3' src={gallery4} alt="" />
                <img className='ms-5 mb-3' src={gallery5} alt="" />
            </div>
        </div>
    );
};

export default Gallery;