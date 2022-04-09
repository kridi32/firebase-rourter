import React from 'react';
import { Link } from 'react-router-dom'; 
import useFirebase from '../../hooks/useFirebase';
import '../styles/styles.css'

const Header = () => {
    const {user, logOut} = useFirebase();
    console.log(user);
    return (
        <header>
            <nav className='flex'>
                <Link to='/'>Home</Link>
                <Link to='/inbox'>Inbox</Link>
               {!user && <div className='flex'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
               
                   </div>}
                {user && <div><Link to='/user'>{user.displayName} </Link><Link to='/'><button onClick={logOut}>Log Out</button></Link></div>}
            </nav>
        </header>
    );
};

export default Header;