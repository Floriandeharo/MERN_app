// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './AuthService';

const ProtectedRoute = ({ element: Element, ...rest }) => (
  <Route
    {...rest}
    element={(props) =>
      isAuthenticated() ? <Element {...props} /> : <Navigate to="/home" replace />
    }
  />
);

export default ProtectedRoute;
