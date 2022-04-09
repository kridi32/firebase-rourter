import React from 'react';
import '../styles/styles.css'

const Login = () => {
    return (
        <div>
            <h1>Log in to start your journey!</h1> <br /> 
            <button>Login with Google</button><br /><br />
            <form action=""> 
               <input type="email" name="" placeholder='Your email' id="" /> <br />
               <input type="password" name="" placeholder='Enter a password'  id="" /> <br />
               <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;