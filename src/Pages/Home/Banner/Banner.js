import React from 'react';
import flag from '../../../assets/logo/human-map.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={flag} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Robi Axiata Company Comments in written-</h1>
                    <p className="py-6">"It must be said that without Azad Art Hall Support, we couldn't have managed to set this new Guiness World Record. Robi is proud to have had your esteened organization as one of the valued associates for this event."</p>
                    <Link to='/about' className="btn btn-primary hover:bg-blue-200 hover:text-black">About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;