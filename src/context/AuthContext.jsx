import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// ... (импорты)

export const AuthProvider = ({ children }) => {
  // Имитация хранения статуса авторизации
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuth') === 'true'
  );
  // НОВОЕ: Хранение имени пользователя
  const [userName, setUserName] = useState(localStorage.getItem('userName') || null);
  
  const navigate = useNavigate();

  // Функция для имитации входа
  const login = (username, password) => {
    if (username && password === '123') {
      setIsAuthenticated(true);
      setUserName(username); // Сохраняем имя в состояние
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('userName', username); // Сохраняем имя в localStorage
      alert(`Добро пожаловать, ${username}!`);
      return true;
    }
    alert('Ошибка: Неправильный логин или пароль (используйте пароль 123)');
    return false;
  };

  // Функция для выхода
  const logout = () => {
    setIsAuthenticated(false);
    setUserName(null); // Очищаем имя
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userName'); // Удаляем имя из localStorage
    navigate('/login');
  };

  return (
    // ДОБАВЛЯЕМ userName в значение контекста
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userName }}>
      {children}
    </AuthContext.Provider>
  );
};