import React from 'react';
import './Food.css';

const Food = ({ selectedFood }) => {
    const { name, picture, price, comment } = selectedFood;
    return (
        <div className='food-details'>
            <img src={picture} alt="" />
            <div className='food-info'>
                <h4>{name}</h4>
                <p>{comment}</p>
                <h5>${price}</h5>
            </div>
        </div>
    );
};

export default Food;