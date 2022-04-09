import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const User = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>Welcome, {user.displayName}</h1>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default User;