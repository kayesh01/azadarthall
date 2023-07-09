import React from 'react';
import gallery1 from '../../assets/Gallery/1.jpg';
import gallery2 from '../../assets/Gallery/2.jpg';
import gallery3 from '../../assets/Gallery/3.jpg';
import gallery4 from '../../assets/Gallery/09.jpg';
import gallery5 from '../../assets/Gallery/5.jpg';
import gallery6 from '../../assets/Gallery/10.jpg';
import wall1 from '../../assets/Gallery/wall01.jpg';
import wall2 from '../../assets/Gallery/wall02.jpg';
import wall3 from '../../assets/Gallery/wall03.jpg';
import wall4 from '../../assets/Gallery/wall04.jpg';
import wall5 from '../../assets/Gallery/wall05.jpg';
import wall6 from '../../assets/Gallery/wall06.jpg';
import wall7 from '../../assets/Gallery/wall07.jpg';
import wall8 from '../../assets/Gallery/wall08.jpg';
import wall9 from '../../assets/Gallery/wall09.jpg';
import wall10 from '../../assets/Gallery/wall10.jpg';
import wall11 from '../../assets/Gallery/wall11.jpg';
import wall12 from '../../assets/Gallery/wall12.jpg';
import wall13 from '../../assets/Gallery/wall13.jpg';
import wall14 from '../../assets/Gallery/wall14.jpg';



const Gallery = () => {
    const wallpapers = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14]
    return (
        <div>
            <div className='ms-[120px]'>
                <img className='ms-5 mb-3' src={gallery1} alt="" />
                <img className='ms-5 mb-3' src={gallery2} alt="" />
                <img className='ms-5 mb-3' src={gallery3} alt="" />
                <img className='ms-5 mb-3' src={gallery5} alt="" />
            </div>
            <div className='px-32'>
                <img src={gallery4} alt="" />
                <img className='mt-3 mb-3' src={gallery6} alt="" />
            </div>
            <div>
                <h1 className='text-3xl text-center'>Some of our 3D wallcloth collection given below.</h1>
            </div>
            <div className='grid grid-cols-3 gap-2 mt-5 mb-5'>
                {wallpapers.map((wallpaper, index) => (
                    <img className='mr-2 ms-2' key={index} src={wallpaper} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Gallery;