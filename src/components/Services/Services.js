import React from 'react';
import './Services.css';
import adult from '../../images/adult-blur-blurred-background-687824.png'
import chef from '../../images/chef-cook-food-33614.png';
import architecture from '../../images/architecture-building-city-2047397.png';
const Services = () => {
    return (
        <div className='container'>
            <h1>Why you choose us</h1>
            <p className='w-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eligendi rem optio corrupti ipsum quibusdam est impedit odio provident, saepe a nam cum sunt tempore quod? Possimus tenetur quos quae?</p>
            <div className='sevices-container'>
                <div>
                    <img src={adult} alt="" />
                    <div className="services-details">
                        <h4>fast delevery</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corporis magnam harum odit voluptates vel consectetur libero magni voluptate? Ratione</p>
                    </div>
                </div>
                <div className='chef-details'>
                    <img src={chef} alt="" />
                    <div className="services-details">
                        <h4>A good auto responder</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt nobis cupiditate non deleniti inventore adipisci placeat temporibus amet</p>
                    </div>
                </div>
                <div>
                    <img src={architecture} alt="" />
                    <div className="services-details">
                        <h4>Home delevery</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus deleniti modi assumenda earum quae laboriosam ipsum, neque ratione.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;