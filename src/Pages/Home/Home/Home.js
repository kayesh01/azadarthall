import React from 'react';
import Banner from '../Banner/Banner';
import Trust from '../Trust/Trust';
import Strength from '../Strength/Strength';
import Achivement from '../Achivement/Achivement';
import Location from '../Location/Location';
import Client from '../Client/Client';





const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <Strength></Strength>
            <Achivement></Achivement>
            <Client></Client>
            <Location></Location>
        </div>
    );
};

export default Home;