import React from 'react';
import { ReactComponent as Logo } from '../ui-kit/Logo.svg';
import Nav from './Nav';

function Header() {
    return(
        <>
            <Logo />
            <Nav />
        </>
    )
};

export default Header;