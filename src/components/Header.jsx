import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar container">
                <div className='header-inner'>
                    <div className="logo-wrapper">
                        <Link to="/"><img src="src/assets/logo.png" alt="Next gen" className='logo' /></Link>
                    </div>
                    <div className='nav-inner'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/books">Books</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;