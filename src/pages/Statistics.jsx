import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import StatusChart from '../components/StatusChart';

// Начальные данные для подсчета (как заглушка, если нет данных в localStorage)
const initialData = [ 
  { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
  { id: 2, title: 'Hooks & Effects', description: 'useState, useEffect', status: 'in-progress' },
  { id: 3, title: 'API Integration', description: 'Fetch, Axios', status: 'not-started' },
];

function Statistics() {
  // Получаем данные о технологиях
  const [technologies] = useLocalStorage('tech-data', initialData);

  // 1. Подсчитываем статусы
  const total = technologies.length;
  const completed = technologies.filter(t => t.status === 'completed').length;
  const inProgress = technologies.filter(t => t.status === 'in-progress').length;
  const notStarted = technologies.filter(t => t.status === 'not-started').length;
  
  // 2. Формируем данные для графика
  const chartData = [
    { label: 'Изучено', count: completed, color: 'var(--success)' },
    { label: 'В процессе', count: inProgress, color: 'var(--warning)' },
    { label: 'Не начато', count: notStarted, color: 'var(--danger)' },
  ];

  const overallProgress = total > 0 ? ((completed / total) * 100).toFixed(0) : 0;

  return (
    <div className="container">
      <h1>📊 Статистика прогресса (Pract 23)</h1>
      <p style={{color: 'var(--text-muted)'}}>Общее количество технологий в трекере: **{total}**</p>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        
        {/* Визуализация графика (слева) */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <StatusChart data={chartData} total={total} />
        </div>
        
        {/* Сводка (справа) */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <div className="card">
            <h2>Сводка по статусам</h2>
            {chartData.map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ color: item.color, fontWeight: 'bold' }}>{item.label}</span>
                <span>{item.count} из {total} ({total > 0 ? ((item.count / total) * 100).toFixed(1) : 0}%)</span>
              </div>
            ))}
            <div style={{ paddingTop: '15px', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)', borderTop: '1px solid var(--border-color)' }}>
              <span>Общий Прогресс: {overallProgress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;