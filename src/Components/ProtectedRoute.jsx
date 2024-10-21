import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuthenticated, user, token }) => {
    return isAuthenticated? (
        <Component user={user} token={token} />
    ) :
    (
        <Navigate to ="/login" replace />
    )
};

export default ProtectedRoute;