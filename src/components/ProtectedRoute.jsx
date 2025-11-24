import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // Если пользователь НЕ авторизован, перенаправляем его на страницу входа.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Если пользователь авторизован, показываем запрошенный компонент.
  return children;
}

export default ProtectedRoute;