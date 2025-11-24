import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

function TechDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [technologies, setTechnologies] = useLocalStorage('tech-data', []);
  const [tech, setTech] = useState(null);
  
  // Поиск технологии по ID при загрузке
  useEffect(() => {
    const found = technologies.find(t => t.id === Number(id));
    if (found) setTech(found);
  }, [id, technologies]);

  // Обновление статуса или заметок
  const updateTech = (updates) => {
    const updatedTechs = technologies.map(t => 
      t.id === Number(id) ? { ...t, ...updates } : t
    );
    setTechnologies(updatedTechs);
    setTech({ ...tech, ...updates });
  };

  if (!tech) return <div className="container">Загрузка или технология не найдена...</div>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>← Назад</button>
      
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '40px', borderRadius: '12px' }}>
        <h1 style={{ color: 'var(--primary)', marginTop: 0 }}>{tech.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{tech.description}</p>
        
        <hr style={{ borderColor: '#333', margin: '30px 0' }} />
        
        <h3>Статус изучения:</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          {['not-started', 'in-progress', 'completed'].map(status => (
            <button 
              key={status}
              className={tech.status === status ? 'active' : ''}
              onClick={() => updateTech({ status })}
            >
              {status}
            </button>
          ))}
        </div>

        <h3>Мои заметки:</h3>
        <textarea 
          rows="5"
          value={tech.notes || ''} 
          onChange={(e) => updateTech({ notes: e.target.value })}
          placeholder="Напишите здесь важные моменты..."
        />
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '5px' }}>
          Изменения сохраняются автоматически.
        </p>
      </div>
    </div>
  );
}

export default TechDetail;