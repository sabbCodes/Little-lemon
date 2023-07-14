import React from 'react';
import Hero from './Hero';
import Highlights from './Highlights';

function Main() {
    return(
        <main className='wrapper'>
            <div className='mainContent'>
                <Hero />
            </div>
            <Highlights />
        </main>
    );
};

export default Main;