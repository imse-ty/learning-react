import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'

function Header() {
    return (
        <header className='border-b font-bold p-3 flex justify-between items-center'>
            <Link to="/">AppName</Link>
            <Navigation />
        </header>
    )
}

export default Header;
