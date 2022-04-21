import React from 'react';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Foods></Foods>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;