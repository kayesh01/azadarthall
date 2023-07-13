import React from 'react';
import team1 from '../../../assets/About/Page_161.jpg';
import team2 from '../../../assets/About/Page_162.jpg';

const Team = () => {
    const team = [team1, team2];
    return (
        <div>
            <h1 className='text-4xl text-center mt-5 mb-5 font-semibold'>Here is our expert team members.</h1>
            <div className='mx-auto w-3/4'>
                {team.map((t, index) => (
                    <img className='mb-2' key={index} src={t} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Team;