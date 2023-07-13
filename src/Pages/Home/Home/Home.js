import React from 'react';
import Banner from '../Banner/Banner';
import Trust from '../Trust/Trust';
import Strength from '../Strength/Strength';
import Achivement from '../Achivement/Achivement';
import Location from '../Location/Location';
import Client from '../Client/Client';
import Team from '../Team/Team';





const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <Strength></Strength>
            <Achivement></Achivement>
            <Client></Client>
            <Team></Team>
            <Location></Location>
        </div>
    );
};

export default Home;