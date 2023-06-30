import React from 'react';
import { ReactComponent as Logo } from '../ui-kit/Recent.svg';

function Footer() {
    return(
        <>
            <Logo />
            <div>
                <h3>Dormant Navigation</h3>
                <ul>
                    <li>
                        <a href='/#home'>HOME</a>
                    </li>
                    <li>
                        <a href='/#about'>ABOUT</a>
                    </li>
                    <li>
                        <a href='/#menu'>MENU</a>
                    </li>
                    <li>
                        <a href='/#reservations'>RESERVATIONS</a>
                    </li>
                    <li>
                        <a href='/#order-online'>ORDER ONLINE</a>
                    </li>
                    <li>
                        <a href='/#login'>LOGIN</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </>
    )
};

export default Footer;