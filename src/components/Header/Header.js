import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <nav className='nav-menu'>
                <Link to={'/'}>Home</Link>
                <Link to={'/review'}>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;