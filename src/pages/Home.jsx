import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import WindowSizeTracker from '../components/WindowSizeTracker';

function Home() {
  const { isAuthenticated, userName } = useAuth();
  const [showTracker, setShowTracker] = useState(false); 
  
  const handleTitleClick = () => {
    alert('Вы кликнули на заголовок — так держать!');
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap-reverse', alignItems: 'start', justifyContent: 'center' }}>
        
        {/* ЛЕВЫЙ БЛОК (Приветствие) */}
        <div style={{ flex: 2, minWidth: '300px', maxWidth: '600px' }}>
          <h1 
            onClick={handleTitleClick} 
            style={{ fontSize: '3rem', marginBottom: '10px', cursor: 'pointer', userSelect: 'none' }}
            title="Кликни меня!"
          >
            Добро пожаловать в <span style={{ color: 'var(--primary)' }}>TechTracker</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 0 40px' }}>
            Ваш персональный помощник. Переключайте тему, следите за прогрессом и общайтесь с сообществом.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <Link to="/technologies"><button>Мои технологии</button></Link>
            <Link to="/community"><button>Найти друзей</button></Link>
          </div>

          {/* КНОПКА ТРЕКЕРА (Остается в левом блоке) */}
          <button 
            onClick={() => setShowTracker(prev => !prev)} 
            style={{ 
              borderColor: showTracker ? 'var(--danger)' : 'var(--primary)', 
              color: showTracker ? 'var(--danger)' : 'var(--primary)',
              marginTop: '10px'
            }}
          >
            {showTracker ? 'Скрыть Трекер' : 'Показать Трекер Окна'}
          </button>
        </div>

        {/* ПРАВЫЙ БЛОК (ПРОФИЛЬ и ТРЕКЕР) */}
        <div style={{ 
          // УВЕЛИЧИВАЕМ ШИРИНУ КАРТОЧКИ И ЦЕНТРИРУЕМ 
          width: '350px', 
          minWidth: '300px',
          margin: '0 auto' 
        }}>
          {isAuthenticated ? (
            // ЕСЛИ ЗАЛОГИНЕН: показываем динамический профиль
            <UserProfile currentUserName={userName} /> 
          ) : (
            // ЕСЛИ НЕ ЗАЛОГИНЕН: показываем ярлык авторизации
            <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
              <h2>🔒 Войдите, чтобы начать</h2>
              <p style={{ color: 'var(--text-muted)' }}>Ваш персональный прогресс будет доступен после входа.</p>
              <Link to="/login">
                <button style={{ marginTop: '15px', width: '100%' }}>
                  Перейти к Входу
                </button>
              </Link>
            </div>
          )}
          
          {/* ТРЕКЕР ОКНА ПЕРЕНОСИМ ПОД КАРТОЧКУ ПРОФИЛЯ */}
          {showTracker && <WindowSizeTracker />}
        </div>
      </div>
    </div>
  );
}

export default Home;