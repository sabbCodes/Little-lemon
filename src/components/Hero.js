import React from 'react';
import Food from '../ui-kit/restauranfood.jpg'

function Hero(){
    return(
        <div className='heroSection'>
            <div className='heroText'>
                <h1 className='title'>Little Lemon</h1>
                <h3 className='location'>Chicago</h3>
                <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className='reserveBtn'>Reserve a Table</button>
            </div>
            <div className='food'>
                <img src={Food} alt='Food at a restaurant'/>
            </div>
        </div>
    );
};

export default Hero;