import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--danger)' }}>404</h1>
      <p>Страница не найдена или была удалена.</p>
      <Link to="/"><button>Вернуться домой</button></Link>
    </div>
  );
}

export default NotFound;