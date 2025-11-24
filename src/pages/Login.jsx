import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/dashboard'); // Перенаправляем на защищенную страницу после успешного входа
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', textAlign: 'center', paddingTop: '50px' }}>
      <h1>🔐 Вход в систему</h1>
      <form onSubmit={handleSubmit} className="card" style={{ padding: '30px', marginTop: '20px' }}>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Имя пользователя:</label>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Введите имя"
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Пароль:</label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Введите пароль"
            required
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;