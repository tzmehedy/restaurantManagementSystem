import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) <div className='text-center'>
      <span className="loading loading-ring loading-lg"></span>
    </div>;
    if(user) return children
    return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default PrivateRoute;