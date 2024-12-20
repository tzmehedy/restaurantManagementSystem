import React from 'react';
import { Navigate, replace, useLocation } from 'react-router';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    if (loading || isAdminLoading)
      return (
        <div className="text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    if (user && isAdmin) return children;
    return <Navigate state={{ from: location }} to={"/"} replace:true></Navigate>;
};

export default AdminRoute;