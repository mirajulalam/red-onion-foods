import React from 'react';
import Foods from '../Foods/Foods';
import HomeBanner from '../HomeBanner/HomeBanner';
import './Home.css';
const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Foods></Foods>
        </div>
    );
};

export default Home;