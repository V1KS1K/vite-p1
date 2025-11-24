import React, { useState } from 'react';
import TechnologyCard from '../components/TechnologyCard';
import useLocalStorage from '../hooks/useLocalStorage';
import ProgressBar from '../components/ProgressBar';
import useDebounce from '../hooks/useDebounce'; // <--- ИМПОРТИРУЕМ НОВЫЙ ХУК

// Начальные данные
const initialData = [
  { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
  { id: 2, title: 'Hooks & Effects', description: 'useState, useEffect', status: 'in-progress' },
  { id: 3, title: 'API Integration', description: 'Fetch, Axios', status: 'not-started' },
  { id: 4, title: 'Context API', description: 'Global State Management', status: 'not-started' },
];

function Technologies() {
  const [technologies, setTechnologies] = useLocalStorage('tech-data', initialData);
  // 1. Храним непосредственный ввод пользователя
  const [searchTerm, setSearchTerm] = useState(''); 
  
  // 2. Получаем ЗАТОРМОЖЕННОЕ значение для фильтрации (задержка 500мс)
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  // Подсчет прогресса
  const completedCount = technologies.filter(t => t.status === 'completed').length;
  
  // Массовые действия (для краткости не меняем)
  const markAllComplete = () => {
    if(window.confirm('Точно отметить всё как изученное?')) {
      const updated = technologies.map(t => ({ ...t, status: 'completed' }));
      setTechnologies(updated);
    }
  };

  const resetAll = () => {
    if(window.confirm('Сбросить весь прогресс?')) {
      const updated = technologies.map(t => ({ ...t, status: 'not-started', notes: '' }));
      setTechnologies(updated);
    }
  };

  // ФИЛЬТРАЦИЯ ИСПОЛЬЗУЕТ ЗАТОРМОЖЕННОЕ ЗНАЧЕНИЕ
  const filteredTechs = technologies.filter(tech => 
    // Проверяем, что debouncedSearchTerm существует, прежде чем фильтровать
    tech.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    tech.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Ваш прогресс</h1>
        <ProgressBar value={completedCount} max={technologies.length} />
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="🔍 Поиск..." 
          // Поле ввода привязано к обычному searchTerm
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1, minWidth: '200px' }}
        />
        <button onClick={markAllComplete} style={{ borderColor: 'var(--success)', color: 'var(--success)' }}>
          ✅ Всё изучено
        </button>
        <button onClick={resetAll} style={{ borderColor: 'var(--warning)', color: 'var(--warning)' }}>
          🔄 Сброс
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredTechs.map(tech => (
          <div key={tech.id} className="card">
             <TechnologyCard technology={tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;