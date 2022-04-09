import React from 'react';
import useFirebase from '../../hooks/useFirebase'; 
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
    const {user} = useFirebase();
    if(!user){
        return <Navigate to='/login' />
    }
    return children;
};

export default ProtectedRoute;