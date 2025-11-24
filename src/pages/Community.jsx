import React, { useState, useEffect } from 'react';

function Community() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Практика 24: Fetch API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div className="container">Загрузка сообщества...</div>;

  return (
    <div className="container">
      <h1>Сообщество студентов</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {users.map(user => (
          <div key={user.id} className="card">
            <h3 style={{ margin: '0 0 10px 0' }}>{user.name}</h3>
            <p style={{ color: 'var(--primary)' }}>@{user.username}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{user.company.name}</p>
            <button style={{ width: '100%', marginTop: '10px' }}>Написать</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;