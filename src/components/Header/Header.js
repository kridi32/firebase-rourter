import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/styles.css'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </header>
    );
};

export default Header;