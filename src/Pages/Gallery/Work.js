import React from 'react';
import wrk1 from '../../assets/Works/work1.jpg';
import wrk2 from '../../assets/Works/work2.jpg';
import wrk3 from '../../assets/Works/work3.jpg';
import wrk4 from '../../assets/Works/work4.jpg';
import wrk5 from '../../assets/Works/work5.jpg';
import wrk6 from '../../assets/Works/work6.jpg';
import wrk7 from '../../assets/Works/work7.jpg';
import wrk8 from '../../assets/Works/work8.jpg';
import wrk9 from '../../assets/Works/work9.jpg';
import wrk10 from '../../assets/Works/work10.jpg';
import wrk11 from '../../assets/Works/work11.jpg';
import wrk12 from '../../assets/Works/work12.jpg';
import wrk13 from '../../assets/Works/work13.jpg';
import wrk14 from '../../assets/Works/work14.jpg';
import wrk15 from '../../assets/Works/work15.jpg';
import wrk16 from '../../assets/Works/work16.jpg';
import wrk19 from '../../assets/Works/work19.jpg';
import wrk20 from '../../assets/Works/work20.jpg';

const Work = () => {
    const works = [wrk1, wrk2, wrk3, wrk4, wrk5, wrk6, wrk7, wrk8, wrk9, wrk10, wrk11, wrk12, wrk13, wrk14, wrk15, wrk16, wrk19, wrk20]
    return (
        <div>
            <h1 className='text-3xl text-center'>Some of our work what we have done.</h1>
            <div className='grid lg:grid-cols-3 gap-3 my-2 mr-4'>
                {works.map((work, index) => (
                    <img className='mr-2 ms-2' key={index} src={work} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Work;