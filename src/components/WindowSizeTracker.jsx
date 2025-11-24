import React, { useState, useEffect } from 'react';

function WindowSizeTracker() {
  // 1. Состояние для хранения текущих размеров окна
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 2. Функция, которая обновляет состояние при изменении размера
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // 3. Эффект для подписки на событие (Pract 21)
  useEffect(() => {
    console.log('➕ WindowSizeTracker: Обработчик события resize добавлен.');
    
    // Подписываемся на событие 'resize'
    window.addEventListener('resize', handleResize);
    
    // ФУНКЦИЯ ОЧИСТКИ (Cleanup Function)
    // Она сработает, когда компонент будет удален (размонтирован)
    return () => {
      // Отписываемся от события, чтобы избежать утечек памяти
      window.removeEventListener('resize', handleResize);
      console.log('✅ WindowSizeTracker: Обработчик события resize удален (Cleanup)');
    };
    
  // Пустой массив зависимостей: эффект запускается только 1 раз при монтировании
  }, []); 

  return (
    <div className="card" style={{ marginTop: '20px', padding: '20px' }}>
      <h3>📏 Трекер размеров окна</h3>
      <p style={{ color: 'var(--text-muted)' }}>
        <strong style={{ color: 'var(--primary)' }}>Ширина:</strong> {windowSize.width}px
      </p>
      <p style={{ color: 'var(--text-muted)', margin: 0 }}>
        <strong style={{ color: 'var(--primary)' }}>Высота:</strong> {windowSize.height}px
      </p>
      <small style={{ display: 'block', marginTop: '10px' }}>
        <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>
          *Проверь консоль браузера:
        </span> 
        При скрытии трекера ты увидишь сообщение об удалении обработчика (Cleanup).
      </small>
    </div>
  );
}

export default WindowSizeTracker;