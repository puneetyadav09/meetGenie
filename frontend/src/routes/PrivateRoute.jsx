// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // or use context/auth state

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;