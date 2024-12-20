import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    if(loading) {
      return (
        <div className="flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    }
    if(user) {
      return children;
    }
    return <Navigate state={{ from: location }} to={"/login"} replace:true></Navigate>;
};

export default PrivateRoute;