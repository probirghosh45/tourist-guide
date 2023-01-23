import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider'

export default function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user?.uid) return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    return children;
}
