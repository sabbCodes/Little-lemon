import React from 'react';
import GreekPic from '../ui-kit/greek salad.jpg';
import BruschettaPic from '../ui-kit/bruschetta.jpg';
import LemonPic from '../ui-kit/lemon dessert.jpg';

function Highlights(){
    return(
        <div className='highlightsWrapper'>
            <div className='highlightsHead'>
                <h4>This week's specials!</h4>
                <button className='onlineBtn'>Online Menu</button>
            </div>
            <div className='specials'>
                <div className='specialItem'>
                    <img src={GreekPic} alt='Greek Salad'/>
                    <div className='innerItem'>
                        <div className='specialHeader'>
                            <h4>Greek Salad</h4>
                            <span>$12.99</span>
                        </div>
                        <div>
                            <p>The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                        <div>
                            <h5 id='brusch'>Order a delivery</h5>
                        </div>
                    </div>
                </div>
                <div className='specialItem'>
                    <img src={BruschettaPic} alt='BruschettaPic'/>
                    <div className='innerItem'>
                        <div className='specialHeader'>
                            <h4>Bruschetta</h4>
                            <span>$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <h5>Order a delivery</h5>
                    </div>
                </div>
                <div className='specialItem'>
                    <img src={LemonPic} alt='Lemon Dessert'/>
                    <div className='innerItem'>
                        <div className='specialHeader'>
                            <h4>Lemon Dessert</h4>
                            <span>$5.00</span>
                        </div>
                        <p>This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h5>Order a delivery</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights