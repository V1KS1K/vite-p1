import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="container">
      <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--success)' }}>Добро пожаловать в Админ-панель!</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Эта страница доступна только после успешной авторизации.
        </p>
        <button onClick={logout} style={{ marginTop: '20px', borderColor: 'var(--danger)', color: 'var(--danger)' }}>
          Выйти из системы
        </button>
      </div>
    </div>
  );
}

export default Dashboard;