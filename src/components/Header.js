import React from 'react';
import { ReactComponent as Logo } from '../ui-kit/Logo.svg';
import Nav from './Nav';

function Header() {
    return(
        <header className='header'>
            <Logo />
            <Nav />
        </header>
    )
};

export default Header;