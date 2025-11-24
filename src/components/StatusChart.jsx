import React from 'react';

// Компонент для визуализации статистики прогресса
function StatusChart({ data, total }) {
  if (total === 0) {
    return (
      <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
        <p>Нет данных для отображения статистики.</p>
      </div>
    );
  }

  // Рассчитываем проценты и создаем сегменты для графика
  const segments = data.map(item => ({
    ...item,
    percentage: total > 0 ? (item.count / total) * 100 : 0
  }));

  return (
    <div className="card">
      <h2>Визуализация прогресса</h2>
      
      {/* СТЕКОВЫЙ ГРАФИК (Stacked Bar Chart) */}
      <div style={{ 
        width: '100%', 
        height: '40px', 
        display: 'flex', 
        borderRadius: '8px', 
        overflow: 'hidden', 
        marginTop: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)' // Небольшая тень для объема
      }}>
        {segments.map((segment, index) => (
          <div 
            key={index}
            style={{ 
              width: `${segment.percentage}%`, 
              backgroundColor: segment.color,
              transition: 'width 0.5s ease'
            }}
            // Подсказка при наведении
            title={`${segment.label}: ${segment.percentage.toFixed(1)}%`}
          />
        ))}
      </div>
      
      {/* Легенда */}
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {segments.map((segment, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <span 
              style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: segment.color, 
                borderRadius: '50%', 
                marginRight: '8px',
                // Неоновый эффект, чтобы гармонировал с прогресс-баром
                boxShadow: `0 0 5px ${segment.color}` 
              }}
            />
            <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
              {segment.label} ({segment.count})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusChart;