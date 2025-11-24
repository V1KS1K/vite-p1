import React from 'react';

function ProgressBar({ value, max = 100, color = 'var(--primary)' }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  // Добавляем переменную для создания неонового эффекта
  const neonShadow = `0 0 8px 1px ${color}`; 

  return (
    <div style={{ 
      width: '100%', 
      backgroundColor: 'var(--border-color)', 
      borderRadius: '10px', 
      height: '20px', 
      overflow: 'hidden', 
      margin: '10px 0' 
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '100%',
        backgroundColor: color,
        // НОВЫЙ НЕОНОВЫЙ ЭФФЕКТ
        boxShadow: neonShadow, 
        
        transition: 'width 0.5s ease-in-out',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <span style={{ fontSize: '12px', color: '#000', fontWeight: 'bold' }}>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;