import React from 'react';
import gallery1 from '../../assets/Gallery/Page_13.jpg';
import gallery2 from '../../assets/Gallery/Page_15.jpg';
import gallery3 from '../../assets/Gallery/Page_23.jpg';
import gallery4 from '../../assets/Gallery/Page_24.jpg';
import gallery5 from '../../assets/Gallery/Page_27.jpg';
import gallery6 from '../../assets/Gallery/10.jpg';
import gallery7 from '../../assets/Gallery/Page_32.jpg';
import gallery8 from '../../assets/Gallery/Page_36.jpg';
import gallery9 from '../../assets/Gallery/Page_42.jpg';
import gallery10 from '../../assets/Gallery/09.jpg';
import gallery11 from '../../assets/Gallery/Page_52.jpg';
import gallery12 from '../../assets/Gallery/Page_53.jpg';
import gallery13 from '../../assets/Gallery/Page_54.jpg';
import gallery14 from '../../assets/Gallery/Page_59.jpg';
import gallery15 from '../../assets/Gallery/Page_64.jpg';
import gallery16 from '../../assets/Gallery/Page_71.jpg';
import gallery17 from '../../assets/Gallery/Page_72.jpg';
import gallery18 from '../../assets/Gallery/Page_73.jpg';
import gallery19 from '../../assets/Gallery/Page_76.jpg';
import gallery20 from '../../assets/Gallery/Page_82.jpg';
import gallery21 from '../../assets/Gallery/Page_88.jpg';
import gallery22 from '../../assets/Gallery/Page_93.jpg';
import gallery23 from '../../assets/Gallery/Page_94.jpg';
import gallery24 from '../../assets/Gallery/Page_96.jpg';
import gallery25 from '../../assets/Gallery/Page_101.jpg';
import gallery26 from '../../assets/Gallery/Page_107.jpg';
import gallery27 from '../../assets/Gallery/Page_108.jpg';
import gallery28 from '../../assets/Gallery/Page_110.jpg';
import gallery29 from '../../assets/Gallery/Page_111.jpg';
import gallery30 from '../../assets/Gallery/Page_116.jpg';
import gallery31 from '../../assets/Gallery/Page_119.jpg';
import gallery32 from '../../assets/Gallery/Page_127.jpg';
import gallery33 from '../../assets/Gallery/Page_130.jpg';
import gallery34 from '../../assets/Gallery/Page_133.jpg';
import gallery35 from '../../assets/Gallery/Page_137.jpg';
import gallery36 from '../../assets/Gallery/Page_143.jpg';
import gallery37 from '../../assets/Gallery/Page_145.jpg';
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
import wall15 from '../../assets/Gallery/wall15.jpg';
import wall16 from '../../assets/Gallery/wall16.jpg';
import wall17 from '../../assets/Gallery/wall17.jpg';
import wall18 from '../../assets/Gallery/wall18.jpg';
import wall19 from '../../assets/Gallery/wall19.jpg';
import wall20 from '../../assets/Gallery/wall20.jpg';
import wall21 from '../../assets/Gallery/wall21.jpg';
import wall22 from '../../assets/Gallery/wall22.jpg';
import wall23 from '../../assets/Gallery/wall23.jpg';
import wall24 from '../../assets/Gallery/wall24.jpg';
import wall25 from '../../assets/Gallery/wall25.jpg';
import wall26 from '../../assets/Gallery/wall26.jpg';
import wall27 from '../../assets/Gallery/wall27.jpg';
import wall28 from '../../assets/Gallery/wall28.jpg';
import wall29 from '../../assets/Gallery/wall29.jpg';
import wall30 from '../../assets/Gallery/wall30.jpg';
import Work from './Work';



const Gallery = () => {
    const wallpapers = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall10];
    const galleries = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29, gallery30, gallery31, gallery32, gallery33, gallery34, gallery35, gallery36, gallery37]
    return (
        <div>
            <div className='mx-auto w-3/4'>
                {galleries.map((gallery, index) => (
                    <img className='mb-2' key={index} src={gallery} alt="" />
                ))}
            </div>
            <h1 className='text-3xl text-center'>Some of our 3D wallcloth collection given below.</h1>
            <div className='grid lg:grid-cols-3 gap-3 my-2 mr-4'>
                {wallpapers.map((wallpaper, index) => (
                    <img className='mr-2 ms-2' key={index} src={wallpaper} alt="" />
                ))}
            </div>
            <Work></Work>
        </div>
    );
};

export default Gallery;