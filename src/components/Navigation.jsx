import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext'; // Используется для кнопки Вход/Выход

function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth(); // Получаем статус и функцию выхода

  // Функция для стилизации ссылок в зависимости от текущего маршрута
  const linkStyle = (path) => ({
    color: location.pathname === path ? 'var(--bg-main)' : 'var(--primary)',
    backgroundColor: location.pathname === path ? 'var(--primary)' : 'transparent',
    padding: '8px 12px',
    borderRadius: '4px',
    marginRight: '10px'
  });

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px', 
      borderBottom: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-card)',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: 'var(--primary)', margin: 0 }}>
        🚀 TechTracker
      </h2>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* ОСНОВНЫЕ ССЫЛКИ */}
        <Link to="/" style={linkStyle('/')}>Главная</Link>
        <Link to="/technologies" style={linkStyle('/technologies')}>Технологии</Link>
        <Link to="/statistics" style={linkStyle('/statistics')}>Статистика</Link> {/* <-- ССЫЛКА ДОБАВЛЕНА */}
        <Link to="/community" style={linkStyle('/community')}>Сообщество</Link>
        
        {/* Ссылка на защищенную панель, показывается только авторизованным */}
        {isAuthenticated && (
          <Link to="/dashboard" style={linkStyle('/dashboard')}>
            Панель
          </Link>
        )}
        
        {/* Кнопка Вход/Выход */}
        {isAuthenticated ? (
          <button onClick={logout} style={{ marginLeft: '10px', borderColor: 'var(--danger)', color: 'var(--danger)', padding: '8px 12px' }}>
            Выход
          </button>
        ) : (
          <Link to="/login">
            <button style={{ marginLeft: '10px', padding: '8px 12px' }}>
              Вход
            </button>
          </Link>
        )}
        
        {/* Переключение темы */}
        <button onClick={toggleTheme} style={{ marginLeft: '10px', fontSize: '1.2rem', padding: '5px 10px', border: 'none' }}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;