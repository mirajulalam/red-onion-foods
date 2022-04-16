import React from 'react';
import './HomeBanner.css';
const HomeBanner = () => {
    return (
        <div className='home-container'>
            <h1 className='home-title'>Best food waiting for your belly</h1>
            <input className='input-field' type="search" name="search" id="" placeholder='Search food items' />
        </div>
    );
};

export default HomeBanner;