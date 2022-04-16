import React, { useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';
const foods = [
    {
        "id": "625a5ddc36045d006744b611",
        "picture": "https://i.ibb.co/1QBjpdf/breakfast1.png",
        "price": 23,
        "comment": "How we dream our future",
        "name": "Bagel and cream cheese",
        "category": "breakfast"
    },
    {
        "id": "625a5ddcf21683a3cf3c7bdc",
        "picture": "https://i.ibb.co/zFhJJd9/breakfast2.png",
        "price": 22,
        "comment": "How we dream our future",
        "name": "Breakfast sandwich",
        "category": "breakfast"
    },
    {
        "id": "625a5ddcdafe42a41208aa75",
        "picture": "https://i.ibb.co/FVZzbCt/breakfast3.png",
        "price": 31,
        "comment": "How we dream our future",
        "name": "Baked Chiken",
        "category": "breakfast"
    },
    {
        "id": "625a5ddc305418132f490f87",
        "picture": "https://i.ibb.co/nkMz7hq/breakfast4.png",
        "price": 39,
        "comment": "How we dream our future",
        "name": "Eggs Benedict",
        "category": "breakfast"
    },
    {
        "id": "625a5ddcbc6898f487b684a6",
        "picture": "https://i.ibb.co/cbCcKnk/breakfast5.png",
        "price": 24,
        "comment": "How we dream our future",
        "name": "Toast Croissant Fried egg",
        "category": "breakfast"
    },
    {
        "id": "625a5ddc5650113cbe42471c",
        "picture": "https://i.ibb.co/mvyqyhF/breakfast6.png",
        "price": 40,
        "comment": "How we dream our future",
        "name": "Full Breakfast Fried Egg Toast Brunch",
        "category": "breakfast"
    },
    {
        "id": "625a5e033e8dc6811a115175",
        "picture": "https://i.ibb.co/qBjk7Yt/lunch1.png",
        "price": 40,
        "comment": "How we dream our future",
        "name": "Healthy Meal Plan",
        "category": "lunch"
    },
    {
        "id": "625a5e0320d55afdf0c91533",
        "picture": "https://i.ibb.co/yn70RZw/lunch2.png",
        "price": 29,
        "comment": "How we dream our future",
        "name": "Fried Chicken Bento",
        "category": "lunch"
    },
    {
        "id": "625a5e03d190ef9abfc3e46c",
        "picture": "https://i.ibb.co/JjFw7Fx/lunch3.png",
        "price": 38,
        "comment": "How we dream our future",
        "name": "Tarragon-Rubbed-Salmon",
        "category": "lunch"
    },
    {
        "id": "625a5e033e5318be635f4bb2",
        "picture": "https://i.ibb.co/MMvQvjW/lunch4.png",
        "price": 27,
        "comment": "How we dream our future",
        "name": "Indian Lunch",
        "category": "lunch"
    },
    {
        "id": "625a5e03338efdc60c3e35e6",
        "picture": "https://i.ibb.co/mSW1Lfg/lunch5.png",
        "price": 31,
        "comment": "How we dream our future",
        "name": "Beef Steak",
        "category": "lunch"
    },
    {
        "id": "625a5e0307ce8c42d5d935b1",
        "picture": "https://i.ibb.co/1qFcQX3/lunch6.png",
        "price": 22,
        "comment": "How we dream our future",
        "name": "Honey-Soy-Glazed Salmon with Peppers",
        "category": "lunch"
    },
    {
        "id": "625a5e4c32fdc9d4baa79467",
        "picture": "https://i.ibb.co/mBCNfc5/dinner1.png",
        "price": 29,
        "comment": "How we dream our future",
        "name": "Salmon with Grapefruit and Lentil Salad",
        "category": "dinner"
    },
    {
        "id": "625a5e4c43452db627db7647",
        "picture": "https://i.ibb.co/6WrfxBt/dinner2.png",
        "price": 34,
        "comment": "How we dream our future",
        "name": "Lemony Salmon Piccata",
        "category": "dinner"
    },
    {
        "id": "625a5e4c3b574b95656fa370",
        "picture": "https://i.ibb.co/k4Xw3T4/dinner3.png",
        "price": 25,
        "comment": "How we dream our future",
        "name": "Pork Tenderloin With Quinoa Pilaf",
        "category": "dinner"
    },
    {
        "id": "625a5e4ce78685c6b8887e00",
        "picture": "https://i.ibb.co/XbkgXQt/dinner4.png",
        "price": 36,
        "comment": "How we dream our future",
        "name": "French fries with cheese",
        "category": "dinner"
    },
    {
        "id": "625a5e4c049fcecdb345536f",
        "picture": "https://i.ibb.co/5FcVnMs/dinner5.png",
        "price": 23,
        "comment": "How we dream our future",
        "name": "Garlic Butter Baked Salmon",
        "category": "dinner"
    },
    {
        "id": "625a5e4cf34ef4bd233ee43f",
        "picture": "https://i.ibb.co/WvVyN0J/dinner6.png",
        "price": 38,
        "comment": "How we dream our future",
        "name": "Baked Chiken",
        "category": "dinner"
    }
];

const breakfast = foods.filter(food => food.category.includes('breakfast'));
const lunch = foods.filter(food => food.category.includes('lunch'));
const dinner = foods.filter(food => food.category.includes('dinner'));


const Foods = () => {
    const [selectedFoods, setSelectedFoods] = useState(breakfast);

    return (
        <div className='container'>
            <div className='btn-container'>
                <button onClick={() => setSelectedFoods(breakfast)}>Breakfast</button>
                <button onClick={() => setSelectedFoods(lunch)}>Lunch</button>
                <button onClick={() => setSelectedFoods(dinner)}>Dinner</button>
            </div>
            <div className='foods-container'>
                {
                    selectedFoods.map(selectedFood => <Food
                        key={selectedFood.id}
                        selectedFood={selectedFood}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;