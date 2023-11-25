/* eslint-disable no-unused-vars */
import React from 'react';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';

const Statistics = () => {
    return (
        <div className='container mx-auto my-24 flex'>
            <FirstChart></FirstChart>
            <SecondChart></SecondChart>
        </div>
    );
};

export default Statistics;